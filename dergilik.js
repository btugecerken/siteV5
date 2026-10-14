// BTÜ Geçerken Dergilik Veri Tabanı (Doğrudan Kök Dizin Yolları)
const magazineDatabase = [
  {
    id: "culture-1",
    title: "BTÜ Geçerken Culture - Sayı 1",
    series: "BTÜ Geçerken Culture",
    issue: "Sayı 1",
    date: "Ekim 2026",
    period: "Her Ayın 15'i",
    desc: "Üniversite, kültür, sanat ve düşünce ekseninde yepyeni bir başlangıç.",
    cover: "https://btugecerken.com/logogecerken-Photoroom (1).png",
    pdfUrl: "BTU_Gecerken_Culture_Sayi_1.pdf",
    badge: "YENİ YAYIN",
    featured: true
  },
  {
    id: "mahya-2",
    title: "Mahya Dergisi - Sayı 2",
    series: "Mahya",
    issue: "Sayı 2",
    date: "Ağustos 2026",
    period: "Her Ayın 15'i",
    desc: "İlmi makaleler, manevi tefekkür ve medeniyet dünyamıza dair derinlikli okumalar.",
    cover: "https://btugecerken.com/Mahya_Sayı_2.png",
    pdfUrl: "Mahya_Sayi_2.pdf",
    badge: "AKTİF SERİ",
    featured: false
  },
  {
    id: "account-3",
    title: "Account: Original Content - Sayı 3",
    series: "Account Originals",
    issue: "Sayı 3",
    date: "Temmuz 2026",
    period: "Arşiv",
    desc: "Art Nouveau, Fovizm, Tahvilin Anatomisi ve Pandora'nın Kutusu özel dosyaları.",
    cover: "https://btugecerken.com/BTU_Geçerken_Account_3_Sayı.png",
    pdfUrl: "BTU_Geçerken_Account_3_Sayı.pdf",
    badge: "ARŞİV",
    featured: false
  },
  {
    id: "account-2",
    title: "Account: Original Content - Sayı 2",
    series: "Account Originals",
    issue: "Sayı 2",
    date: "Haziran 2026",
    period: "Arşiv",
    desc: "Romanesk Mimari, Altın Oran, Hz. Adem ve kadim medeniyet mirasları incelemesi.",
    cover: "https://btugecerken.com/BTU_Geçerken_Account_2_Sayı.png",
    pdfUrl: "BTU_Geçerken_Account_2_Sayı.pdf",
    badge: "ARŞİV",
    featured: false
  }
];

document.addEventListener("DOMContentLoaded", () => {
  initHeroBillboard();
  renderMagazineShelves();
});

function initHeroBillboard() {
  const featured = magazineDatabase.find(m => m.featured) || magazineDatabase[0];
  if (!featured) return;

  const heroContainer = document.getElementById("featuredHero");
  if (!heroContainer) return;

  heroContainer.innerHTML = `
    <div class="hero-bg" style="background-image: linear-gradient(to right, rgba(8, 28, 19, 0.95) 20%, rgba(8, 28, 19, 0.6) 60%, transparent 100%), url('${featured.cover}');"></div>
    <div class="hero-content">
      <span class="hero-badge"><i class="fa-solid fa-star"></i> ${featured.badge}</span>
      <h1 class="hero-title">${featured.title}</h1>
      <p class="hero-meta"><strong>Yayın Düzeni:</strong> ${featured.period} &nbsp;|&nbsp; <strong>Dönem:</strong> ${featured.date}</p>
      <p class="hero-desc">${featured.desc}</p>
      <div class="hero-actions">
        <a href="${featured.pdfUrl}" target="_blank" class="btn-netflix btn-read">
          <i class="fa-solid fa-book-open"></i> Sayıyı Oku
        </a>
        <a href="${featured.pdfUrl}" download class="btn-netflix btn-download">
          <i class="fa-solid fa-download"></i> İndir
        </a>
      </div>
    </div>
  `;
}

function renderMagazineShelves() {
  const shelfContainer = document.getElementById("shelvesContainer");
  if (!shelfContainer) return;

  const categories = [
    { name: "BTÜ Geçerken Culture (Her Ayın 15'i)", filter: "BTÜ Geçerken Culture" },
    { name: "Mahya Dergisi (Her Ayın 15'i)", filter: "Mahya" },
    { name: "Account: Original Content (Özel Arşiv)", filter: "Account Originals" }
  ];

  let html = "";

  categories.forEach((cat, idx) => {
    const items = magazineDatabase.filter(m => m.series === cat.filter);
    if (items.length === 0) return;

    html += `
      <section class="shelf-row">
        <div class="shelf-header">
          <h2 class="shelf-title">${cat.name}</h2>
        </div>
        <div class="slider-wrapper">
          <button class="slide-btn slide-left" onclick="slideRow('row-${idx}', -1)"><i class="fa-solid fa-chevron-left"></i></button>
          <div class="shelf-track" id="row-${idx}">
            ${items.map(item => `
              <div class="mag-card">
                <div class="mag-poster" style="background-image: url('${item.cover}');">
                  <span class="mag-badge">${item.issue}</span>
                </div>
                <div class="mag-hover-info">
                  <h4>${item.title}</h4>
                  <span class="mag-date">${item.date}</span>
                  <p class="mag-desc">${item.desc}</p>
                  <div class="mag-card-btns">
                    <a href="${item.pdfUrl}" target="_blank" class="btn-sm btn-read"><i class="fa-solid fa-eye"></i> Oku</a>
                    <a href="${item.pdfUrl}" download class="btn-sm btn-down"><i class="fa-solid fa-arrow-down"></i></a>
                  </div>
                </div>
              </div>
            `).join("")}
          </div>
          <button class="slide-btn slide-right" onclick="slideRow('row-${idx}', 1)"><i class="fa-solid fa-chevron-right"></i></button>
        </div>
      </section>
    `;
  });

  shelfContainer.innerHTML = html;
}

function slideRow(rowId, direction) {
  const row = document.getElementById(rowId);
  if (row) {
    const scrollAmount = 400;
    row.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
  }
}