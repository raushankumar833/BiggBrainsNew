import React from 'react'

export default function Header() {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navigationItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Our Services", path: "/services" },
    { label: "Our Partners", path: "/partners" },
    { label: "Contact Us", path: "/contact" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setDrawerOpen(false);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-white to-[#b6b3c0] shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          
          {/* Logo */}
          <img
            src="/src/assets/BiggBrainsLogo.svg"
            alt="logo"
            className="h-10 cursor-pointer object-contain"
            onClick={() => navigate("/")}
          />

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-10">
            {navigationItems.map((item) => (
              <span
                key={item.label}
                onClick={() => navigate(item.path)}
                className="text-black font-medium cursor-pointer hover:opacity-80 transition"
              >
                {item.label}
              </span>
            ))}
          </nav>

          {/* Desktop Button */}
          <button
            onClick={() => navigate("/login")}
            className="hidden md:block bg-[#7C2EE5] hover:bg-[#6925c7] text-white px-6 py-2 rounded-lg font-semibold transition"
          >
            Login Now
          </button>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="md:hidden text-black"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* ================= MOBILE DRAWER ================= */}
      <div
        className={`fixed inset-0 z-50 transition ${
          drawerOpen ? "visible" : "invisible pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setDrawerOpen(false)}
        ></div>

        {/* Drawer Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-[270px] bg-gradient-to-b from-[#5A0FC8] to-[#480DC6] text-white p-6 transform transition-transform ${
            drawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between mb-8 border-b border-white/20 pb-3">
            <img
              src="/src/assets/BiggBrainsLogo.svg"
              alt="logo"
              className="h-8 object-contain"
            />
            <button onClick={() => setDrawerOpen(false)}>
              <X size={24} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-6">
            {navigationItems.map((item) => (
              <span
                key={item.label}
                onClick={() => handleNavigation(item.path)}
                className="cursor-pointer text-lg font-medium hover:opacity-80"
              >
                {item.label}
              </span>
            ))}
          </div>

          {/* Login button in drawer */}
          <button
            onClick={() => handleNavigation("/login")}
            className="mt-10 w-full bg-[#7C2EE5] hover:bg-[#6925c7] py-3 rounded-lg font-semibold transition"
          >
            Login Now
          </button>
        </div>
      </div>

      {/* Spacer because navbar is fixed */}
      <div className="h-[72px]" />
    </>
  );
}
