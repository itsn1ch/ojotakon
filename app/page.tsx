import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col justify-between">
      <main className="w-full max-w-[680px] space-y-6 text-[15px] leading-[1.8] text-zinc-800 dark:text-zinc-200 sm:text-[16px]">
        <header className="border-b border-zinc-200 pb-6 dark:border-zinc-800">
          <h1 className="text-2xl font-bold leading-tight tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-3xl">
            Jangan tanya untuk bertanya, langsung tanya saja
          </h1>
        </header>

        <p>
          Sesekali, di grup chat tempat saya biasa nongkrong, ada saja yang
          masuk lalu menulis:
        </p>

        <blockquote className="rounded-md border border-zinc-200 border-l-4 border-l-rose-500 bg-white px-4 py-3.5 text-sm leading-relaxed shadow-xs dark:border-zinc-800 dark:border-l-rose-400 dark:bg-zinc-900/70 sm:flex sm:items-baseline sm:gap-2.5 sm:text-[15px]">
          <span className="shrink-0 font-semibold text-rose-600 dark:text-rose-400">
            budi_dev:
          </span>
          <p className="m-0 text-zinc-900 dark:text-zinc-100">
            Ada suhu Laravel di sini?
          </p>
        </blockquote>

        <p>
          Kebiasaan ini kurang bagus karena beberapa alasan. Pertanyaan itu{" "}
          <em>sebenarnya</em> berbunyi begini:
        </p>

        <blockquote className="rounded-md border border-zinc-200 border-l-4 border-l-zinc-400 bg-white px-4 py-3.5 text-sm leading-relaxed shadow-xs dark:border-zinc-800 dark:border-l-zinc-600 dark:bg-zinc-900/70 sm:flex sm:items-baseline sm:gap-2.5 sm:text-[15px]">
          <span className="shrink-0 font-semibold text-zinc-500 dark:text-zinc-400">
            budi_dev:
          </span>
          <p className="m-0 text-zinc-800 dark:text-zinc-200">
            Ada suhu Laravel di sini yang mau turun tangan mengurus masalah
            saya, apa pun nanti bentuknya, bahkan kalau ternyata masalahnya cuma
            di query SQL atau file .env yang bisa dijawab orang yang tidak pakai
            Laravel sekalipun?
          </p>
        </blockquote>

        <p>
          Banyak alasan kenapa orang yang tahu jawabannya memilih diam. Dengan
          bertanya begitu, kamu meminta lebih banyak dari yang kamu kira.
        </p>

        <p>
          Kamu membebani orang lain dengan tanggung jawab sekaligus menguji rasa
          percaya diri mereka. Tanpa sadar, kamu juga menutup peluang dibantu
          orang lain. Saya sendiri sering menjawab pertanyaan soal framework
          atau bahasa pemrograman yang belum pernah saya pakai, karena
          jawabannya biasanya cukup logis buat sesama programmer.
        </p>

        <p>Atau, orang lain bisa membacanya begini:</p>

        <blockquote className="rounded-md border border-zinc-200 border-l-4 border-l-zinc-400 bg-white px-4 py-3.5 text-sm leading-relaxed shadow-xs dark:border-zinc-800 dark:border-l-zinc-600 dark:bg-zinc-900/70 sm:flex sm:items-baseline sm:gap-2.5 sm:text-[15px]">
          <span className="shrink-0 font-semibold text-zinc-500 dark:text-zinc-400">
            budi_dev:
          </span>
          <p className="m-0 text-zinc-800 dark:text-zinc-200">
            Saya punya pertanyaan soal Laravel, tapi malas menuliskannya sebelum
            yakin ada yang bisa jawab di sini.
          </p>
        </blockquote>

        <p>
          ...yang terkesan malas saja. Kalau kamu sendiri tidak mau repot
          menjelaskan masalahmu, kenapa orang lain harus repot membantu?
        </p>

        <p>
          Jadi, langsung tanyakan saja. Orang yang sedang santai dan sesekali
          melirik chat biasanya melewatkan pertanyaan &quot;boleh tanya
          enggak?&quot;, tapi detail masalahmu yang jelas sering kali bikin
          mereka tertarik buat menjawab.
        </p>

        <section className="space-y-3 rounded-lg border border-zinc-200 bg-zinc-100/70 p-4 text-sm dark:border-zinc-800 dark:bg-zinc-900/50 sm:p-5 sm:text-[15px]">
          <p className="m-0 text-zinc-700 dark:text-zinc-300">
            Singkatnya, jangan tanya{" "}
            <em className="text-zinc-950 dark:text-zinc-100">
              &quot;Ada suhu Laravel di sini?&quot;
            </em>
            .
          </p>
          <p className="m-0 text-zinc-700 dark:text-zinc-300">
            Langsung tanya:{" "}
            <em className="text-zinc-950 dark:text-zinc-100">
              &quot;Gimana cara mengatasi [masalah] di Laravel 12 dengan [pesan
              error dan konteks lainnya]?&quot;
            </em>
          </p>
        </section>

        <section className="space-y-2 pt-2 text-sm text-zinc-600 dark:text-zinc-400 sm:text-[15px]">
          <p>
            Masalah serupa:{" "}
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
            .
          </p>
          <p>
            Bacaan lanjut:{" "}
            <Link
              href="/how-to-ask"
              className="text-sky-700 underline decoration-sky-700/40 underline-offset-4 transition-colors hover:text-sky-900 hover:decoration-sky-900 dark:text-sky-400 dark:decoration-sky-400/40 dark:hover:text-sky-300"
            >
              Cara bertanya yang baik
            </Link>
            , atau kalau punya waktu lebih:{" "}
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
          href="https://dontasktoask.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-zinc-800 dark:hover:text-zinc-300"
        >
          dontasktoask.com
        </a>{" "}
        &middot; Konten asli dari{" "}
        <a
          href="https://iki.fi/sol/dontask.html"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-zinc-800 dark:hover:text-zinc-300"
        >
          iki.fi/sol/dontask.html
        </a>{" "}
        &middot;{" "}
        <a
          href="https://github.com/maunium/dontasktoask.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-zinc-800 dark:hover:text-zinc-300"
        >
          Sumber di GitHub
        </a>
      </footer>
    </div>
  );
}
