const CACHE_NAME = "meu-app-treino-v1";
// Lista de arquivos essenciais para o app funcionar offline
const urlsToCache = [
  "/",
  "/index.html",
  "/style.css",
  "/main.js",
  // Adicione os links dos scripts do Firebase se quiser que funcione 100% offline
  "https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js",
  "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore-compat.js",
  // Adicione aqui outros recursos importantes, como imagens ou fontes, se houver
];

// Evento de Instalação: Salva os arquivos essenciais no cache
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("Cache aberto");
        // Adiciona todos os URLs da lista ao cache
        return cache.addAll(urlsToCache);
      })
      .catch((err) => {
        console.error("Falha ao adicionar arquivos ao cache:", err);
      })
  );
});

// Evento Fetch: Intercepta as requisições de rede
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request) // Procura no cache primeiro
      .then((response) => {
        // Se encontrar no cache, retorna a resposta do cache
        if (response) {
          return response;
        }
        // Se não encontrar, faz a requisição na rede
        return fetch(event.request);
      })
  );
});

// Evento Activate: Limpa caches antigos
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME]; // Mantém apenas o cache atual
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            // Se o cache não estiver na lista branca, deleta
            console.log('Deletando cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
