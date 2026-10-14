const blogPosts = [
  {
    Id: 32,
    Title: "Bursa Mutfağı: Bir Dönerden Çok Daha Fazlası",
    Cat: "Kültür & Gastronomi",
    Date: "14 Ekim 2026",
    Excerpt: "Bursa mutfağı yalnızca İskender kebaptan ibaret değil. Muradiye çorbası, süt helvası ve kestane şekerinin ardındaki Osmanlı saray ve tekke mutfağı mirasını keşfediyoruz.",
    Img: "https://btugecerken.com/bursa-mutfagi-saray-tekke-mirasi.jpeg",
    Link: "bursa-mutfagi-saray-tekke-mirasi.html"
  },
  {
    Id: 31,
    Title: "İslam Epistemolojisi: Bilgi Nedir ve Nasıl Elde Edilir?",
    Cat: "İslam Felsefesi",
    Date: "9 Ağustos 2026",
    Excerpt: "İslam epistemolojisi, bilginin ne olduğu, nasıl elde edildiği ve bilginin sınırları nelerdir gibi soruları ele alır. İslam düşüncesinde bilgi, hem Kur'anî ayetler hem de hadisler ışığında şekillenir.",
    Img: "https://ars.els-cdn.com/content/image/1-s2.0-S0738059319306261-gr1.jpg",
    Link: "islam-epistemolojisi.html"
  },
  {
    Id: 30,
    Title: "İslam Ontolojisi: Varlık Nedir?",
    Cat: "İslam Felsefesi",
    Date: "8 Ağustos 2026",
    Excerpt: "İslam ontolojisi, varlığın ne olduğu, nasıl var olduğu ve varlığın kaynağı nedir gibi soruları ele alır. İslam düşüncesinde varlık, hem Kur'anî ayetler hem de felsefi yorumlarla şekillenir.",
    Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDCg76S7zR0vU0uVYtsIkpj38TI2BC7K3Vx4AeXKr8bg&s=10",
    Link: "islam-ontolojisi.html"
  },
  {
    Id: 29,
    Title: "İslam Metaetiği: İyi-Kötü Ayrımı Nasıl Kurulur?",
    Cat: "İslam Felsefesi",
    Date: "7 Ağustos 2026",
    Excerpt: "İslam düşüncesinde ahlaki eylemler nasıl değerlendirilir? İyi-kötü ayrımı hangi ölçülere göre yapılır? İslam metaetiğinin temel ilkelerini ve yorumlarını detaylı olarak ele alıyoruz.",
    Img: "https://media.base44.com/images/public/6a2ed843e60519b986e967b3/a7581465c_generated_image.png",
    Link: "islam-metaetigi.html"
  },
  {
    Id: 28,
    Title: "Tevhid Kavramının Metafiziği: Varlık, Birlik ve Sonsuzluk",
    Cat: "İslam Felsefesi",
    Date: "6 Ağustos 2026",
    Excerpt: "Tevhid yalnızca bir inanç değil; aynı zamanda varlığın, birliğin ve sonsuzluğun metafizik temelini sorgulayan bir kavramdır.",
    Img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=1536,fit=crop/m6LD0k0vJBhw5QKr/chatgpt-image-29-aau-2026-13_21_21-rjWpyPK6PS4kASIK.png",
    Link: "tevhid-metafizigi.html"
  },
  {
    Id: 27,
    Title: "İslam Düşüncesinde Akıl ve Vahiy İlişkisi",
    Cat: "İslam Felsefesi",
    Date: "5 Ağustos 2026",
    Excerpt: "İslam düşüncesinde akıl ile vahiy arasındaki ilişki, yüzyıllar boyunca tartışılan temel meselelerden biridir.",
    Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz680mt_Y_EGtG5X34g6VR7AJ8vCRg13ZdDAyKOeZefrwdsSlliPOK-YvN&s=10",
    Link: "akil-ve-vahiy-islam.html"
  },
  {
    Id: 26,
    Title: "Barok Sanatı",
    Cat: "Sanat Tarihi",
    Date: "29 Temmuz 2026",
    Excerpt: "Hareketli kompozisyonlar, ışık-gölge draması ve zengin detaylarla Barok dönemi.",
    Img: "https://media.base44.com/images/public/6a2ed843e60519b986e967b3/ddfc3fe83_generated_image.png",
    Link: "barok.html"
  },
  {
    Id: 25,
    Title: "Gotik Sanatı: Özellikleri ve Tarihi",
    Cat: "Sanat Tarihi",
    Date: "30 Temmuz 2026",
    Excerpt: "Gotik mimarinin yükseklik, ışık ve cam mozaikleriyle dini atmosfer yaratma çabası.",
    Img: "https://media.base44.com/images/public/6a2ed843e60519b986e967b3/1ab28d9e7_generated_image.png",
    Link: "gotik.html"
  },
  {
    Id: 24,
    Title: "Rönesans Sanatı: İnsanlığın ve Doğanın Yeniden Doğuşu",
    Cat: "Sanat Tarihi",
    Date: "31 Temmuz 2026",
    Excerpt: "Hümanizm, perspektif ve anatomiyle sanatta bilimsel devrimin öncüsü olan Rönesans dönemi.",
    Img: "https://media.base44.com/images/public/6a2ed843e60519b986e967b3/2e5b5dbbe_generated_image.png",
    Link: "ronesans-sanati.html"
  },
  {
    Id: 23,
    Title: "Empresyonizm: Işığın ve Anın Peşinde Bir Sanat Devrimi",
    Cat: "Sanat Tarihi",
    Date: "1 Ağustos 2026",
    Excerpt: "Açık havada resim yapma, ışığın değişimi ve anlık izlenim kaydıyla sanatta bir kopuş.",
    Img: "https://media.base44.com/images/public/6a2ed843e60519b986e967b3/3e71e895c_generated_image.png",
    Link: "empresyonizm-izlenimcilik.html"
  },
  {
    Id: 22,
    Title: "Kübizm: Formun Parçalanışı ve Perspektifin Yeniden İcadı",
    Cat: "Sanat Tarihi",
    Date: "2 Ağustos 2026",
    Excerpt: "Nesnelerin çoklu perspektifte gösterilmesiyle formun çözülüp yeniden yapılandırılması.",
    Img: "https://media.base44.com/images/public/6a2ed843e60519b986e967b3/16eb2696c_generated_image.png",
    Link: "kubizm.html"
  },
  {
    Id: 21,
    Title: "Sürrealizm: Bilinçdışı, Rüya ve Rastlantının Sanata Dökümü",
    Cat: "Sanat Tarihi",
    Date: "3 Ağustos 2026",
    Excerpt: "Rüyalar, otomatizm ve bilinçdışı çağrışımlarla yaratıcılığın yeni yolları.",
    Img: "https://media.base44.com/images/public/6a2ed843e60519b986e967b3/9cb4d18ba_generated_image.png",
    Link: "surrealizm.html"
  },
  {
    Id: 20,
    Title: "İslam'da Zekât ve Sosyal Adalet",
    Cat: "Sosyal",
    Date: "30 Temmuz 2026",
    Excerpt: "Zekât; İslam’daki sosyal adalet mekanizması olarak yoksullukla nasıl mücadele eder?",
    Img: "https://sorularlaislamiyet.com/sites/default/files/styles/soruici_slider_resmi/public/zekat-kimlere-verilir-zekat-verilecek-yerler-nerelerdir-derneklere.jpg?itok=X0xhScb7",
    Link: "zekat-ve-sosyal-adalet.html"
  },
  {
    Id: 19,
    Title: "İslam'da Bilim ve Bilgi Arayışı",
    Cat: "Din/Bilim",
    Date: "30 Temmuz 2026",
    Excerpt: "İslam dünyasında bilim nasıl gelişti ve Orta Çağ’da Avrupa’ya ne katkılar sundu?",
    Img: "https://www.nukteler.com/wp-content/uploads/2024/12/islam-bilim-dusunce.jpeg",
    Link: "islamda-bilim.html"
  },
  {
    Id: 18,
    Title: "Tasavvuf ve İslam'da Maneviyat",
    Cat: "Manevi",
    Date: "30 Temmuz 2026",
    Excerpt: "Tasavvuf; zikir, nefis terbiyesi ve Allah’a yakınlaşma yolları üzerine nasıl bir yolculuktur?",
    Img: "https://vanolaycom.teimg.com/crop/1280x720/vanolay-com/uploads/2023/12/tasavvuf-nedir.webp",
    Link: "tasavvuf-maneviyat.html"
  },
  {
    Id: 17,
    Title: "Ramazan Maneviyatı",
    Cat: "Manevi",
    Date: "30 Temmuz 2026",
    Excerpt: "Ramazan orucu sadece yemekten içmekten vazgeçmek değil, neyi simgeler?",
    Img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Istanbul.Sultanahmet.BlueMosque.Ramazan.02.jpg/500px-Istanbul.Sultanahmet.BlueMosque.Ramazan.02.jpg",
    Link: "ramazan-manevi.html"
  },
  {
    Id: 16,
    Title: "İslam'da Ahlak",
    Cat: "Ahlak",
    Date: "30 Temmuz 2026",
    Excerpt: "İslam ahlakı; sabır, adalet ve tevazu gibi erdemleri günlük yaşama nasıl entegre eder?",
    Img: "https://www.haksozhaber.net/d/news/122369.jpg",
    Link: "islamda-ahlak.html"
  },
  {
    Id: 15,
    Title: "Peygamberlerin Ortak Mesajı",
    Cat: "Din",
    Date: "30 Temmuz 2026",
    Excerpt: "İslam perspektifine göre tüm peygamberlerin ardı ardına taşıdığı ortak mesaj nedir?",
    Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4XOQ9UlT83LOplaLCnIJSj3ZStsm08GkhGg&s",
    Link: "peygamberlerin-ortak-mesaji.html"
  },
  {
    Id: 14,
    Title: "Hz. Muhammed'in Hayatı",
    Cat: "Din",
    Date: "28 Temmuz 2026",
    Excerpt: "Mekke'den Medine'ye; bir peygamberin hayatı, liderlik dersleri ve toplum inşa etme hikâyesi.",
    Img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Calligraphic_representation_of_Muhammad%27s_name.jpg/250px-Calligraphic_representation_of_Muhammad%27s_name.jpg",
    Link: "hz-muhammed.html"
  },
  {
    Id: 13,
    Title: "Kur'an'ın İndirilişi ve Kısa Özeti",
    Cat: "Din",
    Date: "28 Temmuz 2026",
    Excerpt: "Kur'an, İslam'ın kutsal kitabı; vahiy süreci, temaları ve Mushaflaşma hikâyesi temel düzeyde ele alınıyor.",
    Img: "https://iasbh.tmgrup.com.tr/43ca9b/0/0/0/0/0/0?u=https://isbh.tmgrup.com.tr/sb/album/2022/04/27/kuran-i-kerim-ne-zaman-indi-diyanet-ile-kurani-kerim-kac-yilda-indirildi-1651043547634.jpg&mw=600",
    Link: "kuran-indirilisi.html"
  },
  {
    Id: 12,
    Title: "İslamın Beş Şartı",
    Cat: "Din",
    Date: "28 Temmuz 2026",
    Excerpt: "İman esasları pratiğe döküldüğünde günlük hayat nasıl şekillenir? Beş şartın hikâyesi.",
    Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoab9Nx9nCOMvMUmWTP1QUzh8npHyhE8w--A&s",
    Link: "bes-sart.html"
  },
  {
    Id: 11,
    Title: "Kutsal Geometri",
    Cat: "Geometri",
    Date: "28 Temmuz 2026",
    Excerpt: "Kutsal geometri, doğa ve evrenin biçimlerini simgeleyen geometrik şekillerin ve oranların çalışmasıdır.",
    Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM3HLIxCzK3_cR3_LyR-SJA4q9jj3aauz7jA&s",
    Link: "kutsal-geometri.html"
  },
  {
    Id: 10,
    Title: "Fibonacci Dizisi",
    Cat: "Matematik",
    Date: "28 Temmuz 2026",
    Excerpt: "Basit bir toplama kuralı, doğada ve sanatta şaşırtıcı düzenler ortaya çıkarır: Fibonacci dizisi.",
    Img: "https://evrenatlasi.com.tr/wp-content/uploads/2021/08/2560px-fibonaccispiralsvg.webp",
    Link: "fibonacci-dizisi.html"
  },
  {
    Id: 9,
    Title: "Fovizm Akımı",
    Cat: "Account Original",
    Date: "27 Temmuz 2026",
    Excerpt: "Account Original Content Dergimizin 3. sayısındaki Fovizm sanat akımı konusunu ele alıyoruz.",
    Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQkoH-Yx2Fg9hX7H0KFsk3DvgsSNxG4APPhQ&s",
    Link: "fovizm.html"
  },
  {
    Id: 8,
    Title: "Tahvilin Anatomisi",
    Cat: "Account Original",
    Date: "27 Temmuz 2026",
    Excerpt: "Account Original Content Dergimizin 3. sayısındaki Tahvilin Anatomisi konusunu ele alıyoruz.",
    Img: "https://img1.wsimg.com/isteam/ip/0006fe8b-f09a-4261-ba2e-521749d34139/Bond_certificate.jpg",
    Link: "tahvil.html"
  },
  {
    Id: 7,
    Title: "Pandora'nın Kutusu",
    Cat: "Account Original",
    Date: "27 Temmuz 2026",
    Excerpt: "Account Original Content Dergimizin 3. sayısındaki Pandora'nın Kutusu konusunu ele alıyoruz.",
    Img: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Dante_Gabriel_Rossetti_-_Pandora.jpg",
    Link: "pandoranın-kutusu.html"
  },
  {
    Id: 6,
    Title: "Evler: Zodyak Yolu",
    Cat: "Account Original",
    Date: "27 Temmuz 2026",
    Excerpt: "Account Original Content Dergimizin 3. sayısındaki Evler: Zodyak Yolunu ele alıyoruz.",
    Img: "https://img3.stockfresh.com/files/p/peterhermesfurian/m/48/6404588_stock-vector-astrology-zodiac-with-signs-houses-planets-and-elements.jpg",
    Link: "evler-zodyak-yolu.html"
  },
  {
    Id: 5,
    Title: "Hz. Adem",
    Cat: "Account Original",
    Date: "27 Temmuz 2026",
    Excerpt: "Account Original Content Dergimizin 2. sayısındaki Hz. Adem konusunu ele alıyoruz.",
    Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfpDKw4KY_g2q9vjvrOPEAC4MJx1jx3mrVww&s",
    Link: "hz-adem.html"
  },
  {
    Id: 4,
    Title: "Altın Oran",
    Cat: "Account Original",
    Date: "26 Temmuz 2026",
    Excerpt: "Account Original Content Dergimizin 2. sayısındaki Altın Oran konusunu ele alıyoruz.",
    Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7p2MjZd14jdJveH3ceL7gO8eF_7ek5u5iaA&s",
    Link: "altin-oran.html"
  },
  {
    Id: 3,
    Title: "Romanesk Mimari",
    Cat: "Account Original",
    Date: "26 Temmuz 2026",
    Excerpt: "Account Original Content Dergimizin 2. sayısındaki Romanesk Mimari konusunu ele alıyoruz.",
    Img: "https://btugecerken.com/geçerken logo romanesk-Photoroom.png",
    Link: "romanesk.html"
  },
  {
    Id: 2,
    Title: "Art Nouveau",
    Cat: "Account Original",
    Date: "22 Temmuz 2026",
    Excerpt: "Account Original Content Dergimizin 3. sayısındaki Art Nouveau akımı konusunu ele alıyoruz.",
    Img: "https://btugecerken.com/ge%C3%A7erkenlogo-artnouveau-filigranl%C4%B1.png",
    Link: "art-nouveau.html"
  },
  {
    Id: 1,
    Title: "BTÜ Geçerken Tanıtım",
    Cat: "Gündem",
    Date: "08 Temmuz 2026",
    Excerpt: "BTÜ Geçerken Topluluğunu Yakından Tanıyalım.",
    Img: "https://btugecerken.com/logogecerken-Photoroom (1).png",
    Link: "btu-gecerken-nedir-bir-topluluktan-daha-fazlasi.html"
  }
];

