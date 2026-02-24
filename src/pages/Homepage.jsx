import { useState } from "react";

export default function Homepage() {
  const [hovered, setHovered] = useState(false);

  const features = [
  {
    title: "Expert Stylists",
    desc: "Certified professionals with years of experience",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/>
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
  },
  {
    title: "Premium Products",
    desc: "Top quality hair products and accessories",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5z"/>
        <path d="M9 12l2 2 4-4"/>
        <circle cx="17" cy="7" r="2"/>
        <path d="M15.5 7H7"/>
      </svg>
    ),
  },
  {
    title: "Flexible Hours",
    desc: "Open 7 days a week for your convenience",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    title: "Customer Love",
    desc: "Rated 5 stars by satisfied clients",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
];


const hairstyles = [
  {
    id: 1,
    name: "Box Braids",
    category: "Braids",
    image: "https://images.unsplash.com/photo-1612363148681-4b82c7c8f935?w=600&q=80",
  },
  {
    id: 2,
    name: "Afro Natural",
    category: "Natural",
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=600&q=80",
  },
  {
    id: 3,
    name: "Knotless Braids",
    category: "Braids",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80",
  },
  {
    id: 4,
    name: "Cornrows",
    category: "Braids",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
  },
  {
    id: 5,
    name: "Twist Out",
    category: "Natural",
    image: "https://images.unsplash.com/photo-1523264653568-d3d4032d1476?w=600&q=80",
  },
  {
    id: 6,
    name: "Feed-In Braids",
    category: "Braids",
    image: "https://images.unsplash.com/photo-1605980413988-9ff24c537935?w=600&q=80",
  },
];


  return (
    <div className="font-sans">
      {/* Navbar */}
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
              className="text-gray-700 text-sm font-medium hover:text-pink-500 transition-colors duration-200"
            >
              {item}
            </a>
          ))}
          <button
            className="px-5 py-2 rounded-full text-white text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:shadow-lg"
            style={{ background: "linear-gradient(135deg, #a78bfa, #ec4899)" }}
          >
            Book Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center text-center py-32 px-8 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #a5b4fc 0%, #c084fc 30%, #f472b6 65%, #fb7185 100%)",
          minHeight: "420px",
        }}
      >
        {/* Subtle noise/grain overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
            backgroundSize: "200px 200px",
          }}
        />

        <h1 className="text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-sm mb-5">
          Elevate Your Beauty
        </h1>
        <p className="text-white text-lg font-normal opacity-90 mb-10 max-w-lg">
          Experience world-class hairstyling at Nigeria's finest salon
        </p>

        <button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="px-12 py-4 rounded-full bg-white text-base font-semibold transition-all duration-300"
          style={{
            color: hovered ? "#ec4899" : "#818cf8",
            boxShadow: hovered
              ? "0 8px 30px rgba(236,72,153,0.25)"
              : "0 4px 16px rgba(0,0,0,0.1)",
            transform: hovered ? "translateY(-2px)" : "translateY(0)",
          }}
        >
          Book Your Appointment
        </button>
      </section>
      <section className="bg-gray-50 py-16 px-8" style={{ borderTop: "3px solid #f472b6" }}>
        <div className="max-w-8xl mx-auto grid grid-cols-4 gap-9 text-center">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center gap-4">
              <div
                className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-md"
                style={{ background: "linear-gradient(135deg, #c084fc, #ec4899)" }}
              >
                {feature.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-base">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

       <section className="bg-white py-16 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-3">Popular Hairstyles</h2>
            <p className="text-gray-400 text-base">Browse our most requested styles and find your perfect look</p>
          </div>

          {/* 3x2 Grid */}
          <div className="grid grid-cols-3 gap-6">
            {hairstyles.map((style) => (
              <div
                key={style.id}
                className="relative rounded-2xl overflow-hidden group cursor-pointer"
                style={{ height: "280px" }}
              >
                {/* Image */}
                <img
                  src={style.image}
                  alt={style.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentNode.style.background = "linear-gradient(135deg, #e9d5ff, #fbcfe8)";
                  }}
                />

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

                {/* Like button */}
                <button
                  onClick={() => toggleLike(style.id)}
                  className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all duration-200 hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.9)" }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill={liked[style.id] ? "#ec4899" : "none"}
                    stroke={liked[style.id] ? "#ec4899" : "#9ca3af"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </button>

                {/* Bottom label on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                  style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.6) 0%, transparent 100%)" }}>
                  <p className="text-white font-semibold text-sm">{style.name}</p>
                  <p className="text-white text-xs opacity-75">{style.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}