const products = [
  {
    name: "Pure Honey (1 Litre)",
    price: "10,000 RWF",
    desc: "Ubuki bw’umwimerere, busukuye kandi bufite intungamubiri"
  },
  {
    name: "Pure Honey (500ml)",
    price: "5,000 RWF",
    desc: "Igice cy’ubuki bwiza ku giciro gito(A portion of good honey at a low price.)"
  },
  {
    name: "Honey Comb (Ibido)",
    price: "12,0000RWF",
    desc: "Ubuki buri mu bido (natural comb honey)"
  },
  {
    name: "Beeswax (Cire)",
    price: "7,000 RWF",
    desc: "Ikoreshwa mu mavuta, cream n’imiti karemano"
  },
  {
    name: "Propolis",
    price: "8,000 RWF",
    desc: "Ikoreshwa mu kuvura no kongera immunity"
  },
  {
    name: "Bee Pollen",
    price: "6,000 RWF",
    desc: "Intungamubiri zifasha imbaraga n’ubuzima"
  }
]

export default function Products() {
  return (
    <section id="products" className="p-10 bg-yellow-50">
      <h2 className="text-3xl font-bold text-yellow-700">
        Our Products & Prices 🐝
      </h2>

      <p className="text-gray-600 mt-2">
        Quality natural bee products available at affordable prices
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {products.map((p, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-xl shadow hover:scale-105 transition"
          >
            <h3 className="font-bold text-lg">{p.name}</h3>
            <p className="text-yellow-700 font-semibold mt-2">
              {p.price}
            </p>
            <p className="text-gray-600 text-sm mt-2">
              {p.desc}
            </p>

            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm">
              Order via WhatsApp
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}