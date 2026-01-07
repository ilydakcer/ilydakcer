Harmony Archive PWA – Dönem Sonu Projesi Proje Açıklaması

Harmony Archive, MusicBrainz API kullanılarak geliştirilmiş, bir müzik stüdyosu / sanatçı ajansı için hazırlanmış çok sayfalı, kurulabilir ve çevrimdışı çalışabilen bir web uygulamasıdır. Proje, Web Tabanlı Mobil Uygulama Geliştirme dersleri kapsamlı olarak hazırlanmıştır.

Kullanılan API MusicBrainz API https://musicbrainz.org/doc/MusicBrainz_API

Örnek Endpointler Sanatçı arama https://musicbrainz.org/ws/2/artist/?query=rock&fmt=json

Sanatçı albümleri https://musicbrainz.org/ws/2/release?artist={artistId}&fmt=json

Sayfa Yapısı (Çoklu Sayfa) index.html → Ana sayfa artistler.html → Sanatçı listesi detay.html → Sanatçı detay / albümler about.html → Hakkımızda contact.html → İletişim formu offline.html → Çevrimdışı ekranı Her sayfanın ayrı bir HTML dosyasıdır.

CSS Framework Bootstrap 5 (CDN) https://getbootstrap.com/ Bootstrap grid sistemi ve bileşenleri kullanılmıştır. Ek olarak css/style.css dosyasında özel stiller yazılmıştır.

PWA Özellikleri Manifest dosyası (manifest.json) Service Worker Çevrimdışı çalışma (offline.html) App Shell önbellek Kurulumu yapılabilir (bağımsız)

Çevrimdışı Senaryo İnternet bağlantısı yoksa offline.html gösterilen API'ye erişilemezse /data/sample.json üzerinden veri kullanılır Kullanıcı bilgilendirilir

Canlı Demo Canlı Uygulama: BURAYA CANLI DEMO LİNKİ

Tanıtım Videosu Demo Video: BURAYA VİDEO LİNKİ

Videoda: API'den veri ekleme Arama özelliği Detay sayfası Çevrimdışı çalışma Kurulum yapılabilirlik gösterilir. geliştirici

İlayda Koçer Üniversite 2. Sınıf – Ön Yüz (Front-End) Yazılım Geliştirme
