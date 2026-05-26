import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">

        {/* LOGO */}
        <h1 className="text-2xl font-bold text-yellow-600">
          Honey Farm 🐝
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          <li><a href="#home" className="hover:text-yellow-600 transition">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-600 transition">About</a></li>
          <li><a href="#products" className="hover:text-yellow-600 transition">Products</a></li>
          <li><a href="#gallery" className="hover:text-yellow-600 transition">Gallery</a></li>
          <li><a href="#contact" className="hover:text-yellow-600 transition">Contact</a></li>
        </ul>

        {/* MOBILE ICON */}
        <div
          className="md:hidden text-2xl text-yellow-600 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-6 py-4">

          <ul className="flex flex-col gap-5 font-medium text-gray-700">

            <li>
              <a href="#home" onClick={() => setOpen(false)}>
                Home
              </a>
            </li>

            <li>
              <a href="#about" onClick={() => setOpen(false)}>
                About
              </a>
            </li>

            <li>
              <a href="#products" onClick={() => setOpen(false)}>
                Products
              </a>
            </li>

            <li>
              <a href="#gallery" onClick={() => setOpen(false)}>
                Gallery
              </a>
            </li>

            <li>
              <a href="#contact" onClick={() => setOpen(false)}>
                Contact
              </a>
            </li>

          </ul>

        </div>
      )}

    </nav>
  )
}