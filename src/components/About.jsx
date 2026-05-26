import { useState } from "react";

export default function About() {
  const [lang, setLang] = useState("rw");

  return (
    <section id="about" className="p-10 bg-white">
      <h2 className="text-3xl font-bold text-yellow-700">
        About Me
      </h2>

      <button
        onClick={() => setLang(lang === "rw" ? "en" : "rw")}
        className="mt-4 px-4 py-2 bg-yellow-600 text-white rounded"
      >
        {lang === "rw" ? "Switch to English" : "Subira mu Kinyarwanda"}
      </button>

      <p className="mt-4 text-gray-600 leading-8">
        {lang === "rw" ? (
          <>
            Ndi umworozi w’inzuki umaze imyaka myinshi nkora ubuvumvu bwa
            kijyambere no gutunganya ubuki bw’umwimerere bufite ubuziranenge.
            Natangiye uyu mwuga nkunda ibidukikije ndetse no guteza imbere
            umusaruro w’ubuki karemano bufasha ubuzima bw’abantu.{" "}

            Nita cyane ku buzima bw’inzuki, isuku no gukoresha uburyo bwa
            kijyambere butangiza ibidukikije kugira ngo mbashe gutanga ubuki
            bwiza, bw’umwimerere kandi bwizewe n’abakiriya.{" "}

            Intego yanjye ni ugutanga ibicuruzwa byiza birimo ubuki karemano,
            beeswax ndetse n’ibindi bikomoka ku nzuki bifite intungamubiri
            kandi bifasha ubuzima bwiza.{" "}

            Mfite uburambe bw’imyaka myinshi mu bworozi bw’inzuki kandi
            nkomeje guteza imbere ibikorwa byanjye kugira ngo abakiriya
            banjye bahore babona serivisi nziza n’ibicuruzwa byizewe.
          </>
        ) : (
          <>
            I am a beekeeper with many years of experience in modern beekeeping
            and producing pure, high-quality honey. I started this work because
            I love nature and I am passionate about improving natural honey
            production that supports human health.{" "}

            I focus strongly on bee health, cleanliness, and using modern,
            eco-friendly methods to ensure I produce high-quality, pure, and
            trusted honey for customers.{" "}

            My goal is to provide high-quality products including natural honey,
            beeswax, and other bee-related products that are rich in nutrients
            and beneficial to health.{" "}

            I have many years of experience in beekeeping and I continue to grow
            my work so that my customers always receive quality and reliable
            products and services.
          </>
        )}
      </p>
    </section>
  );
}