const careers = [
  {
    year: '2000年',
    title: '〇〇大学 卒業',
    description: '〇〇学部で学ぶ。',
  },
  {
    year: '2000年',
    title: '〇〇会社 入社',
    description: '〇〇の仕事を担当。',
  },
  {
    year: '2024年',
    title: 'プログラミング学習開始',
    description: 'JavaScriptとReactの学習をスタート！',
  },
]

function Career() {
  return (
    <section id="career" className="py-24 px-6 max-w-3xl mx-auto">

      <h2 className="text-4xl font-bold text-center mb-16 text-purple-400">
        Career
      </h2>

      <div className="relative border-l-2 border-purple-500 pl-8 space-y-12">
        {careers.map((item, index) => (
          <div key={index} className="relative">
            {/* 丸いドット */}
            <div className="absolute -left-11 w-5 h-5 bg-purple-500 rounded-full border-4 border-gray-900"></div>

            <span className="text-purple-400 text-sm font-bold">{item.year}</span>
            <h3 className="text-xl font-bold text-white mt-1">{item.title}</h3>
            <p className="text-gray-400 mt-2">{item.description}</p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Career