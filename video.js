// BTÜ Geçerken TV - Video Veri Tabanı
const videoList = [
  {
    id: "9YFxHGMEoAg",
    title: "Kestane Şekeri",
    url: "https://youtu.be/9YFxHGMEoAg",
    thumbnail: "https://btugecerken.com/kestanesekeri.jpeg", 
    desc: "BTÜ Geçerken Culture Bursa lezzetlerinden Kestane Şekerinin peşinde.",
    category: "gastronomi",
    categoryLabel: "Gastronomi"
  },
  {
    id: "WEkc7GGFMYQ",
    title: "Muradiye Çorbası",
    url: "https://youtu.be/WEkc7GGFMYQ",
    thumbnail: "https://btugecerken.com/muradiyecorbasi.jpeg", 
    desc: "BTÜ Geçerken Culture Bursa'nın şifalı çorbası Muradiye Çorbasını mercek altına alıyor.",
    category: "gastronomi",
    categoryLabel: "Gastronomi"
  },
  {
    id: "RQG-xbhdkr0",
    title: "Kemalpaşa Tatlısı",
    url: "https://youtu.be/RQG-xbhdkr0",
    thumbnail: "https://btugecerken.com/kemalpashatatlisi.jpeg", 
    desc: "BTÜ Geçerken Culture Kemalpaşa Tatlısını tanıtıyor.",
    category: "gastronomi",
    categoryLabel: "Gastronomi"
  },
  {
    id: "l8DkTDnujXA",
    title: "Süt Helvası",
    url: "https://youtu.be/l8DkTDnujXA",
    thumbnail: "https://btugecerken.com/suthelvasi.jpeg", 
    desc: "BTÜ Geçerken Culture Süt Helvasını tanıtıyor.",
    category: "gastronomi",
    categoryLabel: "Gastronomi"
  },
  {
    id: "ofMMRMCwzxA",
    title: "Pideli Köfte",
    url: "https://youtu.be/ofMMRMCwzxA",
    thumbnail: "https://btugecerken.com/pidelicofte.jpeg", 
    desc: "BTÜ Geçerken Culture Pideli Köfteyi tanıtıyor.",
    category: "gastronomi",
    categoryLabel: "Gastronomi"
  },
  {
    id: "2MMjDiM-iH0",
    title: "Cantık",
    url: "https://youtu.be/2MMjDiM-iH0",
    thumbnail: "https://btugecerken.com/cantik.jpeg", 
    desc: "BTÜ Geçerken Culture Cantığı tanıtıyor.",
    category: "gastronomi",
    categoryLabel: "Gastronomi"
  },
  {
    id: "F4QzM3xBPrA",
    title: "İskender",
    url: "https://youtu.be/F4QzM3xBPrA",
    thumbnail: "https://btugecerken.com/iskender.jpeg", 
    desc: "BTÜ Geçerken Culture İskenderi tanıtıyor.",
    category: "gastronomi",
    categoryLabel: "Gastronomi"
  },
  {
    id: "s85kcGamI5k",
    title: "Tahinli Pide",
    url: "https://youtu.be/s85kcGamI5k",
    thumbnail: "https://btugecerken.com/tahinlipide.jpeg", 
    desc: "Bursa'nın geleneksel lezzeti Tahinli Pide, BTÜ Geçerken Culture'nin bu bölümdeki konuğu.",
    category: "gastronomi",
    categoryLabel: "Gastronomi"
  },
  {
    id: "DA773Cvv8d0",
    title: "Account Culture: İzm (Fikir Akımları)",
    url: "http://www.youtube.com/watch?v=DA773Cvv8d0",
    thumbnail: "https://img.youtube.com/vi/DA773Cvv8d0/hqdefault.jpg",
    desc: "Hümanizmden Romantizme, dünyayı şekillendiren tarihi ve felsefi fikir akımlarına derinlemesine bir bakış.",
    category: "kultur",
    categoryLabel: "Kültür & Düşünce"
  },
  {
    id: "67wC6-vgvPI",
    title: "Mustafa Kemal Atatürk",
    url: "http://www.youtube.com/watch?v=67wC6-vgvPI",
    thumbnail: "MKA.png",
    desc: "Küllerinden doğan bir milletin destansı hikayesi ve Gazi Mustafa Kemal Atatürk'ün vizyonu.",
    category: "tarih",
    categoryLabel: "Tarih"
  },
  {
    id: "T7jNTuEwcfY",
    title: "Erguvan Geleneği",
    url: "http://www.youtube.com/watch?v=T7jNTuEwcfY",
    thumbnail: "Erguvan.png",
    desc: "Osmanlı'dan günümüze Bursa'nın kadim hoşgörü ve doğa bayramı: Erguvan Faslı.",
    category: "kultur",
    categoryLabel: "Kültür"
  },
  {
    id: "b3gTtVH-oMQ",
    title: "Bir Fincan Kahvenin Hatırı",
    url: "http://www.youtube.com/watch?v=b3gTtVH-oMQ",
    thumbnail: "kahve.png",
    desc: "Topraklarımızda sadece bir içecek değil, kırk yıllık dostluk ve samimiyet köprüsü olan kahve kültürü.",
    category: "kultur",
    categoryLabel: "Kültür"
  },
  {
    id: "8wX-Fpk20pM",
    title: "Bursa Yeşil Cami ve Yeşil Türbe",
    url: "http://www.youtube.com/watch?v=8wX-Fpk20pM",
    thumbnail: "Yesil_Turbe.png", 
    desc: "Erken dönem Osmanlı mimarisinin ve çini sanatının turkuaz şaheseri: Yeşil Külliyesi.",
    category: "bursa",
    categoryLabel: "Bursa Mirası"
  },
  {
    id: "0mC1pnfbCVU",
    title: "Tarihi Irgandı Köprüsü",
    url: "http://www.youtube.com/watch?v=0mC1pnfbCVU",
    thumbnail: "Irgandi.png", 
    desc: "Gökdere üzerinde geleneksel el sanatlarını yaşatan dünyanın sayılı çarşılı köprülerinden biri.",
    category: "bursa",
    categoryLabel: "Bursa Mirası"
  },
  {
    id: "PKOEM5bbnMs",
    title: "Tarihi Hanlar Bölgesi ve Koza Han",
    url: "http://www.youtube.com/watch?v=PKOEM5bbnMs",
    thumbnail: "Hanlar_Bolgesi.png", 
    desc: "İpek Yolu'nun kalbi, yüzyıllardır süregelen ticaretin ve Bursa çarşılarının merkezi.",
    category: "bursa",
    categoryLabel: "Bursa Mirası"
  },
  {
    id: "3nHdKGadfcw",
    title: "Emir Sultan Külliyesi",
    url: "http://www.youtube.com/watch?v=3nHdKGadfcw",
    thumbnail: "Emir_Sultan.png", 
    desc: "Bursa'nın manevi mimarı Emir Sultan Hazretleri ve şehrin tepesindeki huzur dolu külliye.",
    category: "bursa",
    categoryLabel: "Bursa Mirası"
  },
  {
    id: "y8bQ1MGO5Wo",
    title: "İki Şehir: Antalya ve Bursa Karşılaştırması",
    url: "http://www.youtube.com/watch?v=y8bQ1MGO5Wo",
    thumbnail: "Antalya.png", 
    desc: "Öğrenci gözünden Akdeniz'in güneşi Antalya ile tarihin ve eğitimin merkezi Bursa arasındaki farklar.",
    category: "ogrenci",
    categoryLabel: "Öğrenci Yaşamı"
  }
];

