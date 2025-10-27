// Fotoğraf linkleri
const images = [
    'https://i.imgur.com/cAsRUGb.jpg',
    'https://i.imgur.com/8ZpRJLJ.jpg',
    'https://i.imgur.com/O5zAYQ3.jpg',
    'https://i.imgur.com/PWoQRqu.jpg',
    'https://i.imgur.com/gpKJIz9.jpg',
    'https://i.imgur.com/ppLi9Rd.jpg',
    'https://i.imgur.com/jtHnjJd.jpg',
    'https://i.imgur.com/AlQORBZ.jpg',
    'https://i.imgur.com/GV2XRaa.jpg',
    'https://i.imgur.com/zVy7ODU.jpg',
    'https://i.imgur.com/TXcAYfm.jpg',
    'https://i.imgur.com/QnKtMnH.jpg',
    'https://i.imgur.com/ZpXbJRM.jpg',
    'https://i.imgur.com/ZlFnlfU.jpg',
    'https://i.imgur.com/rsDxFvg.jpg',
    'https://i.imgur.com/NDaD6aN.jpg',
    'https://i.imgur.com/IPBWWKN.jpg',
    'https://i.imgur.com/xxfLjr8.jpg',
    'https://i.imgur.com/atgJ1nQ.jpg',
    'https://i.imgur.com/kzTGUQp.jpg',
    'https://i.imgur.com/vNvKu4r.jpg'
];

// Özlü sözler
const quotes = [
    "Rabbin seni senden daha iyi tanıyor; O'na dönmekten çekinme.",
    "Bu sıradan bir an değil aksine sana özel, günün ve gecenin devamına yön verecek bir an.",
    "En yücenin huzurunda olduğunu hisset. Özüne odaklan.",
    "İçindeki fırtınayı dindirecek tek liman: Namaz.",
    "Her secde, kalbine inen bir huzur kapısıdır.",
    "Sadece secde et ve bırak yüklerini Rahman'a.",
    "Bu bir yük değil, Yaradan'la kalpten bir buluşma. Kıymetini bil.",
    "Her secde, günün ağırlığından arınmak ve yeniden başlamak için bir fırsattır.",
    "Kalbinin diliyle konuşma vakti: Namaz.",
    "Namazın huzurunda Rabbinin merhametine sığın.",
    "Secde, kalbin en derin yerinden çıkan bir duadır.",
    "Birazdan alnını secdeye koyacaksın ve o an, dünyadaki hiçbir yük seninle birlikte eğilmeyecek. Yalnızca sen ve Rabbin olacaksınız.",
    "Bugün belki yoruldun, belki kırıldın. Ama bu vakit, Rabbinin huzurunda kendini bulacağın, parçalarını toplayacağın bir buluşma anıdır.",
    "İçinden geçen binlerce söze gerek yok. Rabbin senin yorgunluğunu, hayalini, suskunluğunu bile duyar. Sadece kalbini aç.",
    "Belki gün içinde kayboldun, belki kalbin karıştı. Ama namaz, ruhunun yönünü tekrar kıbleye çevirmesi için bir hediye",
    "Secdeye vardığında sadece alnın değil, yüklerin de yere değsin. Her şeyi bırak. Seni en iyi bilenin merhametine bırak.",
    "Rabbine dönmek için en iyi zamanı bekleme. O, en eksik hâlini bile sonsuz şefkatiyle saracak olan Rahman'dır.",
    "Yolunu kaybetmiş gibi hissetsen de her vakit seni doğru yola çağıran bir ezan vardır. Her namaz, yönünü bulman için bir fırsattır.",
    "Bütün gün boyunca seni meşgul eden düşünceleri bir kenara bırak. Çünkü şimdi, seni her şeyden daha çok seven Rabbinle baş başa kalacaksın.",
    "Bu vakit, sadece yere eğilme vakti değil. Aynı zamanda kalbini yükseltme vaktidir. Çünkü sen secde ettikçe, ruhun yücelir.",
    "Namaz, dış dünyanın seslerini susturup içindeki duaya kulak vermektir.",
    "İçindeki her şeyi dökebilirsin; çünkü namaz, en derin duygularını paylaşabileceğin en samimi buluşmadır.",
    "Bazen sadece durup yönünü değiştirmek yeterlidir. Namaz, bu yön değiştirmenin her gün beş fırsatıdır.",
    "Namaz, Allah'a sadece yönelmek değil; O'nun zaten hep orada olduğunu hatırlamaktır.",
    "Kalbinin yönünü değiştirmek istiyorsan, önce durman gerekir. Namaz bu duruşun ilk adımıdır.",
    "Kime gösterdiğin değil, kime yöneldiğin önemlidir. Samimiyet, yalnızken de aynı hâlde durabilmektir.",
    "Kendini büyük görerek yaklaşırsan uzaklaşırsın. Kul olduğunu hatırlamak, seni Rabbine en çok yaklaştırandır.",
    "Duanın gücü, sesinin tonunda değil; kalbinin titreşimindedir.",
    "Yüzün secdede olabilir, ama gönlün uzaksa orada değilsindir. Allah'a varmak için beden değil, kalp eğilir."
];

