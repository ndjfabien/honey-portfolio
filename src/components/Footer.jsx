export default function Footer() {
  return (
    <footer className="p-5 bg-black text-white flex items-center justify-between">

      <p className="text-center flex-1">
        © 2026 BICAMUMPAKA Fabien Honey Farm. All rights reserved.
      </p>

      {/* Profile Image */}
      <img
        src="/a.jpg"
        alt="Fabien"
        className="w-14 h-14 rounded-full object-cover border-2 border-yellow-400"
      />

    </footer>
  );
}