import { useState, useEffect } from 'react'

function Hero() {
  const fullText = 'ママエンジニアにむけて苦戦しながら学習中'
  const [displayText, setDisplayText] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(displayText + fullText[index])
        setIndex(index + 1)
      }, 150)
      return () => clearTimeout(timer)
    }
  }, [index, displayText, fullText])

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-6">

      {/* プロフィール画像 */}
      <div className="w-50 h-50 rounded-full overflow-hidden mb-6 border-4 border-pink-300">
        <img
//          src="/profile.png"
src={import.meta.env.BASE_URL + 'profile.png'}          alt="Tomoのプロフィール画像"
          className="w-full h-full object-cover scale-125"
        />
      </div>

      {/* 名前 */}
      <h1 className="text-5xl text-pink-300 font-bold mb-4">
        TOMO
      </h1>

      {/* キャッチコピー（タイピングアニメーション） */}
      <p className="text-xl text-pink-300 mb-8 h-8">
        {displayText}
        <span className="animate-pulse">|</span>
      </p>

      {/* 下矢印 */}
<div className="flex gap-8 mt-10">
  <div className="animate-bounce text-pink-300 text-4xl font-bold">
    ⇩
  </div>
  <div className="animate-ping text-pink-300 text-4xl font-bold">
    ⇩
  </div>
  <div className="animate-bounce text-pink-300 text-4xl font-bold">
    ⇩
  </div>
</div>

    </section>
  )
}

export default Hero
