# Konum Tabanlı Ayet Okuma Sitesi

Bu proje, bulunduğunuz konumun koordinatlarını kullanarak Kur'an-ı Kerim'den size özel bir ayet sunan web uygulamasıdır.

## Özellikler

- 📍 Konum bazlı ayet seçimi (enlem → sure, boylam → ayet)
- 🖼️ 21 farklı huzur veren fotoğraf
- 💭 29 farklı özlü söz
- 🔍 Şehir/kasaba/köy arama (dropdown önerileri ile)
- 📱 Mobil ve masaüstü uyumlu responsive tasarım
- 🌐 Tamamen Türkçe arayüz
- 🔗 Diyanet İşleri Başkanlığı'na sure bağlantıları

## Kurulum

Site tamamen hazır durumda! Yapmanız gereken sadece:

### GitHub Pages ile Yayınlama

1. Bu projeyi GitHub'a yükleyin
2. Repository ayarlarından "Pages" bölümüne gidin
3. Source olarak "main" branch'i seçin
4. Siteniz `https://kullaniciadi.github.io/repo-adi` adresinde yayınlanacak

### Netlify ile Yayınlama

1. Netlify hesabınıza giriş yapın
2. "New site from Git" butonuna tıklayın
3. GitHub repository'nizi seçin
4. Deploy edin - otomatik olarak yayınlanacak

**Not:** Site Kur'an ayetlerini otomatik olarak **Açık Kuran API**'sinden (api.acikkuran.com) çeker. **Diyanet İşleri Başkanlığı'nın yeni meali** kullanılır. İnternet bağlantısı gereklidir.

## Teknolojiler

- HTML5
- CSS3 (Flexbox, Grid, Animasyonlar)
- Vanilla JavaScript
- OpenStreetMap Nominatim API (konum arama)
- Browser Geolocation API
- **Açık Kuran API** (Diyanet İşleri Başkanlığı meali)

## Lisans

Bu proje eğitim ve teşvik amaçlıdır. Kur'an-ı Kerim metinleri Diyanet İşleri Başkanlığı mealinden alınmıştır.

## Önemli Not

**Bu sitede ayetler ile konumlar arasında herhangi bir ilişki veya anlam bağı yoktur.** Koordinatlar matematiksel bir formülle sure ve ayet numaralarına dönüştürülür. Bu site sadece Kur'an-ı Kerim'i okumaya teşvik etmek amacıyla tasarlanmıştır.

## Katkıda Bulunma

Fotoğraf ve özlü söz eklemek için:
- `script.js` dosyasındaki `images` dizisine yeni Imgur linki ekleyin
- `quotes` dizisine yeni özlü söz ekleyin

## İletişim

Sorularınız için GitHub Issues kullanabilirsiniz.
