webView.addEventListener("new-window", function (e) {
  webView.src = e.url;
});
