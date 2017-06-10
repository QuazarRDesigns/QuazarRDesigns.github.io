var CACHE_NAME = 'carbcounter-cache-v0.3';
var urlsToCache = [
  'index.html',
  'https://fonts.googleapis.com/css?family=Montserrat:400,700',
  'bower_components/html5-boilerplate/dist/css/normalize.css',
  'bower_components/html5-boilerplate/dist/css/main.css',
  'app.css',
  'bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js',
  'bower_components/angular/angular.js',
  'bower_components/angular-route/angular-route.js',
  'app.js',
  'core/core.js',
  'carbcalc/carbcalc.js',
  'dosecalc/dosecalc.js',
  'settings/settings.js',
  'core/core.html',
  'carbcalc/carbcalc.html',
  'dosecalc/dosecalc.html',
  'settings/settings.html',
  'components/version/version.js',
  'components/version/version-directive.js',
  'components/version/interpolate-filter.js',
  'https://fonts.gstatic.com/s/montserrat/v10/zhcz-_WihjSQC0oHJ9TCYAzyDMXhdD8sAj6OAJTFsBI.woff2',
  'favicons/favicon-16x16.png',
  'favicons/favicon-32x32.png',
  'favicons/android-chrome-192x192.png',
  'favicons/android-chrome-512x512.png',
  'favicons/manifest.json'


];

self.addEventListener('install', function (event) {
  // Perform install steps
  event.waitUntil(
          caches.open(CACHE_NAME)
          .then(function (cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
          })
          );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
          caches.match(event.request)
          .then(function (response) {
            // Cache hit - return response
            if (response) {
              return response;
            }
            return fetch(event.request);
          }
          )
          );
});

self.addEventListener('activate', function(event) {
  var cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (cacheWhitelist.indexOf(key) === -1) {
          console.log('Deleted previous cache');
          return caches.delete(key);
        }
      }));
    })
  );
});