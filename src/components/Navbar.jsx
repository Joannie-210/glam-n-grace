import { useState } from "react";


export default function Navbar() {
  const [hovered, setHovered] = useState(false);

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100 shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #a78bfa, #ec4899)" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="6" cy="6" r="3"/><circle cx="18" cy="18" r="3"/>
            <line x1="20" y1="4" x2="8.12" y2="15.88"/>
            <line x1="14.47" y1="14.48" x2="20" y2="20"/>
            <line x1="8.12" y1="8.12" x2="4" y2="4"/>
          </svg>
        </div>
        <div>
          <div className="font-bold text-gray-900 text-base leading-tight">Glam & Grace</div>
          <div className="text-gray-400 text-xs">Hair Salon</div>
        </div>
      </div>

      {/* Nav Links */}
      <div className="flex items-center gap-8">
        {["Home", "Services", "Gallery", "About"].map((item) => (
          <a
            key={item}
            href="#"
            className={`text-gray-700 text-sm font-medium hover:text-pink-500 transition-colors duration-200 ${item === "Home" ? "text-pink-500 font-semibold underline decoration-pink-500 underline-offset-4 decoration-wavy": ""}`}
          >
            {item}
          </a>
        ))}
        <button
          className={`px-5 py-2 rounded-full text-white text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:shadow-lg ${hovered ? "bg-pink-600 shadow-lg shadow-pink-300/50": "bg-gradient-to-r from-purple-600 to-pink-600"} `}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Book Now
        </button>
      </div>
    </nav>
  );
}