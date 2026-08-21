// Dados dos carrosséis
const carrosseis = {
  populares: [
    { titulo: "Stranger Things", url: "assets/posters/stranger-things.jpg" },
    { titulo: "Breaking Bad", url: "assets/posters/breaking-bad.jpg" },
    { titulo: "La Casa de Papel", url: "assets/posters/money-heist.jpg" },
    { titulo: "Avengers Endgame", url: "assets/posters/avengers-endgame.jpg" },
    { titulo: "Inception", url: "assets/posters/inception.jpg" },
    { titulo: "Interstellar", url: "assets/posters/interstellar.jpg" },
    { titulo: "The Witcher", url: "assets/posters/witcher.jpg" },
    { titulo: "Peaky Blinders", url: "assets/posters/peaky-blinders.jpg" },
    { titulo: "Joker", url: "assets/posters/joker.jpg" },
    { titulo: "Parasite", url: "assets/posters/parasite.jpg" },
  ],
  series: [
    { titulo: "Peaky Blinders", url: "assets/posters/peaky-blinders.jpg" },
    { titulo: "House of Cards", url: "assets/posters/house-of-cards.jpg" },
    { titulo: "The Crown", url: "assets/posters/the-crown.jpg" },
    { titulo: "Dark", url: "assets/posters/dark.jpg" },
    { titulo: "Ozark", url: "assets/posters/ozark.jpg" },
    { titulo: "Narcos", url: "assets/posters/narcos.jpg" },
    { titulo: "Black Mirror", url: "assets/posters/black-mirror.jpg" },
    { titulo: "Better Call Saul", url: "assets/posters/better-call-saul.jpg" },
    { titulo: "Mindhunter", url: "assets/posters/mindhunter.jpg" },
    {
      titulo: "The Umbrella Academy",
      url: "assets/posters/umbrella-academy.jpg",
    },
    { titulo: "13 Reasons Why", url: "assets/posters/13-reasons-why.jpg" },
    { titulo: "Elite", url: "assets/posters/elite.jpg" },
    { titulo: "Suits", url: "assets/posters/suits.jpg" },
    { titulo: "Vikings", url: "assets/posters/vikings.jpg" },
    { titulo: "The Office", url: "assets/posters/the-office.jpg" },
    { titulo: "One Piece", url: "assets/posters/one-piece.jpg" },
    { titulo: "3 Body Problem", url: "assets/posters/3-body-problem.jpg" },
    { titulo: "Squid Game 2", url: "assets/posters/squid-game-2.jpg" },
    { titulo: "Wednesday", url: "assets/posters/wednesday.jpg" },
    { titulo: "Bridgerton", url: "assets/posters/bridgerton.jpg" },
  ],
  filmes: [
    { titulo: "The Dark Knight", url: "assets/posters/dark-knight.jpg" },
    { titulo: "Forrest Gump", url: "assets/posters/forrest-gump.jpg" },
    { titulo: "The Shawshank Redemption", url: "assets/posters/shawshank.jpg" },
    { titulo: "The Matrix", url: "assets/posters/matrix.jpg" },
    { titulo: "Gladiator", url: "assets/posters/gladiator.jpg" },
    { titulo: "Fight Club", url: "assets/posters/fight-club.jpg" },
    { titulo: "The Godfather", url: "assets/posters/godfather.jpg" },
    { titulo: "Goodfellas", url: "assets/posters/goodfellas.jpg" },
    { titulo: "Schindler’s List", url: "assets/posters/schindlers-list.jpg" },
    { titulo: "Rebel Moon", url: "assets/posters/rebel-moon.jpg" },
    {
      titulo: "Leave the World Behind",
      url: "assets/posters/leave-the-world-behind.jpg",
    },
    { titulo: "The Killer", url: "assets/posters/the-killer.jpg" },
    { titulo: "Maestro", url: "assets/posters/maestro.jpg" },
    { titulo: "Atlas", url: "assets/posters/atlas.jpg" },
    {
      titulo: "Beverly Hills Cop: Axel F",
      url: "assets/posters/beverly-hills-cop.jpg",
    },
    { titulo: "Extraction 2", url: "assets/posters/extraction-2.jpg" },
    { titulo: "Heart of Stone", url: "assets/posters/heart-of-stone.jpg" },
    {
      titulo: "Society of the Snow",
      url: "assets/posters/society-of-the-snow.jpg",
    },
    {
      titulo: "Kidnapped: Elizabeth Smart",
      url: "assets/posters/kidnapped.jpg",
    },
    { titulo: "Enola Holmes 3", url: "assets/posters/enola-holmes-3.jpg" },
  ],
  minhaLista: [],
};
// renderizar com info + setas
function renderCarrossel(id, lista) {
  const section = document.getElementById(id);
  section.innerHTML = `
    <h2>${id.charAt(0).toUpperCase() + id.slice(1)}</h2>
    <div class="carrossel-container">
      <button class="seta seta-esquerda">◀</button>
      <div class="carrossel-row"></div>
      <button class="seta seta-direita">▶</button>
    </div>
  `;

  const container = section.querySelector(".carrossel-row");
  lista.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${item.url}" alt="${item.titulo}">
      <div class="card-info">
        <h3>${item.titulo}</h3>
        <button class="btn-assistir">▶ Assistir</button>
        <button class="btn-lista">➕ Lista</button>
      </div>
    `;

    // Botão Assistir abre modal
    card.querySelector(".btn-assistir").addEventListener("click", (e) => {
      e.stopPropagation();
      abrirDetalhes(item);
    });

    const btnLista = card.querySelector(".btn-lista");
    btnLista.addEventListener("click", (e) => {
      e.stopPropagation();
      const jaTem = carrosseis.minhaLista.find((f) => f.titulo === item.titulo);
      if (!jaTem) {
        carrosseis.minhaLista.push(item);
        renderCarrossel("minhaLista", carrosseis.minhaLista);
        btnLista.textContent = "✓ Na Minha Lista";
        btnLista.classList.add("added");
      } else {
        // opcional: remover da lista
        carrosseis.minhaLista = carrosseis.minhaLista.filter(
          (f) => f.titulo !== item.titulo,
        );
        renderCarrossel("minhaLista", carrosseis.minhaLista);
        btnLista.textContent = "➕ Lista";
        btnLista.classList.remove("added");
      }
    });

    const carrossel = section.querySelector(".carrossel-container");

    carrossel.addEventListener(
      "wheel",
      (e) => {
        // se for scroll horizontal, deixa passar
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
          return; // não bloqueia, carrossel rola normalmente
        }

        // se for scroll vertical, bloqueia dentro do carrossel
        e.preventDefault();
        // opcional: mover horizontalmente com a rodinha
        carrossel.querySelector(".carrossel-row").scrollLeft += e.deltaY;
      },
      { passive: false },
    );

    container.appendChild(card);
  });

  // Navegação com setas
  const btnEsquerda = section.querySelector(".seta-esquerda");
  const btnDireita = section.querySelector(".seta-direita");

  btnEsquerda.addEventListener("click", () => {
    container.scrollBy({ left: -container.clientWidth, behavior: "smooth" });
  });

  btnDireita.addEventListener("click", () => {
    container.scrollBy({ left: container.clientWidth, behavior: "smooth" });
  });
}

// Hero rotativo automático
function renderHeroRotativo() {
  const hero = document.querySelector(".hero");
  const heroContent = hero.querySelector(".hero-content");
  let index = 0;

  function atualizarHero() {
    const item = carrosseis.populares[index];
    hero.style.backgroundImage = `url('${item.url}')`;
    heroContent.innerHTML = `
      <h1>${item.titulo}</h1>
      <p>Descubra mais sobre ${item.titulo} agora mesmo.</p>
      <button>▶ Assistir</button>
      <button>ℹ Mais informações</button>
    `;
    index = (index + 1) % carrosseis.populares.length;
  }

  atualizarHero();
  setInterval(atualizarHero, 10000); // troca a cada 10s
}

// Modal de detalhes
function abrirDetalhes(item) {
  const modal = document.getElementById("detalhesModal");
  document.getElementById("modalTitulo").textContent = item.titulo;
  document.getElementById("modalDescricao").textContent =
    `Descubra mais sobre ${item.titulo}`;
  modal.style.display = "flex";

  // botão Minha Lista
  const btnMinhaLista = modal.querySelector(
    ".modal-buttons button:nth-child(2)",
  );
  btnMinhaLista.onclick = () => {
    if (!carrosseis.minhaLista.find((f) => f.titulo === item.titulo)) {
      carrosseis.minhaLista.push(item);
      renderCarrossel("minhaLista", carrosseis.minhaLista);
    }
  };
}

function salvarMinhaLista() {
  localStorage.setItem("minhaLista", JSON.stringify(carrosseis.minhaLista));
}

function carregarMinhaLista() {
  const lista = localStorage.getItem("minhaLista");
  if (lista) {
    carrosseis.minhaLista = JSON.parse(lista);
    renderCarrossel("minhaLista", carrosseis.minhaLista);
  }
}

// Fechar modal
document.addEventListener("DOMContentLoaded", () => {
  const closeBtn = document.querySelector(".close");
  closeBtn.addEventListener("click", () => {
    document.getElementById("detalhesModal").style.display = "none";
  });

  window.addEventListener("click", (e) => {
    const modal = document.getElementById("detalhesModal");
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

// Renderiza carrosséis
renderCarrossel("populares", carrosseis.populares);
renderCarrossel("series", carrosseis.series);
renderCarrossel("filmes", carrosseis.filmes);
renderCarrossel("minhaLista", carrosseis.minhaLista);

// Hero rotativo
renderHeroRotativo();

// Arraste com mouse nos carrosséis
document.querySelectorAll(".carrossel-row").forEach((row) => {
  let isDown = false;
  let startX;
  let scrollLeft;

  row.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - row.offsetLeft;
    scrollLeft = row.scrollLeft;
  });

  row.addEventListener("mouseleave", () => {
    isDown = false;
  });

  row.addEventListener("mouseup", () => {
    isDown = false;
  });

  row.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - row.offsetLeft;
    const walk = (x - startX) * 2;
    row.scrollLeft = scrollLeft - walk;
  });
});

// Evita scroll da página ao passar o mouse sobre os cards
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mouseover", () => {
    document.body.classList.add("no-scroll");
  });

  card.addEventListener("mouseleave", () => {
    document.body.classList.remove("no-scroll");
  });
});
