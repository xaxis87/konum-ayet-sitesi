# 🚀 Hızlı Başlangıç Kılavuzu

Bu kılavuz projenizi 5 dakikada yayınlamanız için hazırlanmıştır.

## ⚡ Hızlı Adımlar

### 1. Dosyaları İndirin
Tüm dosyaları bilgisayarınıza indirin.

### 2. GitHub'a Yükleyin ✅

**Komut Satırı ile:**
```bash
cd proje-klasörü
git init
git add .
git commit -m "İlk commit: Konum tabanlı ayet sitesi"
git branch -M main
git remote add origin https://github.com/KULLANICI-ADINIZ/REPO-ADI.git
git push -u origin main
```

**GitHub Desktop ile:**
1. GitHub Desktop'ı açın
2. "Add" > "Add existing repository"
3. Proje klasörünü seçin
4. "Publish repository" tıklayın

### 3. GitHub Pages'de Yayınlayın 🚀

1. GitHub'da repository'nize gidin
2. Settings > Pages
3. Source: "main" branch seçin
4. Save
5. ✅ Siteniz yayında: `https://KULLANICI-ADI.github.io/REPO-ADI/`

**Hepsi bu kadar!** Site hazır ve çalışıyor. API otomatik olarak Diyanet mealini çekiyor.

## 🎨 Özelleştirme

### Fotoğraf Ekleme
`script.js` → `images` dizisine Imgur linki ekleyin

### Özlü Söz Ekleme  
`script.js` → `quotes` dizisine metin ekleyin

### Renk Değiştirme
`styles.css` dosyasındaki renk kodlarını değiştirin

## 🆘 Sorun mu var?

1. **Fotoğraflar görünmüyor**: Imgur linklerinin `.jpg` uzantılı olduğundan emin olun
2. **Konum çalışmıyor**: HTTPS üzerinden erişin (GitHub Pages otomatik sağlar)
3. **Ayet görünmüyor**: İnternet bağlantınızı kontrol edin (API kullanıyor)

## 📖 Daha Fazla Bilgi

- `README.md`: Detaylı proje açıklaması
- `DEPLOYMENT.md`: Gelişmiş deployment seçenekleri
- `PROJE-OZETI.md`: Dosya açıklamaları

---

**İyi çalışmalar! 🌟**
