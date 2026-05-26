export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-yellow-50 flex items-center pt-24"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">

        {/* LEFT SIDE */}
        <div>
          <p className="text-yellow-600 font-semibold uppercase tracking-widest">
            100% Organic Honey
          </p>

          <h1 className="text-6xl font-extrabold text-gray-900 leading-tight mt-4">
            Pure Natural Honey From Healthy Bees 🐝
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-8">
            We provide high-quality organic honey produced with care,
            tradition, and modern beekeeping methods.
            Fresh from our farm directly to your family.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex gap-4">

            <a
              href="#products"
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-7 py-3 rounded-full shadow-lg transition duration-300"
            >
              View Products
            </a>

            <a
              href="#contact"
              className="border-2 border-yellow-600 text-yellow-700 hover:bg-yellow-600 hover:text-white px-7 py-3 rounded-full transition duration-300"
            >
              Contact Us
            </a>

          </div>

          {/* STATS */}
          <div className="flex gap-10 mt-12">

            <div>
              <h2 className="text-3xl font-bold text-yellow-600">10+</h2>
              <p className="text-gray-600">Years Experience</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-yellow-600">500+</h2>
              <p className="text-gray-600">Happy Customers</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-yellow-600">100%</h2>
              <p className="text-gray-600">Organic</p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center">
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