let currentPage = 1;
const postsPerPage = 12;
let selectedCategory = 'Tümü';

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function renderBlogGrid() {
  const blogGrid = document.getElementById('blogGrid');
  if (!blogGrid) {
    console.warn('btugecerken: #blogGrid elementi bulunamadı.');
    return;
  }

  let filtered = blogPosts;
  if (selectedCategory && selectedCategory !== 'Tümü') {
    filtered = filtered.filter(post => {
      const cat = post.cat || post.Cat;
      return cat && cat.toString().trim().toLowerCase() === selectedCategory.trim().toLowerCase();
    });
  }

  if (filtered.length === 0) {
    blogGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align:center; padding: 50px 20px; color: #888;">
        Bu kategoride henüz yazı bulunmamaktadır.
      </div>
    `;
    renderPaginationControls(0);
    return;
  }

  const totalPages = Math.ceil(filtered.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filtered.slice(startIndex, startIndex + postsPerPage);

  const fallbackImg = "https://btugecerken.com/logogecerken-Photoroom (1).ico";

  blogGrid.innerHTML = paginatedPosts.map(post => {
    const title = escapeHtml(post.title || post.Title || '');
    const excerpt = escapeHtml(post.excerpt || post.Excerpt || '');
    const cat = escapeHtml(post.cat || post.Cat || '');
    const date = escapeHtml(post.date || post.Date || '');
    const img = (post.img || post.Img || fallbackImg).trim();
    const link = (post.link || post.Link || '#').trim();

    return `
      <a class="post-card" href="${link}">
        <div class="post-cover" style="background-image: url('${img}'), url('${fallbackImg}');"></div>
        <div class="post-body">
            <span class="post-cat">${cat}</span>
            <h3>${title}</h3>
            <p class="post-excerpt">${excerpt}</p>
            <div class="post-meta">${date}</div>
        </div>
      </a>
    `;
  }).join('');

  renderPaginationControls(totalPages);
}

function renderPaginationControls(totalPages) {
  const paginationContainer = document.getElementById('pagination');
  if (!paginationContainer) return;

  if (totalPages <= 1) {
    paginationContainer.innerHTML = '';
    return;
  }

  let buttonsHTML = '';
  for (let i = 1; i <= totalPages; i++) {
    buttonsHTML += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
  }
  paginationContainer.innerHTML = buttonsHTML;
}

function changePage(page) {
  currentPage = page;
  renderBlogGrid();
  window.scrollTo({ top: 350, behavior: 'smooth' });
}

function filterCategory(catName) {
  selectedCategory = catName;
  currentPage = 1;

  document.querySelectorAll('.cat-btn').forEach(btn => {
    if (btn.textContent.trim().toLowerCase() === catName.toLowerCase()) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  renderBlogGrid();
}

// Global scope'a açma (HTML onclick erişimi için)
window.filterCategory = filterCategory;
window.changePage = changePage;
window.renderBlogGrid = renderBlogGrid;

// DOM yüklenme kontrolü (Erken veya geç çalışma riskine karşı çift kontrol)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderBlogGrid);
} else {
  renderBlogGrid();
}