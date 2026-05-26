const CACHE_NAME = "calculators-pk-v1";

const urlsToCache = [
  "/calculators/",
  "/calculators/offline.html"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {

        // Return cached file if exists
        if (response) {
          return response;
        }

        return fetch(event.request)
          .catch(() => {
            return caches.match("/calculators/offline.html");
          });

      })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
