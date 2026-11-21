import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bertanya dengan cara cerdas",
  description:
    "Ringkasan berbahasa Indonesia dari esai klasik Eric S. Raymond dan Rick Moen tentang cara mengajukan pertanyaan teknis yang cerdas.",
};

export default function SmartQuestionsPage() {
  return (
    <div className="flex flex-1 flex-col justify-between">
      <main className="w-full max-w-[680px] space-y-6 text-[15px] leading-[1.8] text-zinc-800 dark:text-zinc-200 sm:text-[16px]">
        <header className="space-y-4 border-b border-zinc-200 pb-6 dark:border-zinc-800">
          <h1 className="text-2xl font-bold leading-tight tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-3xl">
            Bertanya dengan cara cerdas
          </h1>
          <nav
            aria-label="Daftar isi"
            className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-zinc-500 dark:text-zinc-400 md:hidden"
          >
            <a
              href="#pengantar"
              className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
            >
              #pengantar
            </a>
            <a
              href="#sebelum-bertanya"
              className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
            >
              #sebelum-bertanya
            </a>
            <a
              href="#saat-bertanya"
              className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
            >
              #saat-bertanya
            </a>
            <a
              href="#menanggapi"
              className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
            >
              #menanggapi
            </a>
            <a
              href="#hindari"
              className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
            >
              #hindari
            </a>
          </nav>
        </header>

        <section id="pengantar" className="scroll-mt-20 space-y-4">
          <h2 className="text-lg font-bold text-zinc-950 dark:text-zinc-50 sm:text-xl">
            Pengantar
          </h2>
          <p>
            Di komunitas teknis dan open source, kualitas jawaban yang kamu
            terima sangat bergantung pada cara kamu mengajukan pertanyaan. Para
            maintainer dan developer berpengalaman menjawab di waktu luang
            mereka secara sukarela. Mereka senang membantu orang yang mau
            berpikir dan menunjukkan usaha, tapi cepat kehilangan minat pada
            pertanyaan yang malas atau menuntut.
          </p>
          <p>
            Tunjukkan kalau kamu sudah mencoba mencari solusinya sendiri dan
            siap berdiskusi untuk menyelesaikannya.
          </p>
        </section>

        <section id="sebelum-bertanya" className="scroll-mt-20 space-y-4 pt-2">
          <h2 className="text-lg font-bold text-zinc-950 dark:text-zinc-50 sm:text-xl">
            Sebelum kamu bertanya
          </h2>
          <p>
            Sebelum mengirim pertanyaan ke forum, Discord, milis, atau issue
            GitHub, lakukan langkah dasar ini lebih dulu:
          </p>
          <ol className="list-decimal space-y-2 pl-5 text-zinc-700 dark:text-zinc-300">
            <li>Cek arsip forum atau riwayat chat grup.</li>
            <li>Cari pesan error yang persis muncul di mesin pencari.</li>
            <li>Baca manual, dokumentasi resmi, atau halaman FAQ.</li>
            <li>Coba isolasi masalah lewat eksperimen kecil.</li>
            <li>
              Kalau kamu programmer dan kodenya terbuka, baca langsung source
              code bagian yang bermasalah.
            </li>
          </ol>
          <p>
            Saat akhirnya kamu bertanya, sebutkan singkat apa saja yang sudah
            kamu cek dari daftar di atas. Itu memberi konteks yang jelas dan
            menunjukkan bahwa kamu tidak sekadar melempar pekerjaan ke orang
            lain.
          </p>
        </section>

        <section id="saat-bertanya" className="scroll-mt-20 space-y-4 pt-2">
          <h2 className="text-lg font-bold text-zinc-950 dark:text-zinc-50 sm:text-xl">
            Saat mengajukan pertanyaan
          </h2>
          <p>
            Pilih tempat yang tepat. Tanyakan soal konfigurasi framework web di
            forum framework itu sendiri, jangan di grup diskusi umum.
          </p>
          <ul className="list-disc space-y-2.5 pl-5 text-zinc-700 dark:text-zinc-300">
            <li>
              Tulis subjek atau pembuka yang jelas. Pola yang efektif biasanya
              menyebutkan objek lalu penyimpangannya, misalnya &quot;MySQL di
              Laragon gagal start dengan pesan Port 3306 already in use setelah
              update Windows&quot;.
            </li>
            <li>
              Ceritakan gejala yang benar-benar muncul di layar. Kalau kamu
              punya dugaan penyebabnya, tulis terpisah di bawahnya.
            </li>
            <li>
              Uraikan urutan kejadian secara kronologis, terutama perubahan
              terakhir sebelum error mulai muncul.
            </li>
            <li>
              Sebutkan tujuan akhir yang ingin kamu capai di samping langkah
              yang sedang macet, supaya tidak terjebak dalam{" "}
              <Link
                href="/xy-problem"
                className="text-sky-700 underline decoration-sky-700/40 underline-offset-4 hover:text-sky-900 dark:text-sky-400 dark:hover:text-sky-300"
              >
                Masalah XY
              </Link>
              .
            </li>
            <li>
              Jangan menandai pesan dengan &quot;URGENT&quot; atau
              &quot;PENTING&quot;. Relawan di forum tidak terikat tenggat
              waktumu, dan label seperti itu justru sering membuat pertanyaanmu
              dilewati.
            </li>
            <li>
              Biarkan diskusi tetap di ruang publik, tidak perlu meminta orang
              membalas lewat DM atau email. Jawaban di forum terbuka berguna
              juga buat orang lain yang nanti kena masalah serupa.
            </li>
          </ul>
        </section>

        <section id="menanggapi" className="scroll-mt-20 space-y-4 pt-2">
          <h2 className="text-lg font-bold text-zinc-950 dark:text-zinc-50 sm:text-xl">
            Menanggapi jawaban
          </h2>
          <p>
            Kadang seseorang menjawab singkat dengan tautan dokumentasi, istilah
            &quot;RTFM&quot;, atau kata kunci pencarian. Jangan langsung
            tersinggung. Di komunitas teknis, jawaban singkat seperti itu sering
            kali memang cara tercepat mengarahkanmu ke sumber yang tepat.
          </p>
          <p>
            Kalau ada bagian jawaban yang belum kamu pahami, coba cari tahu dulu
            istilahnya sebelum membalas. Saat kamu bertanya balik, tunjukkan
            bagian mana yang sudah kamu mengerti dan bagian mana yang masih
            buntu.
          </p>
          <p>
            Ketika masalahmu akhirnya selesai, sempatkan menulis balasan singkat
            yang menjelaskan solusi apa yang berhasil. Orang yang tadi membantu
            akan tahu upayanya berguna, dan orang lain yang menemukan thread itu
            lewat Google nanti bisa langsung memakainya.
          </p>
        </section>

        <section id="hindari" className="scroll-mt-20 space-y-4 pt-2">
          <h2 className="text-lg font-bold text-zinc-950 dark:text-zinc-50 sm:text-xl">
            Pertanyaan yang sebaiknya dihindari
          </h2>
          <div className="space-y-3 rounded-lg border border-zinc-200 bg-zinc-100/70 p-4 text-sm dark:border-zinc-800 dark:bg-zinc-900/50 sm:p-5 sm:text-[15px]">
            <p className="m-0 text-zinc-700 dark:text-zinc-300">
              <em className="text-zinc-950 dark:text-zinc-100">
                &quot;Kode saya tidak jalan, tolong perbaiki.&quot;
              </em>{" "}
              Tanpa pesan error, hasil yang diharapkan, dan potongan kode yang
              relevan, tidak ada yang bisa menebak apa yang salah.
            </p>
            <p className="m-0 text-zinc-700 dark:text-zinc-300">
              <em className="text-zinc-950 dark:text-zinc-100">
                &quot;Tolong kerjakan soal tugas kuliah saya ini.&quot;
              </em>{" "}
              Kamu boleh bertanya saat macet di satu konsep, tapi tunjukkan dulu
              kode atau percobaan yang sudah kamu buat.
            </p>
            <p className="m-0 text-zinc-700 dark:text-zinc-300">
              <em className="text-zinc-950 dark:text-zinc-100">
                &quot;Gimana cara bikin aplikasi seperti Tokopedia?&quot;
              </em>{" "}
              Pertanyaan seluas ini butuh satu buku untuk dijawab. Pecah dulu
              jadi pertanyaan kecil tentang satu bagian yang sedang kamu
              kerjakan.
            </p>
          </div>
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
              href="/how-to-ask"
              className="text-sky-700 underline decoration-sky-700/40 underline-offset-4 transition-colors hover:text-sky-900 hover:decoration-sky-900 dark:text-sky-400 dark:decoration-sky-400/40 dark:hover:text-sky-300"
            >
              Cara bertanya yang baik
            </Link>
            .
          </p>
        </section>
      </main>

      <footer className="mt-14 w-full max-w-[680px] border-t border-zinc-200 pt-5 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
        Diadaptasi dari esai Eric S. Raymond &amp; Rick Moen:{" "}
        <a
          href="http://catb.org/~esr/faqs/smart-questions.html"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-zinc-800 dark:hover:text-zinc-300"
        >
          How To Ask Questions The Smart Way
        </a>
      </footer>
    </div>
  );
}
