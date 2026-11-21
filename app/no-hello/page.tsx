import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "No Hello: jangan cuma menyapa di chat",
  description:
    'Bayangkan menelepon seseorang, bilang "halo!", lalu menyuruhnya menunggu. Di chat, langsung saja sapa sekaligus tulis maksudmu.',
};

export default function NoHelloPage() {
  return (
    <div className="flex flex-1 flex-col justify-between">
      <main className="w-full max-w-[680px] space-y-6 text-[15px] leading-[1.8] text-zinc-800 dark:text-zinc-200 sm:text-[16px]">
        <header className="space-y-4 border-b border-zinc-200 pb-6 dark:border-zinc-800">
          <h1 className="text-2xl font-bold leading-tight tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-3xl">
            No Hello: jangan cuma menyapa di chat
          </h1>
          <nav
            aria-label="Daftar isi"
            className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-zinc-500 dark:text-zinc-400 md:hidden"
          >
            <a
              href="#jangan-begini"
              className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
            >
              #jangan-begini
            </a>
            <a
              href="#lebih-baik"
              className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
            >
              #lebih-baik
            </a>
            <a
              href="#kenapa-penting"
              className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
            >
              #kenapa-penting
            </a>
          </nav>
        </header>

        <p>
          Bayangkan kamu menelepon seseorang, bilang <em>&quot;Halo!&quot;</em>,
          lalu langsung mendiamkannya sambil menunggu. Mengirim chat yang cuma
          berisi sapaan rasanya persis seperti itu.
        </p>

        <section id="jangan-begini" className="scroll-mt-20 space-y-4 pt-2">
          <h2 className="text-lg font-bold text-zinc-950 dark:text-zinc-50 sm:text-xl">
            Jangan lakukan ini
          </h2>
          <div className="space-y-2 rounded-md border border-zinc-200 border-l-4 border-l-rose-500 bg-white p-4 text-xs leading-relaxed shadow-xs dark:border-zinc-800 dark:border-l-rose-400 dark:bg-zinc-900/70 sm:text-sm">
            <p className="m-0">
              <span className="font-semibold text-rose-600 dark:text-rose-400">
                Andi
              </span>{" "}
              <span className="text-zinc-400 dark:text-zinc-500">14:15</span>{" "}
              Halo mas
            </p>
            <p className="m-0">
              <span className="font-semibold text-sky-700 dark:text-sky-400">
                Raka
              </span>{" "}
              <span className="text-zinc-400 dark:text-zinc-500">14:19</span>{" "}
              Iya, kenapa?
            </p>
            <p className="m-0">
              <span className="font-semibold text-rose-600 dark:text-rose-400">
                Andi
              </span>{" "}
              <span className="text-zinc-400 dark:text-zinc-500">14:20</span>{" "}
              Jadwal deploy ke staging tadi jam berapa ya?
            </p>
            <p className="m-0">
              <span className="font-semibold text-sky-700 dark:text-sky-400">
                Raka
              </span>{" "}
              <span className="text-zinc-400 dark:text-zinc-500">14:20</span>{" "}
              Jam 15.30
            </p>
          </div>
          <p>
            Andi sebenarnya bisa dapat jawaban jauh lebih cepat tanpa membuat
            Raka berhenti bekerja dan menunggu ia selesai mengetik pertanyaan
            aslinya.
          </p>
          <p>
            Pesan pembuka lain yang efeknya sama persis antara lain
            &quot;P&quot;, &quot;Mas&quot;, &quot;Permisi&quot;, &quot;Lagi
            sibuk?&quot;, atau &quot;Boleh tanya sebentar?&quot;. Semua itu
            memaksa lawan bicara menunda pekerjaannya hanya untuk menanyakan
            balik ada perlu apa.
          </p>
        </section>

        <section id="lebih-baik" className="scroll-mt-20 space-y-4 pt-2">
          <h2 className="text-lg font-bold text-zinc-950 dark:text-zinc-50 sm:text-xl">
            Coba cara ini
          </h2>
          <div className="space-y-2 rounded-md border border-zinc-200 border-l-4 border-l-emerald-500 bg-white p-4 text-xs leading-relaxed shadow-xs dark:border-zinc-800 dark:border-l-emerald-400 dark:bg-zinc-900/70 sm:text-sm">
            <p className="m-0">
              <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                Andi
              </span>{" "}
              <span className="text-zinc-400 dark:text-zinc-500">14:15</span>{" "}
              Halo mas, jadwal deploy ke staging hari ini jam berapa ya?
            </p>
            <p className="m-0">
              <span className="font-semibold text-sky-700 dark:text-sky-400">
                Raka
              </span>{" "}
              <span className="text-zinc-400 dark:text-zinc-500">14:16</span>{" "}
              Halo, jam 15.30 ya.
            </p>
          </div>
          <p>
            Kalau terasa terlalu kaku langsung menembak pertanyaan, kamu tetap
            bisa menambahkan basa-basi seperlunya di dalam satu pesan yang sama.
            Misalnya: &quot;Halo mas, semoga aman ya. Boleh titip cek PR
            refactor checkout kalau sudah sempat?&quot;
          </p>
        </section>

        <section id="kenapa-penting" className="scroll-mt-20 space-y-4 pt-2">
          <h2 className="text-lg font-bold text-zinc-950 dark:text-zinc-50 sm:text-xl">
            Kenapa cara ini lebih nyaman?
          </h2>
          <p>
            Chat bekerja secara asinkron. Saat kamu menulis sapaan dan
            pertanyaan sekaligus, lawan bicaramu bisa langsung menjawab begitu
            ia melihat notifikasi, bahkan kalau kamu sedang tidak di depan
            layar.
          </p>
          <p>
            Di sisi lain, kalau ia sedang fokus coding atau meeting, ia bisa
            melihat sekilas tingkat urgensinya tanpa harus memutus konsentrasi
            dua kali.
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
          href="https://nohello.net/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-zinc-800 dark:hover:text-zinc-300"
        >
          nohello.net
        </a>
      </footer>
    </div>
  );
}
