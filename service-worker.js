self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("mobywatel-cache").then((cache) => {
      return cache.addAll([
        "/",
        "/login.html",
        "/index.html",
        "/dowod.html",
        "/prawo.html",
        "/bell.png",
        "/dowojo.png",
        "/prawojo.png",
        "/orzelek.png",
        "/dwd_layout.png",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
