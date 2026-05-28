export default function Gallery() {
  return (
    <section id="gallery" className="p-10">

      <h2
        onClick={() =>
          document
            .getElementById("gallery")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="text-3xl font-bold text-yellow-700 cursor-pointer hover:underline"
      >
        Gallery
      </h2>

      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <img src="/bee1.jpg" alt="bee 1" />
        <img src="/2.jpg" alt="bee 2" />
        <img src="/bee3.jpg" alt="bee 3" />
      </div>

    </section>
  );
}