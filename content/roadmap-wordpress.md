---
title: "Roadmap belajar WordPress"
navTitle: "Roadmap WordPress"
description: "Urutan belajar WordPress langsung dari hosting cPanel sampai bisa bikin theme, plugin, toko online, dan optimasi produksi."
slug: "roadmap-wordpress"
group: "Khusus Tegar"
order: 6
sources:
  - label: "WordPress Developer Resources"
    url: "https://developer.wordpress.org/"
  - label: "Learn WordPress"
    url: "https://learn.wordpress.org/"
---

WordPress dipakai di banyak situs, mulai dari blog pribadi, profil perusahaan, sampai toko online. Supaya belajarnya tidak lompat-lompat, ikuti urutan di bawah ini mulai dari instalasi di hosting cPanel sampai pengembangan kustom.

## Pahami dulu WordPress.org vs WordPress.com

Sebelum mulai, pastikan kamu tahu bedanya dua alamat ini:

- `WordPress.org` adalah software open source yang dipasang di hosting cPanel atau VPS sendiri. Kamu bebas memasang theme, plugin, dan mengubah kode sesuka hati.
- `WordPress.com` adalah layanan hosting berbayar yang mengelola WordPress untukmu. Paket gratisnya cukup terbatas kalau kamu ingin belajar kustomisasi kode atau pasang plugin sendiri.

Untuk belajar serius di hosting cPanel maupun mengerjakan proyek klien, pakai `WordPress.org`.

## Tahap 1: install WordPress di hosting cPanel dan dasar dashboard

Kalau kamu sudah punya domain dan shared hosting cPanel, kamu bisa langsung memasang WordPress dalam hitungan menit.

- Masuk ke cPanel, lalu buka menu `Softaculous Apps Installer` atau `WordPress Manager by Softaculous`.
- Pilih protokol `https://`, tentukan domain (atau subdomain khusus latihan, misalnya `belajar.domainkamu.com`), kosongkan kolom `In Directory` jika ingin dipasang langsung di alamat utama, lalu buat username dan password admin yang kuat.
- Pastikan sertifikat SSL aktif di menu `SSL/TLS Status` (AutoSSL) supaya situs bisa dibuka lewat `https://` tanpa peringatan browser.
- Setelah masuk ke `/wp-admin`, pelajari menu inti dashboard: perbedaan `Post` dan `Page`, pengaturan `Category` dan `Tag`, unggah `Media`, menyusun `Menu`, serta mengatur struktur URL di `Settings > Permalinks` (pilih `Post name`).

