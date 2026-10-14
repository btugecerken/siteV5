// ==========================================================================
// GEÇERKEN TOPLULUĞU - ETKİNLİK VERİ VERİTABANI VE FİLTRELEME MOTORU
// ==========================================================================
const events = [
  { id: 35, title: "Bu Benim Meselem Değil “Parolalı Boykot” Tiyatrosu", academicYear: "2026/2027", category: "Toplumsal Duyarlılık", date: "6 Ekim", location: "BTÜ Mimar Sinan Yerleşkesi", desc: "Sanat, yalnızca bir estetik arayışı değil; haksızlığa karşı duruşun, ortak acıları paylaşmanın ve vicdani uyanışın en güçlü parolasıdır.", tags: ["filistin", "gazze", "kampüs", "intifada", "dayanışma"], link: "parolaboykot2627.html"},
  { id: 1, title: "Kampüs İntifada", academicYear: "2025/2026", category: "Toplumsal Duyarlılık", date: "2-14 Haziran", location: "BTÜ Mimar Sinan Yerleşkesi", desc: "Filistin halkına destek amacıyla düzenlenen farkındalık etkinliği.", tags: ["filistin", "gazze", "kampüs", "intifada", "dayanışma"], link: "kampus-intifada-2526.html" },
  { id: 2, title: "İznik Manevi Gezi", academicYear: "2025/2026", category: "Manevi", date: "20 Mayıs", location: "İznik", desc: "İslam medeniyetinin önemli merkezlerinden biri olan İznik'e kültürel gezi.", tags: ["iznik", "manevi", "gezi", "osmanlı", "kültür"], link: "iznik-manevi-gezi-2526.html" },
  { id: 3, title: "Bir Şiir Bir Direniş", academicYear: "2025/2026", category: "Edebiyat", date: "18 Mayıs", location: "A Blok Yeşil Salon", desc: "Şiir dinletisi ve ödül töreni.", tags: ["şiir", "edebiyat", "yarışma", "direniş"], link: "bir-siir-bir-direnis-2526.html" },
  { id: 4, title: "Köy Okulu Ziyareti", academicYear: "2025/2026", category: "Sosyal Sorumluluk", date: "13 Mayıs", location: "Harmancık", desc: "Köy okulunda öğrencilerle gerçekleştirilen sosyal sorumluluk etkinliği.", tags: ["çocuk", "köy okulu", "sosyal sorumluluk", "harmancık"], link: "koy-okulu-ziyareti-2526.html" },
  { id: 5, title: "Tarihe İz Bırakan Kadınlar", academicYear: "2025/2026", category: "Edebiyat", date: "15 Nisan", location: "Sinan Durmaz Konferans Salonu", desc: "Okur-Yazar Buluşmaları kapsamında gerçekleştirilen konferans.", tags: ["kadın", "konferans", "tarih"], link: "tarihe-iz-birakan-kadinlar-2526.html" },
  { id: 6, title: "Zulme Karşı Tek Vücut!", academicYear: "2025/2026", category: "Toplumsal Duyarlılık", date: "7 Nisan", location: "Mimar Sinan Kampüsü", desc: "Filistin konusunda farkındalık oluşturmak amacıyla düzenlenen program.", tags: ["filistin", "gazze", "dayanışma"], link: "zulme-karsi-tek-vucut-2526.html" },
  { id: 7, title: "İlham Veren Buluşmalar", academicYear: "2025/2026", category: "Edebiyat", date: "7 Nisan", location: "Sinan Durmaz Konferans Salonu", desc: "Prof. Dr. Soner Duman ile gerçekleştirilen söyleşi.", tags: ["kitap", "söyleşi", "okur yazar"], link: "ilham-veren-bulusmalar-2526.html" },
  { id: 8, title: "Küreselleşme ve Çokkültürlülük", academicYear: "2025/2026", category: "Sosyoloji", date: "2 Nisan", location: "A Blok Beyaz Salon", desc: "Modern dünyanın çokkültürlü yapısını sosyolojik açıdan ele aldığımız konferans.", tags: ["sosyoloji", "küreselleşme", "toplum"], link: "kuresellesme-coklkulturculuk-2526.html"  },
  { id: 9, title: "İftar Sofrası Buluşması", academicYear: "2025/2026", category: "Manevi", date: "6 Mart", location: "Bursa Uludağ Üniversitesi", desc: "Ramazan ayında kardeşlik soframızda öğrencilerle bir araya geldik.", tags: ["iftar", "ramazan", "manevi"], link: "sofrasi-bulusmasi-2526.html" },
  { id: 10, title: "Sosyolojik Kurum Olarak Aile", academicYear: "2025/2026", category: "Sosyoloji", date: "25 Aralık", location: "B Blok 1. Kat Sosyal Alan", desc: "Prof. Dr. Vejdi Bilgin ile aile kurumunu sosyolojik açıdan değerlendirdik.", tags: ["hasbihal", "aile", "sosyoloji"], link: "sosyolojik-kurum-olarak-aile-2526.html" },
  { id: 11, title: "Aile Kurumunda İktisadi Bakış", academicYear: "2025/2026", category: "Sosyoloji", date: "18 Aralık", location: "B Blok 1. Kat Sosyal Alan", desc: "Aile kurumuna iktisadi perspektiften bakış.", tags: ["hasbihal", "aile", "iktisat"], link: "aile-kurumunda-iktisadi-bakis-2526.html" },
  { id: 12, title: "1. Hasbihal: Din ve Aile", academicYear: "2025/2026", category: "Manevi", date: "11 Aralık", location: "B Blok Yeşil Salon", desc: "Hasbihal serimizin ilk programı.", tags: ["hasbihal", "sohbet", "manevi"], link: "din-ve-aile-2526.html" },
  { id: 13, title: "Tanışma Etkinliği", academicYear: "2025/2026", category: "Sosyal", date: "7 Aralık", location: "BTÜ Topluluk Odası", desc: "Yeni üyelerimizle tanışma programı.", tags: ["tanışma", "sosyal", "üyeler"], link: "tanisma-2526.html" },
  { id: 14, title: "İkindi Buluşmaları", academicYear: "2025/2026", category: "Manevi", date: "16 Kasım", location: "Yeşil Camii", desc: "Kardeşlerimizle birlikte ikindi namazı sonrası sohbet ve çay buluşması.", tags: ["ikindi", "namaz", "manevi", "sohbet"], link: "ikindi-bulusmalari-2526.html" },
  { id: 15, title: "Milli Ağaçlandırma Günü", academicYear: "2025/2026", category: "Doğa", date: "11 Kasım", location: "BTÜ Kampüsü", desc: "Üniversite kampüsünde fidan dikme etkinliği.", tags: ["ağaç", "fidan", "doğa", "kampüs"], link: "milli-agaclandirma-gunu-2526.html" },
  { id: 16, title: "Dönemin Planlanması", academicYear: "2024/2025", category: "Sosyal", date: "28 Ekim 2024", location: "TDV Şehreküstü Genç Merkezi", desc: "Yönetim kurulu üyeleri planlama toplantısında kahvaltıda bir araya geldi.", tags: ["toplantı", "planlama", "kahvaltı"], link: "donem-planlamasi-2425.html" },
  { id: 17, title: "Tanışma Etkinliği", academicYear: "2024/2025", category: "Sosyal", date: "1 Kasım 2024", location: "İbrahim Paşa Diyanet Genç Ofis", desc: "Üniversite öğrencilerimizle kaynaşıp tanıştığımız güzel bir etkinlik.", tags: ["tanışma", "gençlik"], link: "tanisma-etkinligi-2425.html" },
  { id: 18, title: "Milli Ağaçlandırma Günü", academicYear: "2024/2025", category: "Doğa", date: "11 Kasım 2024", location: "Uludağ Üniversitesi", desc: "Milli Ağaçlandırma Günü’nde fidan dikme etkinliğimizi gerçekleştirdik.", tags: ["fidan", "doğa", "çevre"], link: "milli-agaclandirma-gunu-2425.html" },
  { id: 19, title: "Çanta Boyama Atölyesi", academicYear: "2024/2025", category: "Sanat", date: "15 Kasım 2024", location: "Bursa", desc: "Organizasyonumuz ile hanımlara özel Çanta Boyama Atölyesi düzenledik.", tags: ["atölye", "boyama", "sanat", "hanımlara özel"], link: "canta-boyama-atolyesi-2425.html" },
  { id: 20, title: "İkindi Buluşması: Emir Sultan", academicYear: "2024/2025", category: "Manevi", date: "20 Kasım 2024", location: "Emir Sultan Camii", desc: "Mustafa Kara hocamızın anlatımı ile Emir Sultan hazretleri hasbihali.", tags: ["ikindi", "emir sultan", "manevi"], link: "ikindi-bulusmalari-2425.html" },
  { id: 21, title: "Hasbihal: Ahlak Nedir?", academicYear: "2024/2025", category: "Sosyoloji", date: "5 Aralık 2024", location: "Yıldırım Beyazıt Yerleşkesi", desc: "Doç. Dr. Mehmet Ulukütük eşliğinde Ahlak Nedir konusunu konuştuk.", tags: ["hasbihal", "ahlak", "farkındalık"], link: "ahlak-nedir-2425.html" },
  { id: 22, title: "Sosyal Medya Ahlakı", academicYear: "2024/2025", category: "Sosyoloji", date: "12 Aralık 2024", location: "BTÜ Kampüsü", desc: "Ekber Şah Ahmedi ile sosyal medya ahlakını ele aldığımız sohbet.", tags: ["sosyal medya", "ahlak", "sohbet"], link: "sosyal-medya-ahlaki-2425.html" },
  { id: 23, title: "İktisat Ahlakı", academicYear: "2024/2025", category: "Sosyoloji", date: "19 Aralık 2024", location: "Sosyal Alan", desc: "İktisat ve ahlak ilişkisi üzerine Fahriye Afacan ile sohbet.", tags: ["iktisat", "ahlak", "sohbet"], link: "iktisat-ahlaki-2425.html" },
  { id: 24, title: "Cuma Seminerleri Başladı", academicYear: "2024/2025", category: "Manevi", date: "20 Aralık 2024", location: "Kadın Mescidi", desc: "Kadınlara yönelik ilim ve muhabbet dolu Cuma Seminerlerine başladık.", tags: ["cuma", "seminer", "manevi"], link: "cuma-seminerleri-2425.html" },
  { id: 25, title: "Toplumsal Ahlak", academicYear: "2024/2025", category: "Sosyoloji", date: "26 Aralık 2024", location: "Sosyal Alan", desc: "Toplumsal Ahlak üzerine Doç. Dr. Rıdvan Şimşek ile bir araya geldik.", tags: ["toplumsal ahlak", "etik"], link: "toplumsal-ahlak-2425.html" },
  { id: 26, title: "Kudüs Konferansı", academicYear: "2024/2025", category: "Toplumsal Duyarlılık", date: "3 Ocak 2025", location: "Diyanet Genç Ofis", desc: "Kudüs’ün dünya barışı için taşıdığı derin anlamı konuştuk.", tags: ["kudüs", "barış", "konferans"], link: "kudus-konferansi-2425.html" },
  { id: 27, title: "Çöreler İlkokulu Ziyareti", academicYear: "2024/2025", category: "Sosyal Sorumluluk", date: "14 Ocak 2025", location: "Orhaneli", desc: "Köy okulunu ziyaret ettik, yüz boyama ogünlerle çocukları güldürdük.", tags: ["köy okulu", "ziyaret", "sosyal sorumluluk"], link: "koy-okulu-ziyareti-2425.html" },
  { id: 28, title: "Mus'ab Ağlarken", academicYear: "2024/2025", category: "Sanat", date: "12 Mart 2025", location: "Mimar Sinan Yerleşkesi", desc: "Geçerken Topluluğu gönüllü öğrencileri tarafından tiyatro sahnelendi.", tags: ["tiyatro", "sanat", "gösteri"], link: "musab-aglarken-2425.html" },
  { id: 29, title: "İftar Yemeği Buluşması", academicYear: "2024/2025", category: "Manevi", date: "21 Mart 2025", location: "Bursa TDV", desc: "Ramazan’ın manevi atmosferinde iftar yemeğinde bir araya geldik.", tags: ["iftar", "ramazan", "manevi"], link: "iftar-yemegi-bulusmasi-2425.html" },
  { id: 30, title: "Tefekkür Yürüyüşü", academicYear: "2024/2025", category: "Doğa", date: "25 Nisan 2025", location: "Zeyniler Köyü", desc: "İbrahim Konak Hocamızın rehberliğinde doğayla iç içe tefekkür yürüyüşü.", tags: ["doğa", "yürüyüş", "tefekkür"], link: "tefekkur-yuruyusu-2425.html" },
  { id: 31, title: "Çadır Nöbetine Destek", academicYear: "2024/2025", category: "Toplumsal Duyarlılık", date: "30 Nisan 2025", location: "Mete Cengiz Salonu", desc: "Filistin’de yaşanan zulme dikkat çekmek için çadır nöbetine destek verdik.", tags: ["filistin", "çadır", "dayanışma"], link: "cadir-nobetine-destek-2425.html" },
  { id: 32, title: "İslam Ekonomisi", academicYear: "2024/2025", category: "Sosyoloji", date: "22 Mayıs 2025", location: "BTÜ Kampüsü", desc: "Faizsiz Bir Sistem Üzerine Mülahasalar konulu seminer programı.", tags: ["islam ekonomisi", "seminer", "iktisat"], link: "islam-ekonomisi-2425.html" },
  { id: 33, title: "Çocuk Evleri Ziyareti", academicYear: "2024/2025", category: "Sosyal Sorumluluk", date: "25 Mei 2025", location: "Darulkurra Genç Ofis", desc: "Sırameşeler Çocuk Evlerindeki kızlarımıza yönelik düzenlenen buluşma.", tags: ["sosyal sorumluluk", "çocuk", "ziyaret"], link: "cocuk-evleri-ziyareti-2425.html" },
  { id: 34, title: "Irgandı Köprüsü Atölye", academicYear: "2024/2025", category: "Sanat", date: "26 Mayıs 2025", location: "Irgandı Köprüsü", desc: "Tarihi Irgandı Köprüsü alanında piknik ve sulu boya atölyesi gerçekleştirdik.", tags: ["piknik", "sulu boya", "sanat", "atölye"], link: "irgandi-koprusu-atolye-2425.html" }
];

