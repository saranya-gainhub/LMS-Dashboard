'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0bc400eebdf2f44ae97ab6b77d41ea57",
"assets/AssetManifest.bin.json": "2ce5934181f6246fe9db4ef6c54eec6a",
"assets/AssetManifest.json": "5dac791a77823ea71c7f9ae0d7df856b",
"assets/assets/images/australia.json": "581d9a831f3376bcedbb019e5975f2fe",
"assets/assets/images/automotive.png": "432f88718f10a9dcffb0b46911f8bf2f",
"assets/assets/images/b2b-2.jpg": "f36dfe390d16328924ce2279d8f34f81",
"assets/assets/images/background.png": "920df9cb6c303080aa56bce7c56419ce",
"assets/assets/images/bfsi.png": "550ecf454a138b0d6f1e59bf4f0737e0",
"assets/assets/images/cgp.png": "cb1033eee4775e05d150b22ce8efd7c6",
"assets/assets/images/direct%2520sales.png": "7c310f55ecb1c41e9cfc9784d90d50ea",
"assets/assets/images/edtech.png": "f7d944827946a605b555777f3345ce6d",
"assets/assets/images/Ellipse_1.png": "ab6656f37bd1f26f28155d85c601f119",
"assets/assets/images/Ellipse_2.png": "8a8aea3cca1888eb42dc31c04d4be13c",
"assets/assets/images/Ellipse_3.png": "6b91ec74f904be2bb48d199e53e486af",
"assets/assets/images/facebook_icon.png": "e9e6dab6c218c595f0f6b1fe278b485f",
"assets/assets/images/Financial.xlsx": "2144cb2ec4ebbc8cd508d8cf02c04bd2",
"assets/assets/images/fintech.png": "f3586dd1ce71e7c81abd3781f98f4745",
"assets/assets/images/google.png": "bde3f130d02e4bcbb6c76c99ba8fb316",
"assets/assets/images/HRMS2.png": "bbdaf8dd3417854bdacaf6766e0b4406",
"assets/assets/images/inventor.webp": "90b163af274deb1c95676caf17906e36",
"assets/assets/images/inventory.png": "889aba9d54358ad491d61071601c0313",
"assets/assets/images/IT.jpg": "2f476580d3d6961d9cd67eb3efc44d3f",
"assets/assets/images/knowledge.png": "3d432292de2735a25a50459ceeb699ac",
"assets/assets/images/linkedin.png": "5ad764110ca8689943ba4c5739d5d61c",
"assets/assets/images/LMS-institutions.png": "c2917ac297868f1e749185d4f341f5d7",
"assets/assets/images/LMS1.jpg": "c3f4b44f445847993887116a1c15f28d",
"assets/assets/images/login_banner_image.png": "f7210e2450e4dc89f2fd47b74c1777c5",
"assets/assets/images/manufacturing.avif": "bb8348c2320c0214504d91f41696ae34",
"assets/assets/images/manufacturing.jpg": "9e07b4d8bf5293cb818abc303b2c6b59",
"assets/assets/images/manufacturing.png": "1a8ceb2d4a574a46e6a8c5ad87e8b035",
"assets/assets/images/manufacturing1.png": "89d0b9bc83e8c62ea3289dd8f8bf225e",
"assets/assets/images/Manufacturing_vector.png": "4efc23b5a046c0e88965c698eabeb881",
"assets/assets/images/mapp.png": "45646acdec7d92701c699add13d3d741",
"assets/assets/images/marketer-delivering-ads-with-megaphone-devices-cross-device-marketing-cross-device-marketing-analysis-strategy-concept-pinkish-coral-bluevector-isolated-illustration_335657-2521.avif": "7953236dac53c96d4689b565729383b9",
"assets/assets/images/media.png": "6a8ff6331c81ce3300ee3f96bf238900",
"assets/assets/images/MLM.jpg": "c2e75f64244cf4290547c9ed25f873d1",
"assets/assets/images/modern-style-vector-fintech-technology_203633-1109.avif": "48f70c087ccc38333dfc104887b1200c",
"assets/assets/images/oms-1.png": "46cf0a2769d1070acee57c51da2b6103",
"assets/assets/images/online-pharmacy-concept-showing-pharmacist-give-advice-counseling-medication-customer-vector_566886-810.avif": "245ef301f3d042064fdddb755b2dcdbd",
"assets/assets/images/pharmacy.png": "1bd84e2f5ab9fd009d979eb91ff463c8",
"assets/assets/images/profile.png": "7fc5a52672d97e532ae995083689c994",
"assets/assets/images/project.jpg": "c6736e139abff1f09317a29f2399b032",
"assets/assets/images/purchase.png": "c1406aa7940cc341ea0f2fef76e4ed5e",
"assets/assets/images/retail.jpg": "f9b3db2957caa95d0d6d0200818cb686",
"assets/assets/images/retail1.jpg": "00edef2e4a5d4d8c5c671a23db876d09",
"assets/assets/images/retail2.jpg": "9c1c69030bd937c2d4f61d5a8b1803bc",
"assets/assets/images/rfq-marketing.png": "845ce3fd53cfa5df14af599c7c8b5825",
"assets/assets/images/sector_manufacturing.png": "801a7e2ddd23e84577609ce19c80cd97",
"assets/assets/images/sector_pharma.png": "4d8a8145d881a785d0d59fbdae8a3791",
"assets/assets/images/sector_retaill.png": "0f8f1b88ca82c7af66aafcac49d836b2",
"assets/assets/images/sector_telecom.jpg": "950ec580383dfdd1ab675e5e3deb7207",
"assets/assets/images/service.jpg": "6408700bb7b44ec542300024bc9e89c6",
"assets/assets/images/startup.png": "209618de640ca05edbda0086eed25fdf",
"assets/assets/images/telecommunication%2520(2).jpg": "5765d2c4d9a9e3ee678ca33e1c93ecb2",
"assets/assets/images/telecommunication.jpg": "afb4e6e8ff61056162d1158388ffa2bf",
"assets/assets/images/travel.png": "8179b89cfd705cea99bdef3e3d627185",
"assets/assets/images/vector-illustration-concept-invest-wisely-with-humans-investing-money-stocks_675567-2927%2520(1).avif": "39cbcfd3cacc231e1b2b19a930764618",
"assets/assets/images/workflow%2520management.png": "95ad1cad10ba6f4984deef7043476b56",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "447cf3c3199b001eefee74e3545138eb",
"assets/NOTICES": "e69e01733617c88a7d04525d11fc466d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"gain.ico": "6675d817660e4fd68375ea71cbe5b57d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "28484157277c1219385983dd3d3730af",
"/": "28484157277c1219385983dd3d3730af",
"main.dart.js": "57fc6663b218f0877925fe18d80e5edf",
"manifest.json": "a0ae587e9932f94c1cc40914faf1909c",
"version.json": "191595f72c94967ff44fc676a3aedb8c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
