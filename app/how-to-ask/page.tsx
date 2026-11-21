import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cara bertanya yang baik",
  description:
    "Panduan praktis menyusun pertanyaan teknis agar cepat dipahami dan mudah dijawab, diadaptasi dari Stack Overflow.",
};

export default function HowToAskPage() {
  return (
    <div className="flex flex-1 flex-col justify-between">
      <main className="w-full max-w-[680px] space-y-6 text-[15px] leading-[1.8] text-zinc-800 dark:text-zinc-200 sm:text-[16px]">
        <header className="space-y-4 border-b border-zinc-200 pb-6 dark:border-zinc-800">
          <h1 className="text-2xl font-bold leading-tight tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-3xl">
            Cara bertanya yang baik
          </h1>
          <nav
            aria-label="Daftar isi"
            className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-zinc-500 dark:text-zinc-400 md:hidden"
          >
            <a
              href="#cari-dulu"
              className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
            >
              #cari-dulu
            </a>
            <a
              href="#judul-spesifik"
              className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
            >
              #judul-spesifik
            </a>
            <a
              href="#jelaskan-masalah"
              className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
            >
              #jelaskan-masalah
            </a>
            <a
              href="#contoh-minimal"
              className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
            >
              #contoh-minimal
            </a>
            <a
              href="#baca-ulang"
              className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
            >
              #baca-ulang
            </a>
          </nav>
        </header>

        <p>
          Orang yang membaca pertanyaanmu biasanya ingin membantu, tapi mereka
          tidak melihat layar komputermu dan tidak tahu konteks proyekmu. Makin
          jelas kamu menuliskan masalahnya, makin cepat mereka bisa memberi
          jawaban yang berguna.
        </p>

        <section id="cari-dulu" className="scroll-mt-20 space-y-4 pt-2">
          <h2 className="text-lg font-bold text-zinc-950 dark:text-zinc-50 sm:text-xl">
            Cari dan riset dulu
          </h2>
          <p>
            Sebelum menulis pertanyaan baru, cari dulu apakah masalah yang sama
            pernah dibahas. Cek dokumentasi resmi, cari pesan error di mesin
            pencari, atau buka arsip forum karena sering kali jawabannya sudah
            ada.
          </p>
          <p>
            Kalau hasilnya tidak cocok dengan kondisimu, catat apa saja yang
            sudah kamu temukan dan kenapa solusi itu gagal. Dari situ orang lain
            tidak akan mengulang saran yang sudah kamu coba.
          </p>
        </section>

        <section id="judul-spesifik" className="scroll-mt-20 space-y-4 pt-2">
          <h2 className="text-lg font-bold text-zinc-950 dark:text-zinc-50 sm:text-xl">
            Tulis judul yang merangkum masalah spesifik
          </h2>
          <p>
            Orang membaca judul lebih dulu. Kalau judulnya kabur, pertanyaanmu
            kemungkinan besar dilewati. Bayangkan kamu sedang berbicara dengan
            rekan kerja yang sibuk dan cuma punya satu kalimat untuk menjelaskan
            masalahmu.
          </p>
          <div className="space-y-3 rounded-lg border border-zinc-200 bg-zinc-100/70 p-4 text-sm dark:border-zinc-800 dark:bg-zinc-900/50 sm:p-5 sm:text-[15px]">
            <p className="m-0 text-zinc-700 dark:text-zinc-300">
              Kurang jelas:{" "}
              <em className="text-zinc-950 dark:text-zinc-100">
                &quot;Tolong bantu error Next.js saya tidak jalan&quot;
              </em>
            </p>
            <p className="m-0 text-zinc-700 dark:text-zinc-300">
              Lebih jelas:{" "}
              <em className="text-zinc-950 dark:text-zinc-100">
                &quot;Kenapa fetch API ke backend Laravel dari Next.js kena
                error CORS di server produksi, padahal di localhost aman?&quot;
              </em>
            </p>
          </div>
          <p>
            Kalau bingung menentukan judul, tulis isi pertanyaannya dulu. Setelah
            detailnya tertulis, biasanya merangkum judul jadi jauh lebih mudah.
          </p>
        </section>

        <section id="jelaskan-masalah" className="scroll-mt-20 space-y-4 pt-2">
          <h2 className="text-lg font-bold text-zinc-950 dark:text-zinc-50 sm:text-xl">
            Jelaskan masalah sebelum melempar kode
          </h2>
          <p>
            Ceritakan singkat apa yang sedang kamu buat dan di mana macetnya.
            Tulis hasil yang kamu harapkan, lalu tunjukkan hasil yang
            benar-benar muncul.
          </p>
          <p>
            Sertakan juga versi bahasa, framework, library, atau sistem operasi
            yang kamu pakai kalau relevan. Salin pesan error atau stack trace
            secara utuh sebagai teks, jangan cuma dipotong atau diringkas
            sendiri.
          </p>
        </section>

        <section id="contoh-minimal" className="scroll-mt-20 space-y-4 pt-2">
          <h2 className="text-lg font-bold text-zinc-950 dark:text-zinc-50 sm:text-xl">
            Sertakan contoh minimal yang bisa dijalankan
          </h2>
          <p>
            Kalau masalahnya ada di kode, bantu orang lain mereproduksi bug itu
            di komputer mereka. Potong semua bagian proyek yang tidak relevan
            sampai tersisa contoh paling kecil yang masih memunculkan error yang
            sama.
          </p>
          <ul className="list-disc space-y-2 pl-5 text-zinc-700 dark:text-zinc-300">
            <li>
              Tulis kode sebagai teks di dalam blok kode yang rapi, jangan
              screenshot. Orang tidak bisa menyalin atau menjalankan gambar.
            </li>
            <li>
              Hindari menempelkan ratusan baris file mentah. Biasanya saat kamu
              memangkas kode menjadi contoh minimal, kamu malah menemukan sendiri
              sumber bug-nya.
            </li>
            <li>
              Sertakan contoh input dan output agar orang bisa langsung menguji
              perbaikannya.
            </li>
          </ul>
        </section>

        <section id="baca-ulang" className="scroll-mt-20 space-y-4 pt-2">
          <h2 className="text-lg font-bold text-zinc-950 dark:text-zinc-50 sm:text-xl">
            Baca ulang sebelum mengirim
          </h2>
          <p>
            Sebelum mengirim, baca ulang tulisanmu dari awal. Bayangkan kamu
            orang asing yang belum pernah melihat proyek ini: apakah infonya
            sudah cukup untuk mulai menebak masalahnya?
          </p>
          <p>
            Setelah terkirim, pantau kolom balasan. Kalau ada yang meminta
            klarifikasi, segera lengkapi. Saat masalahnya beres, tuliskan atau
            tandai solusinya supaya orang lain yang kena bug serupa ikut
            terbantu.
          </p>
        </section>

        <section className="space-y-2 pt-2 text-sm text-zinc-600 dark:text-zinc-400 sm:text-[15px]">
          <p>
            Baca juga:{" "}
            <Link
              href="/"
              className="text-sky-700 underline decoration-sky-700/40 underline-offset-4 transition-colors hover:text-sky-900 hover:decoration-sky-900 dark:text-sky-400 dark:decoration-sky-400/40 dark:hover:text-sky-300"
            >
              Jangan tanya untuk bertanya
            </Link>
            ,{" "}
            <Link
              href="/xy-problem"
              className="text-sky-700 underline decoration-sky-700/40 underline-offset-4 transition-colors hover:text-sky-900 hover:decoration-sky-900 dark:text-sky-400 dark:decoration-sky-400/40 dark:hover:text-sky-300"
            >
              Masalah XY
            </Link>
            ,{" "}
            <Link
              href="/no-hello"
              className="text-sky-700 underline decoration-sky-700/40 underline-offset-4 transition-colors hover:text-sky-900 hover:decoration-sky-900 dark:text-sky-400 dark:decoration-sky-400/40 dark:hover:text-sky-300"
            >
              No Hello
            </Link>
            ,{" "}
            <Link
              href="/smart-questions"
              className="text-sky-700 underline decoration-sky-700/40 underline-offset-4 transition-colors hover:text-sky-900 hover:decoration-sky-900 dark:text-sky-400 dark:decoration-sky-400/40 dark:hover:text-sky-300"
            >
              Bertanya dengan cara cerdas
            </Link>
            .
          </p>
        </section>
      </main>

      <footer className="mt-14 w-full max-w-[680px] border-t border-zinc-200 pt-5 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
        Diadaptasi dari panduan{" "}
        <a
          href="https://stackoverflow.com/help/how-to-ask"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-zinc-800 dark:hover:text-zinc-300"
        >
          Stack Overflow: How do I ask a good question?
        </a>
      </footer>
    </div>
  );
}
