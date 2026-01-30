const CACHE = "score-app-v4";
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
  "assets/team6.png",
  "assets/real.png",
"assets/barcelona.png",
"assets/psg.png",
"assets/mancity.png",
"assets/manutd.png",
"assets/inter.png",
"assets/monaco.png",
"assets/juventus.png"
];

self.addEventListener("install", (e) => {
  // גורם לגרסה החדשה להיכנס מהר יותר
  self.skipWaiting();

  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(FILES))
  );
});

self.addEventListener("activate", (e) => {
  // מוחק כל CACHE ישן ומשאיר רק את v4
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((r) => r || fetch(e.request))
  );
});

