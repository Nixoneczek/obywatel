self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("mobywatel-cache").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/login.html",
        "/zdj/bell.png",
        "/zdj/dowojo.png",
        "/zdj/prawojo.png",
        "/zdj/orzelek.png",
        "/zdj/dwd_layout.png",
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
