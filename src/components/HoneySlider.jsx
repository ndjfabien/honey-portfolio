export default function HoneySlider() {

  const images = [
    "/bee1.jpg",
    "/bee2.jpg",
    "/bee3.jpg",
    "/bee5.jpg",
    "/bee6.jpg",
    "/bee7.jpg",
    "/bee4.jpg",
   "/bee8.jpg",
  ]

  return (
    
    <section className="py-20 bg-yellow-50 overflow-hidden">

      <h2 className="text-4xl font-bold text-center text-yellow-700 mb-12">
        Our Honey Gallery 🐝
      </h2>

      <div className="relative w-full overflow-hidden">

        <div className="flex animate-scroll gap-8 w-max">

          {images.map((img, index) => (
            <div
              key={index}
              className="min-w-[300px] h-[250px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}

          {images.map((img, index) => (
            <div
              key={index + "duplicate"}
              className="min-w-[300px] h-[250px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  )
}