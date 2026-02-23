function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 z-50 border-b border-gray-700">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-bold text-purple-400">Portfolio</span>
        <ul className="flex gap-6 text-sm text-gray-300">
          <li><a href="#hero" className="hover:text-purple-400 transition">Home</a></li>
          <li><a href="#about" className="hover:text-purple-400 transition">About</a></li>
          <li><a href="#career" className="hover:text-purple-400 transition">Career</a></li>
          <li><a href="#repos" className="hover:text-purple-400 transition">GitHub</a></li>
          <li><a href="#contact" className="hover:text-purple-400 transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar