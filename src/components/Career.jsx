const careers = [
  {
    year: '2000年',
    title: '青山学院大学 理工学部経営工学科 卒業',
    description: '経営工学を学び、システムエンジニアリングの基礎を身につける。',
  },
  {
    year: '2000年',
    title: 'Panasonic グループ会社 に SE として入社',
    description: 'システムエンジニアとして勤務。ITの実務経験を積む。',
  },
  {
    year: '2005年',
    title: '中央大学 理工学部 教育技術員として勤務',
    description: '大学の理工学部にて教育技術員として学生をサポート。',
  },
  {
    year: '2013年',
    title: '妊娠を機に退職',
    description: '子育てに専念するため、退職を決意。',
  },
  {
    year: '2025年',
    title: 'プログラミング学習開始',
    description: '第三の人生に向けて苦戦しつつも学ばせていただいてます。',
  },
]

function Career() {
  return (
    <section id="career" className="py-24 px-6 max-w-3xl mx-auto">

      <h2 className="text-4xl font-bold text-center mb-16 text-pink-300">
        Career
      </h2>
      <div className="space-y-8">
        {careers.map((item, index) => (
          <div key={index} className="flex gap-6 bg-gray-500 rounded-2xl p-6">

            {/* 左側：年 */}
            <div className="text-pink-300 font-bold text-xl w-20 shrink-0 pt-1">
              {item.year}
            </div>

            {/* 右側：タイトルと説明 */}
            <div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>

          </div>
        ))}
      </div>
{/* キャリアのタイムライン 
      <div className="relative border-l-2 border-pink-500 pl-8 space-y-12">
        {careers.map((item, index) => (
          <div key={index} className="relative">
             丸いドット 
            <div className="absolute -left-11 w-5 h-5 bg-pink-500 rounded-full border-4 border-gray-900"></div>

            <span className="text-pink-300 text-sm font-bold">{item.year}</span>
            <h3 className="text-xl font-bold text-white mt-1">{item.title}</h3>
            <p className="text-gray-400 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
*/}

    </section>
  )
}

export default Career
