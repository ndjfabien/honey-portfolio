export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen relative bg-gradient-to-br from-yellow-50 to-yellow-100 flex items-center pt-24 overflow-hidden"
    >
      {/* Floating decorations */}
      <div className="absolute top-20 left-10 text-3xl animate-bounce">🐝</div>
      <div className="absolute bottom-20 right-10 text-3xl animate-pulse">🍯</div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6 z-10">

        {/* LEFT SIDE */}
        <div>
          <p className="text-yellow-700 font-semibold uppercase tracking-widest">
            100% Organic Honey
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mt-4">
            Pure Natural Honey From Healthy Bees 🐝
          </h1>

          <p className="mt-6 text-gray-700 text-lg leading-8">
            We provide high-quality organic honey produced with care, tradition,
            and modern beekeeping methods. Fresh from our farm directly to your family
            with guaranteed purity and taste.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#products"
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-7 py-3 rounded-full shadow-lg transition duration-300"
            >
              View Products
            </a>

            <a
              href="https://wa.me/250795533685"
              target="_blank"
              className="bg-green-500 hover:bg-green-600 text-white px-7 py-3 rounded-full shadow-lg transition duration-300"
            >
              WhatsApp Order
            </a>

            <a
              href="#contact"
              className="border-2 border-yellow-600 text-yellow-700 hover:bg-yellow-600 hover:text-white px-7 py-3 rounded-full transition duration-300"
            >
              Contact Us
            </a>

          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-6 mt-12">

            <div className="bg-white p-4 rounded-xl shadow-md text-center hover:scale-105 transition">
              <h2 className="text-3xl font-bold text-yellow-600">10+</h2>
              <p className="text-gray-600 text-sm">Years Experience</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-md text-center hover:scale-105 transition">
              <h2 className="text-3xl font-bold text-yellow-600">500+</h2>
              <p className="text-gray-600 text-sm">Happy Customers</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-md text-center hover:scale-105 transition">
              <h2 className="text-3xl font-bold text-yellow-600">100%</h2>
              <p className="text-gray-600 text-sm">Organic</p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center relative">
          <div className="absolute -top-6 -left-6 text-4xl animate-bounce">🐝</div>

          <img
            src="/boss.png"
            alt="Honey Farm"
            className="w-full max-w-lg rounded-2xl shadow-2xl object-cover hover:scale-105 transition duration-500"
          />
        </div>

      </div>
    </section>
  )
}
