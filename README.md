BTÜ Geçerken Topluluğu — Web Platformu (V5)

"Geçerken Güzel Bir İz Bırak"

Bursa Teknik Üniversitesi bünyesinde faaliyet gösteren BTÜ Geçerken Topluluğu'nun resmî web portalı, dijital yayıncılık rafı (Dergilik), video akış platformu (BTÜ Geçerken TV) ve entegre AI asistanı kaynak kodları.

📌 Proje Genel Bakışı

BTÜ Geçerken V5, üniversite ekosisteminde ilim, sanat, felsefe, kültür ve şehir mirasını bir araya getiren tek duraklı bir dijital platformdur. Harici portallara olan bağımlılığı ortadan kaldırarak; video içeriklerini, dijital dergileri, makale arşivini ve etkinlik takvimini tek ve uyumlu bir mimaride sunar.

✨ Temel Modüller ve Özellikler

🏛️ 1. Ana Portal & Etkinlik Motoru (index.html, etkinlikler.js)

Dinamik Etkinlik Filtreleme: Akademik yıl (2024/2025, 2025/2026, 2026/2027), kategori ve anlık metin aramasına göre dinamik listeleme.

Canlı Yayın Entegrasyonu: Viloud Player ve YouTube temelli doğrudan ana sayfadan izlenebilen canlı TV bandı.

Scroll-Reveal: Sayfa içi akıcı animasyonlar ve modern vitrin tasarımı.

📺 2. BTÜ Geçerken TV (btugecerkentv.html, video.js)

Streaming / Netflix Arayüzü: Öne çıkan içerikler için dinamik Hero Billboard.

Tematik Şeritler: Gastronomi, Bursa Kültürel Mirası, Fikir Akımları ve Kampüs Yaşamı kategorilerinde kaydırılabilir video dizileri (Carousels).

Modal Player: Sayfa yenilenmeden açılan ve izleme deneyimi sunan pop-up video oynatıcı.

📚 3. Dijital Dergilik (dergilik.html, dergilik.js)

Koleksiyon Arşivi: BTÜ Geçerken Culture, Mahya Dergisi ve Account Originals sayıları.

Çevrim İçi Okuma ve İndirme: Doğrudan tarayıcıda PDF görüntüleme veya tek tıkla cihaza indirme butonları.

Periyodik Yayın Düzeni: Her ayın 15'inde güncellenen raf mantığı.

✍️ 4. Blog & Düşünce Yazıları (btugecerkenblog.html, blog.js)

Kategorik İçerik: İslam Felsefesi, Sanat Tarihi, Maneviyat, Sosyal Adalet ve Bursa Gastronomisi.

İstemci Taraflı Sayfalama: Sayfa yenilenmeden çalışan hızlı sayfalama (sayfa başı 12 yazı) ve XSS korumalı HTML kaçış sanitizasyonu.

🤖 5. BTÜ Geçerken AI Widget (btugecerkenai.html, btugecerkenai.md)

Sayfanın sağ altına entegre, Groq API (LLM) destekli akıllı asistan.

Topluluk etkinliklerini, yönetim kurulunu, duyuruları ve WhatsApp katılım bağlantılarını yanıtlayan sistem yönergesi ve kural motoru.

📂 Dizin Yapısı

btugecerken-v5/
├── index.html                   # Ana giriş sayfası ve canlı yayın vitrini
├── btugecerkentv.html           # BTÜ Geçerken TV video platformu
├── btugecerkenblog.html         # Blog ve makale arşivi sayfası
├── dergilik.html                # Dijital dergi koleksiyonu ve raf arayüzü
├── etkinlikler.html             # Dönemlik etkinlik listesi ve filtreleme
├── ekibimiz.html                # Yönetim kurulu ve birim tanıtımları
├── btugecerkenai.html           # Tam sayfa AI asistan arayüzü
├── style.css                    # Ortak tasarım ve tipografi tanımları
├── navbar.css                   # Gezinme çubuğu (Responsive navbar)
├── blog.js                      # Blog render ve sayfalama mantığı
├── video.js                     # TV modülü video veritabanı ve modal motoru
├── dergilik.js                  # Dergilik kütüphanesi ve raf slider scripti
├── etkinlikler.js               # Etkinlik arama, filtreleme ve DOM render motoru
├── btugecerkenai.md             # AI asistan bilgi tabanı ve sistem promptu
└── README.md                    # Proje dokümantasyonu


🛠️ Kullanılan Teknolojiler

Ön Yüz (Frontend): Semantik HTML5, Modern CSS3 (Grid & Flexbox mimarisi)

İstemci Mantığı: Vanilla JavaScript (ES6+)

Tipografi & İkonlar: Google Fonts (Amiri, Syne, Noto Serif TR), FontAwesome 6

Yapay Zekâ (AI): Groq Chat Completions API & Entegre Kural Motoru

Medya & Yayın: Viloud Player API, YouTube Embedded Player API

🚀 Yerel Geliştirme (Local Setup)

Projeyi kendi bilgisayarınızda çalıştırmak için harici bir paket yöneticisine (npm, yarn vb.) ihtiyaç yoktur:

Repoyu klonlayın:

git clone https://github.com/btugecerken/btugecerken-v5.git
cd btugecerken-v5


Bir yerel sunucu başlatın:
VS Code kullanıyorsanız Live Server eklentisiyle index.html üzerinden açabilir veya Python yerel sunucusunu çalıştırabilirsiniz:

# Python 3 ile:
python -m http.server 8000


Tarayıcınızda açın:

http://localhost:8000


👥 Yönetim ve Katkı

Topluluk Başkanı: Muhammed ERİM

Başkan Yardımcıları: Meliha ALKAN, Tarık ÇELİK

Ekip Birimleri: Sosyal Medya Ekibi, Proje & Ar-Ge Ekibi, Organizasyon Ekibi

Katkıda bulunmak isterseniz lütfen önce bir konu (issue) açarak yapmak istediğiniz geliştirmeyi belirtiniz.

📬 İletişim

E-posta: info@btugecerken.com

Web: btugecerken.com

Yerleşke: Bursa Teknik Üniversitesi, Mimar Sinan Yerleşkesi, Yıldırım / BURSA
