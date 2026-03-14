self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('iloilo-v1').then((cache) => cache.addAll([
      '/',
      'index.html',
      'manifest.json'
    ]))
  );
});