// Sayfa yüklendiğinde rastgele arka plan ve söz seç
function setRandomBackground() {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    document.getElementById('backgroundImage').style.backgroundImage = `url('${randomImage}')`;
    document.getElementById('quoteOverlay').textContent = randomQuote;
}

// Koordinatlardan sure ve ayet hesapla
function calculateVerseFromCoordinates(lat, lon) {
    // Enlem (-90 ile +90 arası) -> Sure numarası (1-114)
    // Enlem değerini 0-114 arasına normalize et
    const normalizedLat = ((lat + 90) / 180) * 114;
    const suraNumber = Math.max(1, Math.min(114, Math.ceil(normalizedLat)));
    
    // Boylam (-180 ile +180 arası) -> Ayet numarası
    // Boylam değerini 0-1 arasına normalize et
    const normalizedLon = (lon + 180) / 360;
    
    // Surenin ayet sayısını al
    const totalVerses = QURAN_DATA.surahs[suraNumber - 1].numberOfAyahs;
    
    // Ayet numarasını hesapla
    const verseNumber = Math.max(1, Math.min(totalVerses, Math.ceil(normalizedLon * totalVerses)));
    
    return { suraNumber, verseNumber };
}

// API'den ayet bilgilerini al
async function fetchVerseFromAPI(suraNumber, verseNumber) {
    try {
        const response = await fetch(`https://api.alquran.cloud/v1/ayah/${suraNumber}:${verseNumber}/tr.diyanet`);
        const data = await response.json();
        
        if (data.code === 200 && data.data) {
            return {
                text: data.data.text,
                suraName: data.data.surah.name
            };
        } else {
            throw new Error('API yanıt hatası');
        }
    } catch (error) {
        console.error('API hatası:', error);
        return null;
    }
}

// Ayeti göster
async function displayVerse(suraNumber, verseNumber) {
    // Loading göster
    document.getElementById('verseText').innerHTML = 'Ayet yükleniyor...';
    document.getElementById('verseInfo').textContent = '';
    
    // API'den ayet bilgilerini al
    const data = await fetchVerseFromAPI(suraNumber, verseNumber);
    
    if (data) {
        document.getElementById('verseText').innerHTML = `"${data.text}"`;
        document.getElementById('verseInfo').textContent = `${data.suraName} Suresi - ${verseNumber}. Ayet`;
        
        // Diyanet linki
        const diyanetLink = `https://kuran.diyanet.gov.tr/mushaf/kuran-meal-2/${suraNumber}`;
        document.getElementById('diyanetLink').href = diyanetLink;
        document.getElementById('diyanetLink').style.display = 'inline-block';
    } else {
        // API başarısız olursa placeholder göster
        const sura = QURAN_DATA.surahs[suraNumber - 1];
        document.getElementById('verseText').innerHTML = 'Ayet yüklenirken bir hata oluştu. Lütfen internet bağlantınızı kontrol edin.';
        document.getElementById('verseInfo').textContent = `${sura.name} Suresi - ${verseNumber}. Ayet`;
        
        const diyanetLink = `https://kuran.diyanet.gov.tr/mushaf/kuran-meal-2/${suraNumber}`;
        document.getElementById('diyanetLink').href = diyanetLink;
        document.getElementById('diyanetLink').style.display = 'inline-block';
    }
}

