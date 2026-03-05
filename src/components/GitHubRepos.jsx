import { useState, useEffect } from 'react'

function GitHubRepos() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


  useEffect(() => {
    const getRepos = async () => {
      try {
        const res = await fetch('https://api.github.com/users/miya-tomo-1/repos')
        if (!res.ok) throw new Error('データの取得に失敗しました')
        const data = await res.json()
        setRepos(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    getRepos()
  }, [])


  return (
    <section id="repos" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16 text-pink-300">
        GitHub Repositories
      </h2>

      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-gray-500 rounded-2xl p-6 animate-pulse">
              <div className="h-4 bg-gray-800 rounded mb-4 w-3/4"></div>
              <div className="h-3 bg-gray-800 rounded mb-2"></div>
              <div className="h-3 bg-gray-800 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      )}

      {error && (
        <p className="text-center text-red-400">⚠️ {error}</p>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-500 rounded-2xl p-6 hover:bg-gray-400 hover:scale-105 transition-all duration-300 block"
            >
              <h3 className="text-lg font-bold text-white mb-2">{repo.name}</h3>
              <p className="text-gray-400 text-sm mb-4 min-h-10">
                {repo.description || '説明なし'}
              </p>
              {repo.language && (
                <span className="bg-purple-900 text-purple-200 px-3 py-1 rounded-full text-xs">
                  {repo.language}
                </span>
              )}
            </a>
          ))}
        </div>
      )}
    </section>
  )
}

export default GitHubRepos