let currentYear = 'all';
let searchQuery = '';

const eventsGrid = document.getElementById('eventsGrid');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');

function getFilteredEvents() {
  let filtered = events;
  if(currentYear !== 'all') filtered = filtered.filter(val => val.academicYear === currentYear);
  if(searchQuery !== '') {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(val => 
      val.title.toLowerCase().includes(q) || val.desc.toLowerCase().includes(q) ||
      val.location.toLowerCase().includes(q) || val.tags.some(tag => tag.toLowerCase().includes(q))
    );
  }
  return filtered;
}

function renderEvents(eventsToRender) {
  if (!eventsGrid) return;
  eventsGrid.innerHTML = '';
  
  if(eventsToRender.length === 0) {
    eventsGrid.innerHTML = '<div class="no-results">Bu kriterlere uyan etkinlik bulunamadı.</div>';
    return;
  }
  
  eventsToRender.forEach(event => {
    const card = document.createElement('div');
    card.className = 'event-card';
    card.setAttribute('data-reveal', ''); // Scroll reveal tetikleyicisi
    
    card.innerHTML = `
      <div class="card-content" style="display:flex; flex-direction:column; height: 100%;">
        <span class="category-badge">${event.category}</span>
        <h3 class="event-title">${event.title}</h3>
        <div class="event-meta">
          <span><i class="fa-regular fa-calendar"></i> ${event.date}</span>
          <span><i class="fa-solid fa-graduation-cap"></i> ${event.academicYear}</span>
          <span><i class="fa-solid fa-location-dot"></i> ${event.location}</span>
        </div>
        <p class="event-desc">${event.desc}</p>
        <a href="${event.link}" class="read-more-link">
          Etkinliği İncele <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    `;
    eventsGrid.appendChild(card);
  });

  // Yeni kartlar eklendiğinde animasyon observer'ını tetikleme tetikleyicisi
  if (window.initScrollReveal) {
    window.initScrollReveal();
  }
}

// Event Listeners
if (filterBtns) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentYear = e.target.getAttribute('data-year');
      renderEvents(getFilteredEvents());
    });
  });
}

if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();
    renderEvents(getFilteredEvents());
  });
}

// İlk Çalıştırma
document.addEventListener("DOMContentLoaded", () => {
  renderEvents(getFilteredEvents());
});