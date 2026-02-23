function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      
      {/* プロフィール画像 */}
      <div className="w-32 h-32 rounded-full bg-purple-500 flex items-center justify-center text-5xl mb-6">
        🧑‍💻
      </div>

      {/* 名前 */}
      <h1 className="text-5xl font-bold mb-4">
        Miya Tomo
      </h1>

      {/* キャッチコピー */}
      <p className="text-xl text-purple-400 mb-8">
        はじめてのポートフォリオサイトです✨
      </p>

      {/* 下矢印 */}
      <div className="animate-bounce text-gray-400 text-3xl mt-8">
        ↓
      </div>

    </section>
  )
}

export default Hero