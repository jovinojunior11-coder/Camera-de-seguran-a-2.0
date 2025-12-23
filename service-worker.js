self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("camera-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "camera.html",
        "monitor.html",
        "app.js",
        "recorder.js",
        "motion.js"
      ]);
    })
  );
});
