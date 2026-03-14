self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("PWa routet-cache").then(function(cache) {
      return cache.addAll(["index.html"]);
    })
  );
});
