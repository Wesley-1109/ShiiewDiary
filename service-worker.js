self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('meow-love-diary').then((cache) => {
      return cache.addAll([
        'index-single.html',
        'manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});