// Konum algılama
document.getElementById('detectLocationBtn').addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            
            // Reverse geocoding ile şehir adını al
            fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&accept-language=tr`)
                .then(response => response.json())
                .then(data => {
                    const locationName = data.address.city || data.address.town || data.address.village || data.address.county || 'Bilinmeyen Konum';
                    document.getElementById('locationDisplay').textContent = locationName;
                    
                    // Ayeti hesapla ve göster
                    const { suraNumber, verseNumber } = calculateVerseFromCoordinates(lat, lon);
                    displayVerse(suraNumber, verseNumber);
                })
                .catch(error => {
                    console.error('Konum adı alınamadı:', error);
                    document.getElementById('locationDisplay').textContent = `Konum: ${lat.toFixed(4)}, ${lon.toFixed(4)}`;
                    
                    // Yine de ayeti göster
                    const { suraNumber, verseNumber } = calculateVerseFromCoordinates(lat, lon);
                    displayVerse(suraNumber, verseNumber);
                });
        }, (error) => {
            alert('Konum erişimi reddedildi veya kullanılamıyor. Lütfen manuel olarak arama yapın.');
            console.error('Geolocation hatası:', error);
        });
    } else {
        alert('Tarayıcınız konum algılamayı desteklemiyor.');
    }
});

// Arama fonksiyonu
let searchTimeout;
document.getElementById('searchInput').addEventListener('input', (e) => {
    const query = e.target.value.trim();
    const resultsDiv = document.getElementById('searchResults');
    
    clearTimeout(searchTimeout);
    
    if (query.length < 2) {
        resultsDiv.classList.remove('show');
        return;
    }
    
    searchTimeout = setTimeout(() => {
        // Nominatim API ile arama
        fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&countrycodes=tr&accept-language=tr&limit=5`)
            .then(response => response.json())
            .then(data => {
                resultsDiv.innerHTML = '';
                
                if (data.length === 0) {
                    resultsDiv.innerHTML = '<div class="search-result-item">Sonuç bulunamadı</div>';
                    resultsDiv.classList.add('show');
                    return;
                }
                
                data.forEach(item => {
                    const div = document.createElement('div');
                    div.className = 'search-result-item';
                    div.textContent = item.display_name;
                    div.addEventListener('click', () => {
                        const lat = parseFloat(item.lat);
                        const lon = parseFloat(item.lon);
                        
                        // Konum adını göster
                        const locationParts = item.display_name.split(',');
                        const shortName = locationParts.slice(0, 2).join(',');
                        document.getElementById('locationDisplay').textContent = shortName;
                        
                        // Arama kutusunu temizle ve sonuçları gizle
                        document.getElementById('searchInput').value = '';
                        resultsDiv.classList.remove('show');
                        
                        // Ayeti hesapla ve göster
                        const { suraNumber, verseNumber } = calculateVerseFromCoordinates(lat, lon);
                        displayVerse(suraNumber, verseNumber);
                    });
                    resultsDiv.appendChild(div);
                });
                
                resultsDiv.classList.add('show');
            })
            .catch(error => {
                console.error('Arama hatası:', error);
                resultsDiv.innerHTML = '<div class="search-result-item">Arama sırasında hata oluştu</div>';
                resultsDiv.classList.add('show');
            });
    }, 500);
});

// Arama sonuçlarını dışarı tıklandığında kapat
document.addEventListener('click', (e) => {
    const searchBox = document.querySelector('.search-box');
    const resultsDiv = document.getElementById('searchResults');
    
    if (!searchBox.contains(e.target)) {
        resultsDiv.classList.remove('show');
    }
});

// Modal kontrolü
const infoBtn = document.getElementById('infoBtn');
const modal = document.getElementById('infoModal');
const closeBtn = document.getElementById('closeBtn');

infoBtn.addEventListener('click', () => {
    modal.classList.add('show');
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});

// Sayfa yüklendiğinde
window.addEventListener('load', () => {
    setRandomBackground();
});
