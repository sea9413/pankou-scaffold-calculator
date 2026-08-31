// 脚手架重量计算器 - Service Worker（网络优先，离线回退）
var CACHE = 'scaffold-v1.3.0';

self.addEventListener('install', function (e) {
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (k) { return k !== CACHE; })
            .map(function (k) { return caches.delete(k); })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  var url = e.request.url;
  // 只缓存同源资源
  if (url.indexOf(self.location.origin) !== 0) return;
  // 分享链接带 ?m=&d=&r= 查询串，内容各不相同，不进缓存以免无限污染
  if (url.indexOf('?') !== -1) return;
  e.respondWith(
    fetch(e.request).then(function (res) {
      if (res && res.ok) {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put(e.request, copy); });
      }
      return res;
    }).catch(function () {
      return caches.match(e.request).then(function (m) {
        return m || caches.match('./');
      });
    })
  );
});
