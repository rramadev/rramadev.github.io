var CACHE_NAME = 'rramadev-site-cache';
var urlsToCache = [
  '/',
  '/index.html',
  'src/assets/css/styles.min.css',
  'src/assets/js/app.js',
  'src/assets/js/particles.min.js',
  'src/assets/fonts/fontawesome-webfont.woff',
  'src/assets/img/avatar-min.jpg',
  'src/assets/img/avatarbg-min.jpg',
  'src/assets/img/projectbg1-min.jpg',
  'src/assets/img/projectbg2-min.jpg',
  'src/assets/img/projectbg3-min.jpg',
  'src/assets/img/logo/angularlogo.png',
  'src/assets/img/logo/bootstraplogo.png',
  'src/assets/img/logo/css3logo.png',
  'src/assets/img/logo/html5logo.png',
  'src/assets/img/logo/jquerylogo.png',
  'src/assets/img/logo/jslogo.png',
  'src/assets/img/logo/nodelogo.png',
  'src/assets/img/logo/tslogo.png'
];

self.addEventListener('install', function(event) {
  console.log('[ServiceWorker] Install');
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== CACHE_NAME) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
    .then(function(response) {
      // Cache hit - return response
      if (response) {
        return response;
      }

      // IMPORTANT: Clone the request. A request is a stream and
      // can only be consumed once. Since we are consuming this
      // once by cache and once by the browser for fetch, we need
      // to clone the response.
      var fetchRequest = event.request.clone();

      return fetch(fetchRequest).then(
        function(response) {
          // Check if we received a valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // IMPORTANT: Clone the response. A response is a stream
          // and because we want the browser to consume the response
          // as well as the cache consuming the response, we need
          // to clone it so we have two streams.
          var responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then(function(cache) {
              cache.put(event.request, responseToCache);
            });

          return response;
        }
      );
    })
  );
});
