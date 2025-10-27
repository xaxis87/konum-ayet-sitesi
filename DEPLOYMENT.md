# Deployment Talimatları

Bu dosya projenizi nasıl yayınlayacağınızı adım adım açıklar.

## ✅ Önemli Not

**Site tamamen hazır!** API entegrasyonu yapıldı, Diyanet meali otomatik olarak çekiliyor. Yapmanız gereken sadece GitHub'a yükleyip yayınlamak.

## 1. GitHub'a Yükleme

### İlk Kurulum

```bash
cd proje-dizini
git init
git add .
git commit -m "İlk commit: Konum tabanlı ayet sitesi"
```

### GitHub'da Repository Oluşturma

1. https://github.com adresine gidin
2. Sağ üstten "New repository" tıklayın
3. Repository adı verin (örn: `konum-ayet-sitesi`)
4. "Public" seçin
5. "Create repository" tıklayın

### Kodu GitHub'a Yükleme

```bash
git remote add origin https://github.com/KULLANICI-ADINIZ/REPO-ADI.git
git branch -M main
git push -u origin main
```

## 3. GitHub Pages ile Yayınlama

1. GitHub repository sayfanıza gidin
2. "Settings" sekmesine tıklayın
3. Sol menüden "Pages" seçin
4. "Source" altında "Deploy from a branch" seçin
5. Branch olarak "main" ve folder olarak "/ (root)" seçin
6. "Save" butonuna tıklayın
7. Birkaç dakika içinde siteniz yayınlanacak!
8. Sitenizin URL'si: `https://KULLANICI-ADINIZ.github.io/REPO-ADI/`

## 4. Netlify ile Yayınlama (Alternatif)

### Yöntem 1: GitHub'dan Deploy

1. https://netlify.com adresine gidin ve giriş yapın
2. "Add new site" > "Import an existing project" tıklayın
3. "Deploy with GitHub" seçin
4. Repository'nizi seçin
5. Build settings boş bırakın (statik site)
6. "Deploy site" tıklayın
7. Siteniz otomatik olarak yayınlanacak!

### Yöntem 2: Drag & Drop

1. Netlify'da "Add new site" > "Deploy manually" seçin
2. Proje klasörünüzü sürükleyip bırakın
3. Anında yayınlanır!

## 5. Özel Domain Bağlama (İsteğe Bağlı)

### GitHub Pages için:
1. Repository settings > Pages
2. "Custom domain" kısmına domain'inizi yazın
3. DNS ayarlarınızı güncelleyin:
   - A kaydı: `185.199.108.153`
   - CNAME kaydı: `KULLANICI-ADI.github.io`

### Netlify için:
1. Site settings > Domain management
2. "Add custom domain" tıklayın
3. Domain'inizi yazın ve talimatları izleyin

## 6. Güncelleme Yapma

Kodda değişiklik yaptıktan sonra:

```bash
git add .
git commit -m "Açıklama mesajı"
git push
```

- **GitHub Pages**: Birkaç dakika içinde otomatik güncellenir
- **Netlify**: Anında otomatik güncellenir

## 7. Sorun Giderme

### Site açılmıyor
- GitHub Pages: Settings > Pages kısmında "Your site is live at..." yazısını kontrol edin
- Tarayıcı cache'ini temizleyin (Ctrl+Shift+Delete)

### Fotoğraflar görünmüyor
- Imgur linklerinin doğru olduğundan emin olun
- Imgur'un `.jpg` uzantılı direct linklerini kullanın

### Konum çalışmıyor
- HTTPS üzerinden eriştiğinizden emin olun (HTTP'de geolocation çalışmaz)
- Tarayıcıda konum izni verdiğinizden emin olun

### API hatası
- Nominatim API limiti günde 1000 istek. Çok fazla kullanımda alternatif API kullanın
- Kur'an API'si çalışmıyorsa JSON dosyası kullanın

## 8. Performans İpuçları

- Imgur fotoğrafları optimize edin (maksimum 1920x1080)
- API yerine JSON kullanarak yükleme süresini azaltın
- CDN kullanarak global erişimi hızlandırın

## Destek

Sorun yaşarsanız:
1. GitHub Issues'da sorun bildirin
2. README.md dosyasını kontrol edin
3. Console'da hata mesajlarını kontrol edin (F12)

---

**Başarılar! 🚀**
