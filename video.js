// Teu array videos (mantém o que já temos)
const videos = [
    { titulo: "Barcelona 4‑3 Real Madrid – Full Match", categoria: "El Clasico", link: "https://www.youtube.com/embed/z6SDbFRIRvU" },
    { titulo: "Barcelona 3‑2 Real Madrid – Copa del Rey", categoria: "El Clasico", link: "https://www.youtube.com/embed/H0hU93OHfts" },
    { titulo: "Barcelona vs Real Madrid – La Liga", categoria: "El Clasico", link: "https://www.youtube.com/embed/OausFOBvnf8" },
    { titulo: "Barcelona 5‑2 Real Madrid – Supercopa", categoria: "El Clasico", link: "https://www.youtube.com/embed/WUtTGGDAI90" },
  
    { titulo: "Barcelona 4‑0 Dortmund – UCL Quartas", categoria: "Champions", link: "https://www.youtube.com/embed/OZc5Guyhpig" },
    { titulo: "Barcelona vs Inter – UCL Semi 1", categoria: "Champions", link: "https://www.youtube.com/embed/OkWt2e-eSVQ" },
    { titulo: "Inter vs Barcelona – UCL Semi 2", categoria: "Champions", link: "https://www.youtube.com/embed/qudvFiKZ6lY" },
    { titulo: "Barcelona vs Benfica – UCL Oitavos", categoria: "Champions", link: "https://www.youtube.com/embed/qs2tb8OzXqg" },
    { titulo: "Barcelona 3‑3 Inter – UCL Grupos", categoria: "Champions", link: "https://www.youtube.com/embed/tg-MWRmAJqE" },
  
    { titulo: "Barcelona 5‑0 Real Betis – La Liga", categoria: "La Liga", link: "https://www.youtube.com/embed/A8Ug7PiSUlc" },
    { titulo: "Barcelona 4‑0 Athletic Bilbao – La Liga", categoria: "La Liga", link: "https://www.youtube.com/embed/ijP4fYVWr-g" },
    { titulo: "Barcelona 3‑2 Celta de Vigo – La Liga", categoria: "La Liga", link: "https://www.youtube.com/embed/ak4DYJS88oM" },
    { titulo: "Barcelona 1‑0 Sevilla – La Liga", categoria: "La Liga", link: "https://www.youtube.com/embed/W-cvdbt9JIs" },
    { titulo: "Barcelona 2‑1 Alavés – La Liga", categoria: "La Liga", link: "https://www.youtube.com/embed/VQhJCPdPA_E" },
    { titulo: "Barcelona 3‑1 Granada – La Liga", categoria: "La Liga", link: "https://www.youtube.com/embed/m9ZXAvUlWhI" },
    { titulo: "Barcelona 1‑0 Mallorca – La Liga", categoria: "La Liga", link: "https://www.youtube.com/embed/Af1Uw5ZG1FA" },
    { titulo: "Barcelona 4‑2 Valencia – La Liga", categoria: "La Liga", link: "https://www.youtube.com/embed/izq_e5oS2V4" },
    { titulo: "Barcelona 3‑0 Atletico Madrid – La Liga", categoria: "La Liga", link: "https://www.youtube.com/embed/ROkYrmKnA0Y" },
    { titulo: "Barcelona 2‑0 Osasuna – La Liga", categoria: "La Liga", link: "https://www.youtube.com/embed/Qt5sQzO5Ghk" }
  ];
  
  function renderVideos(filtro = "Todos", pesquisa = "") {
    const container = document.getElementById("videos");
    container.innerHTML = "";
  
    const filtrados = videos.filter(v => 
      (filtro === "Todos" || v.categoria === filtro) && 
      v.titulo.toLowerCase().includes(pesquisa.toLowerCase())
    );
  
    filtrados.forEach(video => {
      const videoId = video.link.split("/embed/")[1];
      container.innerHTML += `
        <div class="card">
          <img src="https://img.youtube.com/vi/${videoId}/hqdefault.jpg" alt="${video.titulo}">
          <div class="card-title">${video.titulo}</div>
          <a href="${video.link}" target="_blank" class="btn-assistir">Assistir no YouTube</a>
        </div>`;
    });
  }
  
  function filtrarVideos() {
    const categoria = document.getElementById("categoria").value;
    const pesquisa = document.getElementById("pesquisa").value;
    renderVideos(categoria, pesquisa);
  }
  
  function pesquisarVideos() {
    filtrarVideos();
  }
  
  renderVideos();
  