const CACHE = "score-app-v3";
const FILES = [
  "./",
  "index.html",
  "manifest.json",
  "sw.js",
  "assets/pitch.jpg",
  "assets/goal.mp3",
  "assets/icon-192.png",
  "assets/icon-512.png",
  "assets/team1.png",
  "assets/team2.png",
  "assets/team3.png",
  "assets/team4.png",
  "assets/team5.png",
  "assets/team6.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});


