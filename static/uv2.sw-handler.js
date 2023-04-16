importScripts('/uv2/uv.bundle.js');
importScripts('/uv2/uv.config.js');
importScripts(__uv$config.sw || '/uv2/uv.sw.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', event => {
    event.respondWith(sw.fetch(event))
});
