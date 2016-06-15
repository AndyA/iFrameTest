$(function() {

  var player = "/player.php";

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
    return p.href;
  }

  function getHost(url) {
    var p = document.createElement("a");
    p.href = url;
    return p.host;
  }


  if (window === window.top) {
    // If we're the top level replace page body with
    // suitable iframes
    $("body")
      .replaceWith(
        $("<body></body>")
        .attr({
          class: "iframe-wrapper"
        })
        .append($("<iframe></iframe>")
          .attr({
            class: "site",
            src: cb(window.location.href)
          }))
        .append($("<iframe></iframe>")
          .attr({
            class: "player",
            src: player
          }))
      );
  } else {
    var href = cbClean(window.location.href);
    // Replace browser URL and top level
    window.top.history.replaceState({}, document.title, href);
    window.top.document.title = document.title;

    // Fix up any off-site links
    var thisHost = getHost(href);
    $("a")
      .each(function() {
        var thatHost = getHost($(this)
          .attr("href"));
        if (!this.hasAttribute("target") && thisHost !== thatHost) {
          $(this)
            .attr({
              target: "_parent"
            });
        }
      });
  }
});
