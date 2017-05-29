var CACHE_NAME = 'carbcounter-cache-v1 ';
var urlsToCache = [
    'https://quazarrdesigns.github.io/projects/CarbCounterPlusAngular/app/bower_components',
    'https://quazarrdesigns.github.io/projects/CarbCounterPlusAngular/app/carbcalc',
    'https://quazarrdesigns.github.io/projects/CarbCounterPlusAngular/app/components/version',
    'https://quazarrdesigns.github.io/projects/CarbCounterPlusAngular/app/core',
    'https://quazarrdesigns.github.io/projects/CarbCounterPlusAngular/app/dosecalc',
    'https://quazarrdesigns.github.io/projects/CarbCounterPlusAngular/app/favicons',
    'https://quazarrdesigns.github.io/projects/CarbCounterPlusAngular/app/settings',
    'https://quazarrdesigns.github.io/projects/CarbCounterPlusAngular/app/index.html',
    'https://quazarrdesigns.github.io/projects/CarbCounterPlusAngular/app/app.js',
    'https://quazarrdesigns.github.io/projects/CarbCounterPlusAngular/app/app.css'
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