[Cara Install WordPress di cPanel dengan Softaculous (WebsiteZonia, 4 menit)](https://www.youtube.com/watch?v=Z8vcbXumGis)

[Cara Install WordPress di Hosting cPanel untuk Pemula (Alfian, 7 menit)](https://www.youtube.com/watch?v=m1b4me17Tcc)

[Tutorial Membuat Website WordPress untuk Pemula (Yoko Bomb, 42 menit)](https://www.youtube.com/watch?v=rmAgpHNnNy8)

## Tahap 2: theme, block theme, dan plugin

Setelah nyaman dengan dashboard, pelajari cara mengatur tampilan dan menambah fitur tanpa perlu menulis kode dari nol.

- Pahami beda Classic Theme (berbasis file PHP dan Customizer) dengan Block Theme (berbasis Full Site Editing dan file `theme.json`).
- Pelajari cara memilih plugin yang sehat: cek kapan terakhir diperbarui, kecocokan dengan versi WordPress terbaru, jumlah instalasi aktif, dan ulasan penggunanya.
- Kenali kategori plugin yang paling sering dipakai di proyek nyata: SEO, form kontak, caching, keamanan, dan backup. Hindari memasang terlalu banyak plugin untuk hal kecil yang sebenarnya bisa selesai dengan beberapa baris CSS atau kode singkat.

[Tutorial WordPress untuk Pemula, Kursus Gratis (Metics Media Indonesia, 1 jam 31 menit)](https://www.youtube.com/watch?v=I9uu4ZNLRI8)

[Memulai dengan Blok Gutenberg Langkah demi Langkah (Riad Mahmud, 31 menit)](https://www.youtube.com/watch?v=ZcrLNtINsu8)

## Tahap 3: fondasi web dan PHP untuk WordPress

Kalau targetmu adalah menjadi WordPress Developer (bisa membuat fitur dan tampilan kustom), kamu perlu memahami fondasi di balik layarnya:

1. HTML, CSS (termasuk Flexbox dan Grid), dan JavaScript dasar.
2. PHP dasar: variabel, array, fungsi, percabangan, perulangan, dan dasar OOP.
3. MySQL dasar (bisa langsung dicek lewat `phpMyAdmin` di cPanel) untuk memahami tabel inti WordPress seperti `wp_posts`, `wp_postmeta`, `wp_options`, dan `wp_users`.
4. Konsep inti WordPress: `Template Hierarchy`, `The Loop`, `functions.php`, serta sistem Hooks (`add_action` dan `add_filter`).
5. Cara mendaftarkan `Custom Post Type` dan `Custom Taxonomy` untuk data di luar artikel blog biasa (misalnya portofolio, produk, atau jadwal acara).

[Belajar Web dengan PHP dan Database dari Nol (Dea Afrizal, 1 jam 19 menit)](https://www.youtube.com/watch?v=Ak6VTSekGP4)

[Belajar PHP untuk Pemula (Web Programming UNPAS, 35 menit)](https://www.youtube.com/watch?v=9gpAJPWD-xI)

## Tahap 4: bikin theme dan plugin sendiri

Di tahap ini kamu mulai menulis kode sendiri dengan struktur yang rapi dan aman saat WordPress diperbarui.

- Mulai dari membuat `Child Theme` sebelum membuat theme dari nol. Dengan Child Theme, modifikasi tidak hilang saat theme utama mendapat update.
- Coba bangun satu Block Theme sederhana dengan `theme.json` atau Classic Theme minimal yang memakai `header.php`, `footer.php`, `index.php`, dan `single.php`.
- Latihan membuat plugin kecil, misalnya shortcode kustom, widget, atau endpoint tambahan lewat `WP REST API`.
- Pelajari tiga aturan wajib keamanan WordPress: verifikasi permintaan dengan `nonce`, bersihkan data masuk dengan fungsi sanitasi (`sanitize_text_field`, `absint`), dan amankan data keluar dengan fungsi escaping (`esc_html`, `esc_url`, `esc_attr`).

[Membuat Theme WordPress dari Awal (Bogor Cyber, 16 menit)](https://www.youtube.com/watch?v=8qt2i8WahdU)

[Bikin Plugin Form Kontak WordPress dari Nol (Web Programming UNPAS, 33 menit)](https://www.youtube.com/watch?v=Bm35IYpST1I)

## Tahap 5: WooCommerce dan proyek nyata

Di Indonesia, permintaan proyek WordPress paling banyak datang dari website company profile dan toko online.

- Pelajari alur dasar `WooCommerce`: produk simpel dan variasi, stok, kupon, pajak, serta manajemen status pesanan.
- Coba integrasikan plugin ongkir lokal (seperti RajaOngkir atau Biteship) dan payment gateway lokal (seperti Midtrans atau Xendit) di mode sandbox.
- Pelajari cara menimpa template WooCommerce lewat folder theme tanpa mengedit file inti plugin.

[Cara Membuat Toko Online dengan WooCommerce Lengkap (Yoko Bomb, 54 menit)](https://www.youtube.com/watch?v=teL41zp38_E)

[Tutorial WooCommerce untuk Pemula (Charlie Chang Indonesia, 16 menit)](https://www.youtube.com/watch?v=42YQRPY40B4)

## Tahap 6: manajemen cPanel, performa, dan keamanan

Proyek baru benar-benar selesai saat situs stabil, cepat diakses, dan rutin dicadangkan.

- Pelajari menu penting di cPanel untuk maintenance harian: `File Manager`, `phpMyAdmin`, `Select PHP Version` (pakai PHP 8.2/8.3 terbaru yang stabil), serta `Backup Wizard` atau `JetBackup`.
- Aktifkan kompresi gambar (WebP) dan page caching (misalnya LiteSpeed Cache jika hosting cPanel memakai LiteSpeed) supaya waktu muat halaman tetap ringan di jaringan seluler.
- Jadwalkan backup otomatis ke penyimpanan terpisah, rutin perbarui core, theme, dan plugin, serta matikan editor file di dashboard (`DISALLOW_FILE_EDIT`) lewat `wp-config.php`.

[Cara Deploy WordPress.org Localhost ke Hosting cPanel (Kahfie IDN, 11 menit)](https://www.youtube.com/watch?v=sSeew0GfPvE)

[Cara Upload WordPress ke Hosting dari Localhost (Hostinger ID, 14 menit)](https://www.youtube.com/watch?v=dkH1XSGY2P0)

Kalau di tengah jalan kamu mentok dan ingin bertanya di grup komunitas WordPress, baca juga panduan [Jangan tanya untuk bertanya](/), [Masalah XY](/xy-problem), dan [Cara bertanya yang baik](/how-to-ask).
