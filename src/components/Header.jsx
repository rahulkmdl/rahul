const Header = () => {
  return (
    <header className="bg-gray-800 shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          <a href="#home">Rahul Mandal</a>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-300 hover:text-white">
            Home
          </a>
          <a href="#experience" className="text-gray-300 hover:text-white">
            Experience
          </a>
          <a href="#skills" className="text-gray-300 hover:text-white">
            Skills
          </a>
          <a href="#education" className="text-gray-300 hover:text-white">
            Education
          </a>
          <a href="#contact" className="text-gray-300 hover:text-white">
            Contact
          </a>
        </div>
        <div className="md:hidden">
          {/* Mobile menu button can be added here if needed */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
