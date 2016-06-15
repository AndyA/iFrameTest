$(function() {

  function cb(url) {
    var p = document.createElement("a");
    p.href = url;
    var unique = new Date()
      .getTime();
    p.search += (p.search.length ? "&" : "?") + "_cb=" + unique;
    return p.href;
  }

  function cbClean(url) {
    var p = document.createElement("a");
    p.href = url;
    if (p.search.length == 0) return p.href;
    var part = p.search.substr(1)
      .split("&");
    var out = [];
    for (var i = 0; i < part.length; i++) {
      if (/^_cb=\d+$/.test(part[i])) continue;
      out.push(part[i]);
    }
    p.search = out.length ? ("?" + out.join("&")) : "";
    console.log("Stripped: " + p.href);
    return p.href;
  }

  var media = "/media/abcmusicpodcast-august2014.mp3";

  if (window === window.top) {
    $("body")
      .replaceWith(
        $("<body></body>")
        .append($("<iframe></iframe>")
          .attr({
            class: "site",
            src: cb(window.location.href)
          }))
        .append($("<div></div>")
          .attr({
            class: "player"
          })
          .append($("<audio></audio>")
            .attr({
              src: media,
              controls: ""
            }))));

    $(".site")
      .load(function(ev) {
        console.log("iFrame loaded", ev);
      });
  } else {
    var title = document.title;
    window.top.history.replaceState({}, title, cbClean(window.location.href));
    window.top.document.title = title;
  }
});
