# MİRAN İLETİŞİM LOJİSTİK - Kurumsal Web Sitesi

Modern, profesyonel kurumsal web sitesi - React.js ve Material-UI ile geliştirilmiştir.

## Özellikler

- **Multi-Page Yapı**: React Router ile ayrı sayfa navigasyonu
- **Çok Dilli Destek**: Türkçe ve İngilizce dil seçenekleri
- **Responsive Tasarım**: Tüm cihazlarda uyumlu görünüm
- **Modern UI/UX**: Material-UI bileşenleri ile profesyonel tasarım
- **Animasyonlar**: Framer Motion ile akıcı sayfa geçişleri
- **Hero Slider**: Otomatik geçişli dinamik slider
- **Active Link Styling**: Aktif sayfa vurgulaması
- **Sticky Header**: Her sayfada sabit kalan menü
- **WhatsApp Entegrasyonu**: Hızlı iletişim butonu
- **İletişim Formu**: Kullanıcı mesajları için form

## Sayfa Yapısı

| Route | Sayfa |
|-------|-------|
| `/` | Ana Sayfa (Hero + Tanıtım) |
| `/hakkimizda` | Hakkımızda |
| `/urunler` | Ürünler |
| `/hizmetler` | Hizmetler |
| `/iletisim` | İletişim |

## Kurulum

### Gereksinimler

- Node.js (v14 veya üzeri)
- npm veya yarn

### Adımlar

1. Proje klasörüne gidin:
```bash
cd miran-website
```

2. Bağımlılıkları yükleyin:
```bash
npm install --legacy-peer-deps
```

3. Geliştirme sunucusunu başlatın:
```bash
npm start
```

Uygulama varsayılan olarak http://localhost:3000 adresinde çalışacaktır.

## Komutlar

| Komut | Açıklama |
|-------|----------|
| `npm start` | Geliştirme sunucusunu başlatır |
| `npm run build` | Prodüksiyon için derler |
| `npm test` | Testleri çalıştırır |

## Proje Yapısı

```
src/
├── components/          # Yeniden kullanılabilir bileşenler
│   ├── Header.js       # Navigasyon menüsü (React Router Link)
│   ├── Footer.js       # Alt bilgi
│   ├── HeroSlider.js   # Ana slider
│   ├── ServiceCard.js  # Hizmet kartı
│   ├── ProductCard.js  # Ürün kartı
│   ├── ContactForm.js  # İletişim formu
│   ├── WhatsAppButton.js # WhatsApp butonu
│   └── LanguageToggle.js # Dil değiştirici
├── pages/              # Sayfa bileşenleri
│   ├── HomePage.js     # Ana Sayfa
│   ├── AboutPage.js    # Hakkımızda
│   ├── ProductsPage.js # Ürünler
│   ├── ServicesPage.js # Hizmetler
│   └── ContactPage.js  # İletişim
├── i18n/              # Dil dosyaları
│   ├── i18n.js       # i18n yapılandırması
│   ├── tr.json       # Türkçe çeviriler
│   └── en.json       # İngilizce çeviriler
├── theme/             # Tema yapılandırması
│   └── theme.js      # MUI tema ayarları
├── App.js            # Ana uygulama (Router yapılandırması)
└── index.js          # Giriş noktası
```

## Özelleştirme

### Renk Paleti

Renk paletini `src/theme/theme.js` dosyasından değiştirebilirsiniz:

```javascript
palette: {
  primary: {
    main: '#1565C0',    // Ana mavi
    light: '#1976D2',
    dark: '#0D47A1',
  },
  secondary: {
    main: '#37474F',    // Gri tonları
  },
}
```

### Dil Dosyaları

Çevirileri güncellemek için:
- Türkçe: `src/i18n/tr.json`
- İngilizce: `src/i18n/en.json`

### WhatsApp Numarası

`src/components/WhatsAppButton.js` dosyasında telefon numarasını güncelleyin:

```javascript
const phoneNumber = '905XXXXXXXXX'; // Gerçek numara ile değiştirin
```

### İletişim Bilgileri

`src/i18n/tr.json` ve `src/i18n/en.json` dosyalarında `contact.info` bölümünü güncelleyin.

## Prodüksiyon

Prodüksiyon için derleme:

```bash
npm run build
```

Derlenen dosyalar `build/` klasöründe oluşturulacaktır.

## Teknolojiler

- [React.js](https://reactjs.org/) - UI Framework
- [React Router](https://reactrouter.com/) - Sayfa Yönlendirme
- [Material-UI (MUI)](https://mui.com/) - Component Library
- [Framer Motion](https://www.framer.com/motion/) - Animasyonlar
- [React Slick](https://react-slick.neostack.com/) - Carousel/Slider
- [i18next](https://www.i18next.com/) - Çok dilli destek

## Lisans

Bu proje MİRAN İLETİŞİM LOJİSTİK için geliştirilmiştir.

---

**MİRAN İLETİŞİM LOJİSTİK TURİZM YÖNETİM DANIŞMANLIĞI SAN. VE TİC. LTD. ŞTİ.**
Kızıltepe Ticaret ve Sanayi Odası Üyesi - 2022
