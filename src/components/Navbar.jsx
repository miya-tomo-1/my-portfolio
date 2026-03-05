import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-700 bg-opacity-90 z-50 border-b border-gray-400">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* ロゴ */}
        <span className="text-xl font-bold text-pink-300">Portfolio</span>

        {/* PC用メニュー（スマホでは非表示） */}
        <ul className="hidden md:flex gap-6 text-sm text-gray-300">
          <li><a href="#hero" className="hover:text-pink-300 transition">Home</a></li>
          <li><a href="#about" className="hover:text-pink-300 transition">About</a></li>
          <li><a href="#career" className="hover:text-pink-300 transition">Career</a></li>
          <li><a href="#repos" className="hover:text-pink-300 transition">GitHub</a></li>
          <li><a href="#contact" className="hover:text-pink-300 transition">Contact</a></li>
        </ul>

        {/* ハンバーガーボタン（スマホでだけ表示） */}
        <button
          className="md:hidden text-pink-300 text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

      </div>

      {/* スマホ用メニュー（開いたときだけ表示） */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col bg-gray-700 px-6 py-4 gap-4 text-gray-300 border-t border-gray-400">
          <li><a href="#hero" onClick={() => setMenuOpen(false)} className="hover:text-pink-300 transition">Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-pink-300 transition">About</a></li>
          <li><a href="#career" onClick={() => setMenuOpen(false)} className="hover:text-pink-300 transition">Career</a></li>
          <li><a href="#repos" onClick={() => setMenuOpen(false)} className="hover:text-pink-300 transition">GitHub</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-pink-300 transition">Contact</a></li>
        </ul>
      )}

    </nav>
  )
}

export default Navbar
