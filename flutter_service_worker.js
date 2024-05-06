'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"splash/img/light-2x.png": "1dc97ca7e9d14295732b6da35deb3a9a",
"splash/img/light-4x.png": "0a80b122dc41f200cf8d5adc06f940de",
"splash/img/light-3x.png": "41c486701a5a86f1e458a33814eac9e1",
"splash/img/dark-2x.png": "1dc97ca7e9d14295732b6da35deb3a9a",
"splash/img/dark-3x.png": "41c486701a5a86f1e458a33814eac9e1",
"splash/img/dark-4x.png": "0a80b122dc41f200cf8d5adc06f940de",
"splash/img/dark-1x.png": "877b0095b4b93b825d37a5229311fe07",
"splash/img/light-1x.png": "877b0095b4b93b825d37a5229311fe07",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"manifest.json": "9769eff1025dca45e99bb73c13050b3c",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.ico": "5d454a771e29802dffb0bd009917065d",
"index.html": "1a687a5071f908bb3ff59128a9859773",
"/": "1a687a5071f908bb3ff59128a9859773",
"assets/FontManifest.json": "578fa61108a9a871931214344b9060a7",
"assets/AssetManifest.bin": "832dc2c8051e38792fad60cfa51a36d5",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/dotenv": "873837565919ce541180fc8f817d2522",
"assets/assets/images/ptit_logo.png": "5697689ec73f48069849b31e795cc61a",
"assets/assets/images/ptit_logo_mini.png": "11d38b9de3063f19c816ce23b89bd6bf",
"assets/AssetManifest.bin.json": "089aef6c06a413b2260bb6581fd08bad",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/NOTICES": "1962b4d757804792ff886e0d21414ef3",
"assets/fonts/MaterialIcons-Regular.otf": "f832b74e82a87db638316db8fa4f1c1b",
"assets/AssetManifest.json": "60170134ccb5389231f9ab1ca810bb78",
"main.dart.js": "e9f29a4e87cd1e7b5ea81c93acd4dc9a",
".git/logs/HEAD": "df383cde1e477789dbd6693d056a1f92",
".git/logs/refs/heads/gh-pages": "df383cde1e477789dbd6693d056a1f92",
".git/logs/refs/remotes/origin/gh-pages": "f736118d2e91f34d17612569fcedcd11",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/objects/ca/8cad97448ac77222441e707d2c33f3d59dd236": "12ded42efee7547379cb73af8bd3f562",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/3f/b53d5344b530da047ebb9c4d950643e74297d0": "317f5e0d5583dd011e80b612bf0ee87d",
".git/objects/3d/937f59bbcf8c7b4d0afd6a4273c534f981bef3": "355ed336f1655341de2858a8718664fe",
".git/objects/d7/f42e13b4729c364e75710ab1cd2b7960eb8fb9": "cd69563f6ca6137c9657c3ba9cd90fa4",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/d9/4b867787029c078102e987597b2bfddbc4fb89": "c02e698ff4985bd3edd2ec9f919c9aa3",
".git/objects/bf/cd53052cca6883274a383fda6eb4722f26646a": "2b9d2d9dbb91c170ef481eb571a2b816",
".git/objects/28/e80360a70dd74f17238153c50988d319447712": "4963d7d261655bdcda40522a5f7ceb4f",
".git/objects/8a/92f357c839020637906d065dd7ec18f19a48df": "b7f80effb39f9abe4bae95dccf453eeb",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/eb/b1cc9e6a3e0f0e9b23ebf97c27e27aa8415b15": "6b324a9861ab99d81b4724dee542218e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f6/69ba430f6b59b24f6da7ac62b82e872059af26": "e31cd641e1f480e83baaf771ff97d0ac",
".git/objects/4e/1626c4b081be7b4004ca93354ac2a7b1f14844": "6ba2e8a8ccd2a4b0d5051fcb5651e126",
".git/objects/04/b9c9c9f003a8864c773c299184f7f58e177f9d": "4b19c6621e8ebc7a0916e07fbb0bcb1b",
".git/objects/1a/6a05e80dfb973530b91554a55ea0d9d40f5c9e": "2195b88cd58a67f26d94c14f225fba0c",
".git/objects/27/1ca8d0fcd1c2cef67fc19b7413e3904eccb9c9": "05038c4b68d1c4fbf47ec4e4d2b51c7a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/68/3c7edc8d3d5375c7f508adc446e2ebac795d81": "2abeecd6bc07e8e9595ba80e2ff67835",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/fd/dab7e145d0ae53fe78c3e6dedb24274636ddf4": "f8379b25d813769642bd1c1e35f8ae8a",
".git/objects/7c/61448f6cc63a9f140e28d204ce38aec22e2df1": "09860f9399f58ef88ad6b0665336d331",
".git/objects/ff/61c895ee6b09758123ae28ca709c476d3d55d1": "b6907196d6139c9bf1a1dbf9f94433cf",
".git/objects/c4/534b2c8624d1c21d95fea237fdeca6fa84f2c1": "598eedc0c9dd5bb38ae3079d23cce1bb",
".git/objects/c4/70a227d581d8a7783da724875e0c61bf083227": "16c7ba25c284ffb382b35eb8ea941cb3",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/48/22379dea12713e79cf15c87ea0b22c0a0254b3": "6c9cf77459d17be00d646554581fd393",
".git/objects/48/97f3114539cbbc34896adfbe2f2756de3f2d0d": "e1d26ebee506fc5243d43617bf3e7113",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/e7/6b25415ba19782bc27e4a7a332a2603bc1e018": "456f5138b4ce5e8b35fb9e7d4990377c",
".git/objects/18/bb2e08912d4f345bec3c30a6dd73424f3d4afe": "1c130177fc4777bcb9bbd49d6b7993aa",
".git/objects/61/f99332d4250353bde6d57e6840c6c46d5cc3f2": "20cefc2de091f3b158a3ee199cf1c907",
".git/objects/9a/5ebed85bafb34f4b4692783a760f5a6f111ee9": "dee7a5a7b0063747c1d7cf07b84cbcf1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/45/b53754804442febb5fbdb3e9f35fa24abb807b": "c186607fc6b0262498c71dc88f7428c1",
".git/objects/45/542ec5566df8f1991c233575c40cafcfd9b73b": "2162b7e4a14bc617eb540f6123a8a17c",
".git/objects/e2/2fe0cc761c6e9b11816c13d036141a9d1712f9": "dcbe5622d8288d650e98dc4fbdcbbe87",
".git/objects/1f/55978df877e6621da2ab3a9768902ea1f8ab12": "cfd2ef9b3d4f13dac217e06a2270616d",
".git/objects/1f/98aaae79293eb7d5560dcc03238a23696796ea": "e2d4900aece39e7efff8eaa5853aaf72",
".git/objects/2b/252644d29afebed71e8998ad4701e0b6ff9339": "01dcf2957f03a13d009ef8165488edfc",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "5f6d7c5575225473eddc34c88f04fa10",
".git/refs/heads/gh-pages": "0192f9e1af865061c252da6fc1c54fb7",
".git/refs/remotes/origin/gh-pages": "0192f9e1af865061c252da6fc1c54fb7",
".git/index": "cf011c90df47939c6eb1e02ccc2883f7",
"version.json": "13266f75a0698f617c06dc0ec18e1dc8",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea"};
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
