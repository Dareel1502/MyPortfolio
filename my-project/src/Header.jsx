import React from "react";

function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <nav>
          <a href="#about" className="px-4 hover:underline">
            About
          </a>
          <a href="#portfolio" className="px-4 hover:underline">
            Portfolio
          </a>
          <a href="#contact" className="px-4 hover:underline">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
