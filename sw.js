self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("eco-v1").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/quiz.html",
        "/img/logo.png",
        "/css/tailwind.css"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
