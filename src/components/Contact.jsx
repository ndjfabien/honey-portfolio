
import { useState } from "react";

export default function BusinessContactSystem() {
  const phone = "250795533685";

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name || !form.message) return "Name and message are required.";
    if (form.email && !form.email.includes("@")) return "Invalid email address.";
    return null;
  };

  const sendWhatsApp = (e) => {
    e.preventDefault();

    const error = validate();
    if (error) {
      setStatus(error);
      return;
    }

    setStatus("Sending...");

    const text = encodeURIComponent(
`🐝 NEW HONEY ORDER / MESSAGE

Name: ${form.name}
Email: ${form.email || "Not provided"}
Subject: ${form.subject || "General inquiry"}
Message: ${form.message}

Please respond as soon as possible.`);

    const url = `https://wa.me/${phone}?text=${text}`;

    window.open(url, "_blank");

    setStatus("Message sent successfully ✅");

    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-yellow-50">
      <div className="max-w-5xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-yellow-700">
            Business Contact System 🐝
          </h2>
          <p className="text-gray-600 mt-2">
            Send inquiries, orders, or partnership requests directly to WhatsApp
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* FORM */}
          <form onSubmit={sendWhatsApp} className="space-y-4 bg-white p-6 rounded-2xl shadow">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email (optional)"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject (Order, Inquiry, Partnership)"
              value={form.subject}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            />

            <textarea
              name="message"
              placeholder="Write your message here..."
              value={form.message}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg h-20"
              required
            />

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition"
            >
              🚀 Send to WhatsApp
            </button>

            {status && (
              <p className="text-center text-sm text-gray-700 mt-2">
                {status}
              </p>
            )}

          </form>

          {/* INFO PANEL */}
          <div className="bg-white p-6 rounded-2xl shadow space-y-4">

            <h3 className="text-2xl font-bold text-yellow-700">
              Contact Information
            </h3>

            <p>📞 +250 785 770 899</p>
            <p>📧 ndjfabien@gmail.com</p>
            <p>📍 Rwanda | Kayonza | Kabare | Cyarubare</p>

            <div className="pt-4 space-y-3">

           
              <a
                href={`tel:+${phone}`}
                className="block text-center bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700"
              >
                📞 Call Now
              </a>

              <a
                href="https://www.google.com/maps"
                target="_blank"
                className="block text-center bg-gray-800 text-white py-2 rounded-lg hover:bg-black"
              >
                📍 View Location
              </a>

            </div>

            <div className="pt-4 text-sm text-gray-500">
              ✔ Fast response within working hours
              <br />
              ✔ Orders processed via WhatsApp
              <br />
              ✔ Trusted organic honey supplier
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
