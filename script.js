document.addEventListener("DOMContentLoaded", function () {

  // 1. VIDEOLARI DINAMIK OLARAK GRID'E BASMA
  const videoGrid = document.getElementById("videoGrid");

  function renderVideos(list) {
    if (!videoGrid || !Array.isArray(list)) return;
    
    videoGrid.innerHTML = "";

    list.forEach(video => {
      const card = document.createElement("div");
      card.className = "event-card";
      card.setAttribute("data-category", video.category);
      
      const thumbSrc = (video.thumbnail && video.thumbnail.trim() !== "") 
        ? video.thumbnail 
        : `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
      
      card.innerHTML = `
        <div class="video-card-thumb">
          <img src="${thumbSrc}" alt="${video.title}" loading="lazy" onerror="this.src='https://img.youtube.com/vi/${video.id}/hqdefault.jpg'">
          <div class="play-indicator"><i class="fa-solid fa-play"></i></div>
          <span class="video-tag">${video.categoryLabel || video.category}</span>
        </div>
        <div class="post-body">
          <h3 class="goal-title">${video.title}</h3>
          <p class="goal-desc">${video.desc}</p>
        </div>
      `;

      card.addEventListener("click", () => {
        playVideo(video.id, video.title);
      });

      videoGrid.appendChild(card);
    });
  }

  // Ilk yuklemede videolari listele
  if (typeof videoList !== "undefined" && videoList.length > 0) {
    renderVideos(videoList);

    const firstVideo = videoList[0];
    const player = document.getElementById("mainPlayer");
    const titleElem = document.getElementById("current-video-title");

    if (player) {
      player.src = "https://www.youtube-nocookie.com/embed/" + firstVideo.id + "?rel=0";
    }
    if (titleElem) {
      titleElem.innerHTML = "<em>" + firstVideo.title + "</em>";
    }
  }

  // 2. KATEGORI FILTRELEME VE ARAMA
  const filterButtons = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("videoSearch");

  function applyFilters() {
    if (typeof videoList === "undefined") return;

    const activeBtn = document.querySelector(".filter-btn.active");
    const activeCategory = activeBtn ? activeBtn.getAttribute("data-category") : "all";
    const query = searchInput ? searchInput.value.toLowerCase().trim() : "";

    const filtered = videoList.filter(video => {
      const matchesCategory = (activeCategory === "all" || video.category === activeCategory);
      const matchesSearch = video.title.toLowerCase().includes(query) || video.desc.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });

    renderVideos(filtered);
  }

  filterButtons.forEach(btn => {
    btn.addEventListener("click", function () {
      filterButtons.forEach(b => b.classList.remove("active"));
      this.classList.add("active");
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", applyFilters);
  }

  // 3. SCROLL REVEAL OBSERVER
  const revealElements = document.querySelectorAll('[data-reveal]');
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -20px 0px"
    });

    revealElements.forEach(element => revealObserver.observe(element));
  }

});

// 4. GLOBAL VIDEO OYNATICI FONKSIYONU
function playVideo(videoId, title) {
  const player = document.getElementById("mainPlayer");
  const titleElem = document.getElementById("current-video-title");

  if (player) {
    player.src = "https://www.youtube-nocookie.com/embed/" + videoId + "?autoplay=1&rel=0&modestbranding=1&playsinline=1";
  }

  if (titleElem && title) {
    titleElem.innerHTML = "<em>" + title + "</em>";
  }

  const playerSection = document.getElementById("player-section");
  if (playerSection) {
    playerSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}