// Kart HTML Şablonu
function createNetflixCard(video) {
  const fallbackThumb = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
  const thumbSrc = video.thumbnail || fallbackThumb;

  return `
    <div class="nfx-card" onclick="openModalVideo('${video.id}')">
      <img src="${thumbSrc}" alt="${video.title}" onerror="this.src='${fallbackThumb}'" loading="lazy">
      <div class="nfx-card-overlay">
        <span class="nfx-card-tag">${video.categoryLabel || video.category}</span>
        <div class="nfx-card-name">${video.title}</div>
      </div>
    </div>
  `;
}

// Hero Billboard Güncelleme
function setHeroVideo(video) {
  if (!video) return;
  const heroTitle = document.getElementById("heroTitle");
  const heroDesc = document.getElementById("heroDesc");
  const heroPlayBtn = document.getElementById("heroPlayBtn");
  const heroBillboard = document.getElementById("heroBillboard");

  if (heroTitle) heroTitle.textContent = video.title;
  if (heroDesc) heroDesc.textContent = video.desc;
  
  if (heroPlayBtn) {
    heroPlayBtn.onclick = () => openModalVideo(video.id);
  }

  // Hero arka plan görseli (varsa kendi görseli, yoksa YouTube maxres görseli)
  const bgImg = video.thumbnail.includes('.png') ? video.thumbnail : `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
  if (heroBillboard) {
    heroBillboard.style.backgroundImage = `linear-gradient(180deg, rgba(15,20,18,0.2) 0%, rgba(15,20,18,0.85) 75%, #0f1412 100%), url('${bgImg}')`;
  }
}

