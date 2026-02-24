import { useState } from "react";

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

export default function Homepage() {
  const [heroHovered, setHeroHovered] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [liked, setLiked] = useState({});

  const toggleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
   <div className="font-sans min-h-screen overflow-x-hidden">
      
      <nav className="bg-white border-b border-gray-100 shadow-sm">
        <div className="flex items-center justify-between px-6 py-4">
         
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
              style={{ background: "linear-gradient(135deg, #a78bfa, #ec4899)" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="6" cy="6" r="3"/><circle cx="18" cy="18" r="3"/>
                <line x1="20" y1="4" x2="8.12" y2="15.88"/>
                <line x1="14.47" y1="14.48" x2="20" y2="20"/>
                <line x1="8.12" y1="8.12" x2="4" y2="4"/>
              </svg>
            </div>
            <div>
              <div className="font-bold text-gray-900 text-base leading-tight">Glam &amp; Grace</div>
              <div className="text-gray-400 text-xs">Hair Salon</div>
            </div>
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {["Home", "Services", "Gallery", "About"].map((item) => (
              <a key={item} href="#" className="text-gray-700 text-sm font-medium hover:text-pink-500 transition-colors duration-200">
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

    
          <button
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-9 h-9 rounded-lg hover:bg-gray-50 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

      
        {mobileOpen && (
          <div className="md:hidden px-6 pb-5 flex flex-col gap-4 border-t border-gray-100">
            {["Home", "Services", "Gallery", "About"].map((item) => (
              <a key={item} href="#" className="text-gray-700 text-sm font-medium hover:text-pink-500 transition-colors duration-200 py-1">
                {item}
              </a>
            ))}
            <button
              className="w-full py-2.5 rounded-full text-white text-sm font-semibold"
              style={{ background: "linear-gradient(135deg, #a78bfa, #ec4899)" }}
            >
              Book Now
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center text-center py-32 px-8 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #a5b4fc 0%, #c084fc 30%, #f472b6 65%, #fb7185 100%)",
          minHeight: "420px",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
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
          onMouseEnter={() => setHeroHovered(true)}
          onMouseLeave={() => setHeroHovered(false)}
          className="px-12 py-4 rounded-full bg-white text-base font-semibold transition-all duration-300"
          style={{
            color: heroHovered ? "#ec4899" : "#818cf8",
            boxShadow: heroHovered ? "0 8px 30px rgba(236,72,153,0.25)" : "0 4px 16px rgba(0,0,0,0.1)",
            transform: heroHovered ? "translateY(-2px)" : "translateY(0)",
          }}
        >
          Book Your Appointment
        </button>
      </section>

      <section className="bg-gray-50 py-16 px-8" style={{ borderTop: "3px solid #f472b6" }}>
       <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center"> 
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center gap-4">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center shadow-md"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hairstyles.map((style) => (
              <div
                key={style.id}
                className="relative rounded-2xl overflow-hidden group cursor-pointer"
                style={{ height: "280px" }}
              >
               
                <img
                  src={style.image}
                  alt={style.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentNode.style.background = "linear-gradient(135deg, #e9d5ff, #fbcfe8)";
                  }}
                />

                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

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

      <section
        className="relative flex flex-col items-center justify-center text-center py-24 px-8 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #a5b4fc 0%, #c084fc 30%, #f472b6 65%, #fb7185 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
            backgroundSize: "200px 200px",
          }}
        />
       <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
          Ready for Your Transformation?
        </h2>
       <p className="text-white text-base sm:text-lg opacity-90 mb-10 max-w-xl">
          Book your appointment today and let us bring your hair dreams to life
        </p>
        <div className="flex items-center gap-5">
          <button
            className="px-10 py-4 rounded-full bg-white font-semibold text-base transition-all duration-200 hover:shadow-xl hover:scale-105"
            style={{ color: "#818cf8" }}
          >
            Book Appointment
          </button>
          <button className="px-10 py-4 rounded-full font-semibold text-base text-white border-2 border-white transition-all duration-200 hover:bg-white hover:text-pink-400">
            Call Us Now
          </button>
        </div>
      </section>

      <footer className="bg-gray-950 px-8 pt-14 pb-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-bold" style={{ color: "#a78bfa" }}>
              Glam &amp; Grace Hair Salon
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Nigeria's premier destination for exquisite hairstyling. We specialize in braids, weaves, natural hair care, and all your beauty needs.
            </p>
        
            <div className="flex items-center gap-3 mt-1">
              {[
                {
                  label: "Instagram",
                  path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                },
                {
                  label: "Facebook",
                  path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                },
                {
                  label: "Twitter",
                  path: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, #c084fc, #ec4899)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

      
          <div className="flex flex-col gap-5">
            <h4 className="text-white font-bold text-base">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {["Home", "Services", "Gallery", "Book Appointment"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 text-sm hover:text-pink-400 transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

     
          <div className="flex flex-col gap-5">
            <h4 className="text-white font-bold text-base">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.72 12 19.79 19.79 0 0 1 1.65 3.4 2 2 0 0 1 3.62 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <div className="text-gray-400 text-sm leading-relaxed">
                  +234 803 456 7890<br/>+234 807 123 4567
                </div>
              </li>
              <li className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span className="text-gray-400 text-sm">info@glamandgrace.ng</span>
              </li>
              <li className="flex items-start gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <div className="text-gray-400 text-sm leading-relaxed">
                  123 Victoria Island<br/>Lagos, Nigeria
                </div>
              </li>
            </ul>
          </div>
        </div>

   
        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-gray-800">
          <p className="text-gray-600 text-xs text-center">
            © 2024 Glam &amp; Grace Hair Salon. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}