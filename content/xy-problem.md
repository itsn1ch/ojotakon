---
title: "Masalah XY"
navTitle: "Masalah XY"
description: "Menanyakan cara menjalankan solusi tebakanmu (Y) tanpa menjelaskan masalah aslinya (X) membuang waktu semua orang."
slug: "xy-problem"
order: 2
sources:
  - label: "xyproblem.info"
    url: "https://xyproblem.info/"
  - label: "Meta Stack Overflow"
    url: "https://meta.stackoverflow.com/questions/66377/what-is-the-xy-problem"
  - label: "Greg's Wiki"
    url: "https://mywiki.wooledge.org/XyProblem"
---

## Apa itu Masalah XY?

Masalah XY terjadi saat kamu menanyakan cara menjalankan solusi tebakanmu sendiri, sementara masalah utamanya tidak dijelaskan. Waktu dan tenaga pun terbuang percuma, baik bagi yang bertanya maupun yang mencoba membantu.

1. Seseorang ingin melakukan X.
2. Karena tidak tahu caranya, ia menebak masalahnya bakal beres kalau bisa melakukan Y.
3. Masalahnya, ia juga tidak tahu cara melakukan Y.
4. Ia pun bertanya di grup soal Y.
5. Orang lain mencoba membantu soal Y, tapi bingung karena permintaan itu terasa aneh.
6. Setelah bolak-balik tanya jawab yang panjang, baru ketahuan tujuan aslinya adalah X, dan Y sama sekali tidak cocok untuk menyelesaikannya.

Situasi ini muncul ketika seseorang telanjur terpaku pada solusi tebakannya sendiri, sampai lupa mundur selangkah untuk menjelaskan masalah utamanya secara utuh.

## Bagaimana cara menghindarinya?

- Sertakan gambaran besar tujuanmu bersama solusi yang sedang kamu coba.
- Saat ada yang meminta informasi tambahan, langsung berikan detailnya.
- Kalau kamu sudah mencoret solusi tertentu, jelaskan alasannya supaya orang lain paham batasanmu.

Kalau tebakan diagnosamu sudah pasti benar, kamu mungkin tidak perlu bertanya dari awal.

## Contoh 1: validasi ekstensi file upload

Raka sebenarnya ingin mengecek ekstensi file foto yang di-upload pengguna, jadi tidak perlu bertanya soal tiga huruf terakhir dari nama file.

> `<raka>` Gimana cara ambil 3 huruf terakhir dari nama file di JavaScript?
>
> `<dimas>` Pakai `namaFile.slice(-3)`
>
> `<dimas>` Tapi kenapa harus 3 huruf? Kamu sebenarnya mau ngapain?
>
> `<dimas>` Mau cek ekstensi file upload?
>
> `<raka>` Iya, buat validasi upload foto KTP.
>
> `<dimas>` Foto bisa berekstensi `.jpeg` atau `.webp` (4 huruf), jadi memotong 3 huruf terakhir begitu saja bakal sering meleset.
>
> `<dimas>` Pakai `path.extname(namaFile)` di Node.js atau langsung cek `file.type` (MIME type) dari input file-nya.

## Contoh 2: error permission saat upload di VPS

Kalau saja Dina dari awal bilang fitur upload bukti bayarnya kena error permission di VPS, obrolan ini tidak perlu memutar lewat perintah yang berisiko.

> **Dina:** Gimana cara jalankan `chmod -R 777 /var/www/app` biar semua folder bisa ditulis tanpa kena Permission denied?
>
> **Fajar:** Jangan pakai `chmod 777` di server produksi, itu membuka akses tulis ke semua user dan bikin server rentan.
>
> **Dina:** Tapi saya sudah coba `chmod 755` tetap saja error saat aplikasi menulis file.
>
> **Fajar:** Memangnya kamu lagi mau bikin apa? File apa yang mau ditulis?
>
> **Dina:** Upload bukti transfer di Laravel ke folder `storage` selalu gagal setelah deploy ke VPS Ubuntu.
>
> **Fajar:** Kalau begitu cukup ubah pemilik folder storage ke user web server Nginx pakai `chown -R www-data:www-data storage`, tidak perlu buka 777 ke seluruh proyek.

Baca juga: [Jangan tanya untuk bertanya](/), [No Hello](/no-hello), [Cara bertanya yang baik](/how-to-ask), [Bertanya dengan cara cerdas](/smart-questions).
