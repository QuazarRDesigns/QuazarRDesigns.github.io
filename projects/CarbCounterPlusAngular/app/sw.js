var CACHE_NAME = 'carbcounter-cache-v0.4.2';
var urlsToCache = [
  'index.html',
  'https://code.jquery.com/jquery-3.1.1.min.js',
  'https://fonts.googleapis.com/css?family=Montserrat:400,700',
  'bower_components/html5-boilerplate/dist/css/normalize.css',
  'app.css',
  'app.js',
  'bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js',
  'bower_components/angular/angular.js',
  'bower_components/angular-route/angular-route.js',
  'build/css/app.min.css',
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
  'favicons/favicon.ico',
  'favicons/favicon-16x16.png',
  'favicons/favicon-32x32.png',
  'favicons/android-chrome-192x192.png',
  'favicons/android-chrome-512x512.png',
  'favicons/manifest.json'
];

self.addEventListener('install', function (event) {
  // Perform install steps
  event.waitUntil(precache());
});


self.addEventListener('fetch', function (event) {
  event.respondWith(fromCache(event.request));

  event.waitUntil(update(event.request));
});

function precache() {
  return caches.open(CACHE_NAME)
  .then(function (cache) {
    console.log('Opened cache');
    return cache.addAll(urlsToCache)
  })
}

function fromCache(request) {
  return caches.open(CACHE_NAME).then(function (cache) {
    return cache.match(request).then(function (matching) {
      return matching || Promise.reject('no-match');
    });
  });
}

function update(request) {
  return caches.open(CACHE_NAME).then(function (cache) {
    return fetch(request).then(function (response) {
      return cache.put(request, response);
    });
  });
}