// Netflix Şeritlerini Doldurma
function renderNetflixRows() {
  const gastroTrack = document.getElementById("gastroTrack");
  const bursaTrack = document.getElementById("bursaTrack");
  const kulturTrack = document.getElementById("kulturTrack");

  const gastroVideos = videoList.filter(v => v.category === "gastronomi");
  const bursaVideos = videoList.filter(v => v.category === "bursa");
  const kulturVideos = videoList.filter(v => ["kultur", "tarih", "ogrenci"].includes(v.category));

  if (gastroTrack) gastroTrack.innerHTML = gastroVideos.map(createNetflixCard).join("");
  if (bursaTrack) bursaTrack.innerHTML = bursaVideos.map(createNetflixCard).join("");
  if (kulturTrack) kulturTrack.innerHTML = kulturVideos.map(createNetflixCard).join("");
}

// Arama & Filtreleme (Arama yapıldığında ızgara moduna geçiş)
function setupSearchAndFilters() {
  const searchInput = document.getElementById("videoSearch");
  const filterBtns = document.querySelectorAll(".pill-btn");
  const contentRows = document.getElementById("contentRows");
  const searchResultsRow = document.getElementById("searchResultsSection");
  const searchTrack = document.getElementById("searchTrack");
  const searchResultTitle = document.getElementById("searchResultTitle");

  function filterVideos() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
    const activeBtn = document.querySelector(".pill-btn.active");
    const activeCat = activeBtn ? activeBtn.getAttribute("data-filter") : "all";

    const filtered = videoList.filter(v => {
      const matchText = v.title.toLowerCase().includes(query) || v.desc.toLowerCase().includes(query);
      const matchCat = activeCat === "all" || v.category === activeCat;
      return matchText && matchCat;
    });

    if (query !== "" || activeCat !== "all") {
      contentRows.style.display = "none";
      searchResultsRow.style.display = "block";
      searchResultTitle.textContent = `Sonuçlar (${filtered.length} Video Bulundu)`;
      searchTrack.innerHTML = filtered.length > 0 
        ? filtered.map(createNetflixCard).join("") 
        : `<p style="color:#888; padding:20px;">Aradığınız kriterlere uygun video bulunamadı.</p>`;
    } else {
      contentRows.style.display = "flex";
      searchResultsRow.style.display = "none";
    }
  }

  if (searchInput) {
    searchInput.addEventListener("input", filterVideos);
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      filterVideos();
    });
  });
}

// Modal Video Oynatıcı Kontrolleri
function openModalVideo(videoId) {
  const video = videoList.find(v => v.id === videoId);
  if (!video) return;

  const modal = document.getElementById("videoModal");
  const iframe = document.getElementById("modalIframe");
  const title = document.getElementById("modalVideoTitle");
  const desc = document.getElementById("modalVideoDesc");

  title.textContent = video.title;
  desc.textContent = video.desc;
  iframe.src = `https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModalVideo() {
  const modal = document.getElementById("videoModal");
  const iframe = document.getElementById("modalIframe");
  iframe.src = "";
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Başlangıç Yükleyicisi
document.addEventListener("DOMContentLoaded", () => {
  // Rastgele ya da ilk videoyu Hero olarak belirle
  const featuredVideo = videoList.find(v => v.id === "F4QzM3xBPrA") || videoList[0];
  setHeroVideo(featuredVideo);

  renderNetflixRows();
  setupSearchAndFilters();

  const modal = document.getElementById("videoModal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModalVideo();
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModalVideo();
  });
});