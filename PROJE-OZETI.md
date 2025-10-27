# 📦 Proje Dosyaları ve Açıklamaları

## 🎯 Ana Dosyalar

### 1. `index.html`
- Ana HTML sayfası
- Sayfa yapısını ve elementleri içerir
- Arama kutusu, konum gösterimi, ayet kartı ve bilgi modalı

### 2. `styles.css`  
- Tüm stil ve animasyonlar
- Responsive tasarım (mobil + desktop)
- Arka plan efektleri ve hover animasyonları

### 3. `script.js`
- Ana JavaScript dosyası
- Konum algılama ve arama fonksiyonları
- 21 fotoğraf linki ve 29 özlü söz
- Koordinat → Sure/Ayet hesaplama algoritması
- Modal kontrolü

### 4. `quran-data.js`
- Kur'an-ı Kerim veri yapısı
- 114 surenin isimleri ve ayet sayıları
- ⚠️ Gerçek ayet metinlerini eklemeniz gerekiyor

## 📚 Dokümantasyon Dosyaları

### 5. `README.md`
- Proje hakkında genel bilgi
- Özellikler ve teknolojiler
- Katkıda bulunma rehberi

### 6. `HIZLI-BASLANGIC.md` ⭐
- 5 dakikada başlangıç kılavuzu
- Adım adım kurulum
- En önemli değişiklikler

### 7. `DEPLOYMENT.md`
- Detaylı deployment rehberi
- GitHub Pages ve Netlify talimatları
- Sorun giderme

### 8. `.gitignore`
- Git tarafından ignore edilecek dosyalar
- IDE ve geçici dosyalar

## 🔧 Yapılması Gerekenler

### Sadece GitHub'a Yükleyin!

Site tamamen hazır! API entegrasyonu yapıldı, tüm özellikler çalışıyor. Yapmanız gereken tek şey:

```bash
git init
git add .
git commit -m "İlk commit: Konum tabanlı ayet sitesi"
git remote add origin https://github.com/KULLANICI-ADI/REPO-ADI.git
git push -u origin main
```

Sonra GitHub Pages'de yayınlayın: Repository Settings > Pages > Source: main branch

**Hepsi bu kadar!** Site Diyanet mealini otomatik olarak API'den çekiyor.

## 🎨 Özelleştirme İpuçları

### Fotoğraf Ekleme
`script.js` dosyasında:
```javascript
const images = [
    // ... mevcut linkler
    'https://i.imgur.com/YENI-LINK.jpg',  // Yeni fotoğraf
];
```

### Özlü Söz Ekleme
`script.js` dosyasında:
```javascript
const quotes = [
    // ... mevcut sözler
    "Yeni özlü sözünüz buraya",
];
```

### Renkleri Değiştirme
`styles.css` dosyasında renk kodlarını arayın ve değiştirin:
- `#2c3e50` - Koyu metin rengi
- `#27ae60` - Yeşil buton rengi
- `rgba(255, 255, 255, 0.95)` - Beyaz kutu arka planı

## 📊 Teknik Özellikler

- **Framework**: Vanilla JavaScript (framework yok)
- **Responsive**: Mobil ve desktop uyumlu
- **API'ler**: 
  - OpenStreetMap Nominatim (konum arama)
  - Browser Geolocation (konum algılama)
  - Quran API (opsiyonel - ayet metinleri)
- **Hosting**: GitHub Pages veya Netlify (ücretsiz)

## 🌟 Özellikler

✅ Konum bazlı ayet seçimi  
✅ 21 huzur veren fotoğraf  
✅ 29 özlü söz  
✅ Dropdown arama önerileri  
✅ Tarayıcı konum algılama  
✅ Diyanet'e sure bağlantıları  
✅ Responsive tasarım  
✅ Animasyonlu geçişler  
✅ Bilgi modalı  

## 📞 Destek

Sorun yaşıyorsanız:
1. `HIZLI-BASLANGIC.md` dosyasını okuyun
2. `DEPLOYMENT.md` dosyasındaki sorun gidermeye bakın
3. Tarayıcı console'unu kontrol edin (F12)
4. GitHub Issues'da soru sorun

## 📝 Lisans ve Notlar

- Kur'an metinleri Diyanet İşleri Başkanlığı mealinden
- Fotoğraflar Imgur üzerinden hosted
- Koordinat-ayet ilişkisi matematiksel, anlam bağı yok
- Eğitim ve teşvik amaçlı proje

---

**Başarılar! Harika bir site oluşturacaksınız! 🚀**
