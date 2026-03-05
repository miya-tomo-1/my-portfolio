import { useEffect, useRef, useState } from 'react'

function FadeIn({ children }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}
    >
      {children}
    </div>
  )
}

function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-4xl mx-auto">

      <h2 className="text-4xl font-bold text-center mb-16 text-pink-300">
        About Me
      </h2>

      {/* 自己紹介文 */}
      <FadeIn>
        <div className="bg-gray-500 rounded-2xl p-8 mb-8">
          <h3 className="text-xl font-bold mb-4 text-pink-300">👋 はじめまして</h3>
          <p className="text-gray-300 leading-relaxed">
            子育てしながらWebプログラミングを苦戦しつつ勉強しています。これまでの経験を活かしながら、新しいことに挑戦していきたいと思っています。よろしくお願いします！
          </p>
        </div>
      </FadeIn>

      {/* 趣味 */}
      <FadeIn>
        <div className="bg-gray-500 rounded-2xl p-8 mb-8">
          <h3 className="text-xl font-bold mb-4 text-pink-300">🎨 趣味・好きなこと</h3>
          <div className="flex flex-wrap gap-3">
            {['旅行', '資産運用', '美容', '物件', '教育'].map((hobby) => (
              <div key={hobby} className="bg-pink-300 text-pink-100 px-4 py-2 rounded-full text-bg">
                {hobby}
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* 強み */}
      <FadeIn>
        <div className="bg-gray-500 rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-4 text-pink-300">💪 性格・強み</h3>
          <ul className="text-gray-300 space-y-2">
            <li>⭐ 明るく前向きな性格</li>
            <li>⭐ 宅建、簿記、ファイナンシャルプランナーなど色々な資格に挑戦して得た知識</li>
            <li>⭐ 子育てで得た忍耐力と柔軟性</li>
          </ul>
        </div>
      </FadeIn>

    </section>
  )
}

export default About
