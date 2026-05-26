export default function Contact() {
  return (
    <section id="contact" className="p-10 bg-yellow-50">
      <h2 className="text-3xl font-bold text-yellow-700">
        Contact Us
      </h2>

      <p className="mt-2 text-gray-600">
        Feel free to reach out for pure organic honey orders 🐝
      </p>

      <div className="mt-6 space-y-3 text-gray-700">

        <p>📞 Phone: +250 785 770 899</p>
        <p>📧 Email: ndjfabien@gmail.com</p>
        <p>📍 Location: Rwanda || Kayonza || Kabare || Cyarubare  </p>

      </div>

      <div className="mt-6 flex gap-4">

        {/* WhatsApp */}
        <a
          href="https://wa.me/250795533685"
          className="bg-green-500 text-white px-5 py-2 rounded-full shadow"
        >
          WhatsApp
        </a>

        {/* Call */}
        <a
          href="tel:+250735 8100 44"
          className="bg-yellow-600 text-white px-5 py-2 rounded-full shadow"
        >
          Call Now
        </a>

      </div>
    </section>
  )
}