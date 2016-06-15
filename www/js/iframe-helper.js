$(function() {
  var media = "/media/abcmusicpodcast-august2014.mp3";
  if (window === window.top) {
    $("body")
      .replaceWith(
        $("<body></body>")
        .append($("<iframe></iframe>")
          .attr({
            class: "site",
            src: window.location.href
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
  }
});
