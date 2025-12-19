self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("quiz-cache").then(cache =>
      cache.addAll(["./"])
    )
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
