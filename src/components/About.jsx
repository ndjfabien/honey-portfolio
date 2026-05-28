import { useState, useEffect } from "react";

export default function About() {
  const [lang, setLang] = useState("rw");

  // Videos (ushobora gusimbuza izi zawe)
const videos = ["/rr.mp4", "/cc.mp4", "/dad.mp4", "/nn.mp4"];
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative p-10 overflow-hidden min-h-screen flex items-center">

      {/* BACKGROUND VIDEO (changing) */}
      <video
        key={currentVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={videos[currentVideo]} type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* CONTENT */}
      <div className="relative z-20 max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-yellow-300">
          About Me
        </h2>

        <button
          onClick={() => setLang(lang === "rw" ? "en" : "rw")}
          className="mt-6 px-5 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full transition duration-300 shadow-lg"
        >
          {lang === "rw"
            ? "Switch to English"
            : "Subira mu Kinyarwanda"}
        </button>

        <div className="mt-8 bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl">

          <p className="text-gray-200 leading-9 text-lg">
            {lang === "rw" ? (
              <>
                Ndi umworozi w’inzuki umaze imyaka myinshi nkora
                ubuvumvu bwa kijyambere no gutunganya ubuki
                bw’umwimerere bufite ubuziranenge.

                Natangiye uyu mwuga nkunda ibidukikije ndetse
                no guteza imbere umusaruro w’ubuki karemano
                bufasha ubuzima bw’abantu.

                Nita cyane ku buzima bw’inzuki, isuku no
                gukoresha uburyo bwa kijyambere butangiza
                ibidukikije kugira ngo mbashe gutanga ubuki
                bwiza, bw’umwimerere kandi bwizewe
                n’abakiriya.

                Intego yanjye ni ugutanga ibicuruzwa byiza
                birimo ubuki karemano, beeswax ndetse
                n’ibindi bikomoka ku nzuki bifite
                intungamubiri kandi bifasha ubuzima bwiza.

                Mfite uburambe bw’imyaka myinshi mu bworozi
                bw’inzuki kandi nkomeje guteza imbere
                ibikorwa byanjye kugira ngo abakiriya
                banjye bahore babona serivisi nziza
                n’ibicuruzwa byizewe.
              </>
            ) : (
              <>
                I am a beekeeper with many years of experience
                in modern beekeeping and producing pure,
                high-quality honey. I started this work because
                I love nature and I am passionate about improving
                natural honey production that supports human health.

                I focus strongly on bee health, cleanliness, and
                using modern, eco-friendly methods to ensure I
                produce high-quality, pure, and trusted honey
                for customers.

                My goal is to provide high-quality products including
                natural honey, beeswax, and other bee-related products
                that are rich in nutrients and beneficial to health.

                I have many years of experience in beekeeping and I
                continue to grow my work so that my customers always
                receive quality and reliable products and services.
              </>
            )}
          </p>

        </div>
      </div>
    </section>
  );
}