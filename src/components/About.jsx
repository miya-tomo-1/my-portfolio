function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
      
      <h2 className="text-4xl font-bold text-center mb-16 text-purple-400">
        About Me
      </h2>

      {/* 自己紹介文 */}
      <div className="bg-gray-800 rounded-2xl p-8 mb-8">
        <h3 className="text-xl font-bold mb-4 text-purple-300">👋 はじめまして</h3>
        <p className="text-gray-300 leading-relaxed">
          はじめまして！Miya Tomoと申します。
          現在、Webプログラミングを勉強中の主婦です。
          子供の頃からものづくりが好きで、今はコードでものを作ることに夢中になっています！
        </p>
      </div>

      {/* 趣味 */}
      <div className="bg-gray-800 rounded-2xl p-8 mb-8">
        <h3 className="text-xl font-bold mb-4 text-purple-300">🎨 趣味・好きなこと</h3>
        <div className="flex flex-wrap gap-3">
          {['プログラミング', '読書', '料理', 'お散歩', '映画鑑賞'].map((hobby) => (
            <span key={hobby} className="bg-purple-900 text-purple-200 px-4 py-2 rounded-full text-sm">
              {hobby}
            </span>
          ))}
        </div>
      </div>

      {/* 強み */}
      <div className="bg-gray-800 rounded-2xl p-8">
        <h3 className="text-xl font-bold mb-4 text-purple-300">💪 性格・強み</h3>
        <ul className="text-gray-300 space-y-2">
          <li>✅ 粘り強く諦めない</li>
          <li>✅ 新しいことへの好奇心が旺盛</li>
          <li>✅ コツコツ継続できる</li>
        </ul>
      </div>

    </section>
  )
}

export default About