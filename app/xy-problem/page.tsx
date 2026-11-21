import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Masalah XY (The XY Problem)",
  description:
    "Menanyakan cara menjalankan solusi tebakanmu (Y) tanpa menjelaskan masalah aslinya (X) membuang waktu semua orang.",
};

export default function XYProblemPage() {
  return (
    <div className="flex flex-1 flex-col justify-between">
      <main className="w-full max-w-[680px] space-y-6 text-[15px] leading-[1.8] text-zinc-800 dark:text-zinc-200 sm:text-[16px]">
        <header className="space-y-4 border-b border-zinc-200 pb-6 dark:border-zinc-800">
          <h1 className="text-2xl font-bold leading-tight tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-3xl">
            Masalah XY
          </h1>
          <nav
            aria-label="Daftar isi"
            className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-zinc-500 dark:text-zinc-400 md:hidden"
          >
            <a
              href="#apa-itu"
              className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
            >
              #apa-itu
            </a>
            <a
              href="#cara-menghindari"
              className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
            >
              #cara-menghindari
            </a>
            <a
              href="#contoh-1"
              className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
            >
              #contoh-1
            </a>
            <a
              href="#contoh-2"
              className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
            >
              #contoh-2
            </a>
          </nav>
        </header>

        <section id="apa-itu" className="scroll-mt-20 space-y-4">
          <h2 className="text-lg font-bold text-zinc-950 dark:text-zinc-50 sm:text-xl">
            Apa itu Masalah XY?
          </h2>
          <p>
            Masalah XY terjadi saat kamu menanyakan cara menjalankan solusi
            tebakanmu sendiri, sementara masalah utamanya tidak dijelaskan.
            Waktu dan tenaga pun terbuang percuma, baik bagi yang bertanya
            maupun yang mencoba membantu.
          </p>
          <ol className="list-decimal space-y-2 pl-5 text-zinc-700 dark:text-zinc-300">
            <li>Seseorang ingin melakukan X.</li>
            <li>
              Karena tidak tahu caranya, ia menebak masalahnya bakal beres kalau
              bisa melakukan Y.
            </li>
            <li>Masalahnya, ia juga tidak tahu cara melakukan Y.</li>
            <li>Ia pun bertanya di grup soal Y.</li>
            <li>
              Orang lain mencoba membantu soal Y, tapi bingung karena permintaan
              itu terasa aneh.
            </li>
            <li>
              Setelah bolak-balik tanya jawab yang panjang, baru ketahuan tujuan
              aslinya adalah X, dan Y sama sekali tidak cocok untuk
              menyelesaikannya.
            </li>
          </ol>
          <p>
            Situasi ini muncul ketika seseorang telanjur terpaku pada solusi
            tebakannya sendiri, sampai lupa mundur selangkah untuk menjelaskan
            masalah utamanya secara utuh.
          </p>
        </section>

        <section id="cara-menghindari" className="scroll-mt-20 space-y-4 pt-2">
          <h2 className="text-lg font-bold text-zinc-950 dark:text-zinc-50 sm:text-xl">
            Bagaimana cara menghindarinya?
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-zinc-700 dark:text-zinc-300">
            <li>
              Sertakan gambaran besar tujuanmu bersama solusi yang sedang kamu
              coba.
            </li>
            <li>
              Saat ada yang meminta informasi tambahan, langsung berikan
              detailnya.
            </li>
            <li>
              Kalau kamu sudah mencoret solusi tertentu, jelaskan alasannya
              supaya orang lain paham batasanmu.
            </li>
          </ul>
          <p>
            Kalau tebakan diagnosamu sudah pasti benar, kamu mungkin tidak perlu
            bertanya dari awal.
          </p>
        </section>

        <section id="contoh-1" className="scroll-mt-20 space-y-4 pt-2">
          <h2 className="text-lg font-bold text-zinc-950 dark:text-zinc-50 sm:text-xl">
            Contoh 1: validasi ekstensi file upload
          </h2>
          <p>
            Raka sebenarnya ingin mengecek ekstensi file foto yang di-upload
            pengguna, jadi tidak perlu bertanya soal tiga huruf terakhir dari
            nama file.
          </p>
          <div className="space-y-2 rounded-md border border-zinc-200 bg-white p-4 text-xs leading-relaxed shadow-xs dark:border-zinc-800 dark:bg-zinc-900/70 sm:text-sm">
            <p className="m-0">
              <span className="font-semibold text-rose-600 dark:text-rose-400">
                &lt;raka&gt;
              </span>{" "}
              Gimana cara ambil 3 huruf terakhir dari nama file di JavaScript?
            </p>
            <p className="m-0">
              <span className="font-semibold text-sky-700 dark:text-sky-400">
                &lt;dimas&gt;
              </span>{" "}
              Pakai <code>namaFile.slice(-3)</code>
            </p>
            <p className="m-0">
              <span className="font-semibold text-sky-700 dark:text-sky-400">
                &lt;dimas&gt;
              </span>{" "}
              Tapi kenapa harus 3 huruf? Kamu sebenarnya mau ngapain?
            </p>
            <p className="m-0">
              <span className="font-semibold text-sky-700 dark:text-sky-400">
                &lt;dimas&gt;
              </span>{" "}
              Mau cek ekstensi file upload?
            </p>
            <p className="m-0">
              <span className="font-semibold text-rose-600 dark:text-rose-400">
                &lt;raka&gt;
              </span>{" "}
              Iya, buat validasi upload foto KTP.
            </p>
            <p className="m-0">
              <span className="font-semibold text-sky-700 dark:text-sky-400">
                &lt;dimas&gt;
              </span>{" "}
              Foto bisa berekstensi .jpeg atau .webp (4 huruf), jadi memotong 3
              huruf terakhir begitu saja bakal sering meleset.
            </p>
            <p className="m-0">
              <span className="font-semibold text-sky-700 dark:text-sky-400">
                &lt;dimas&gt;
              </span>{" "}
              Pakai <code>path.extname(namaFile)</code> di Node.js atau langsung
              cek <code>file.type</code> (MIME type) dari input file-nya.
            </p>
          </div>
        </section>

        <section id="contoh-2" className="scroll-mt-20 space-y-4 pt-2">
          <h2 className="text-lg font-bold text-zinc-950 dark:text-zinc-50 sm:text-xl">
            Contoh 2: error permission saat upload di VPS
          </h2>
          <p>
            Kalau saja Dina dari awal bilang fitur upload bukti bayarnya kena
            error permission di VPS, obrolan ini tidak perlu memutar lewat
            perintah yang berisiko.
          </p>
          <div className="space-y-2.5 rounded-md border border-zinc-200 border-l-4 border-l-zinc-400 bg-white p-4 text-xs leading-relaxed shadow-xs dark:border-zinc-800 dark:border-l-zinc-600 dark:bg-zinc-900/70 sm:text-sm">
            <p className="m-0">
              <span className="font-semibold text-rose-600 dark:text-rose-400">
                Dina:
              </span>{" "}
              Gimana cara jalankan <code>chmod -R 777 /var/www/app</code> biar
              semua folder bisa ditulis tanpa kena Permission denied?
            </p>
            <p className="m-0">
              <span className="font-semibold text-sky-700 dark:text-sky-400">
                Fajar:
              </span>{" "}
              Jangan pakai <code>chmod 777</code> di server produksi, itu
              membuka akses tulis ke semua user dan bikin server rentan.
            </p>
            <p className="m-0">
              <span className="font-semibold text-rose-600 dark:text-rose-400">
                Dina:
              </span>{" "}
              Tapi saya sudah coba <code>chmod 755</code> tetap saja error saat
              aplikasi menulis file.
            </p>
            <p className="m-0">
              <span className="font-semibold text-sky-700 dark:text-sky-400">
                Fajar:
              </span>{" "}
              Memangnya kamu lagi mau bikin apa? File apa yang mau ditulis?
            </p>
            <p className="m-0">
              <span className="font-semibold text-rose-600 dark:text-rose-400">
                Dina:
              </span>{" "}
              Upload bukti transfer di Laravel ke folder <code>storage</code>{" "}
              selalu gagal setelah deploy ke VPS Ubuntu.
            </p>
            <p className="m-0">
              <span className="font-semibold text-sky-700 dark:text-sky-400">
                Fajar:
              </span>{" "}
              Kalau begitu cukup ubah pemilik folder storage ke user web server
              Nginx pakai <code>chown -R www-data:www-data storage</code>, tidak
              perlu buka 777 ke seluruh proyek.
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
        Diadaptasi dari{" "}
        <a
          href="https://xyproblem.info/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-zinc-800 dark:hover:text-zinc-300"
        >
          xyproblem.info
        </a>{" "}
        &middot; Sumber asli:{" "}
        <a
          href="https://meta.stackoverflow.com/questions/66377/what-is-the-xy-problem"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-zinc-800 dark:hover:text-zinc-300"
        >
          Meta Stack Overflow
        </a>{" "}
        &middot;{" "}
        <a
          href="https://mywiki.wooledge.org/XyProblem"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-zinc-800 dark:hover:text-zinc-300"
        >
          Greg&apos;s Wiki
        </a>
      </footer>
    </div>
  );
}
