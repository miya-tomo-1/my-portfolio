import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Career from './components/Career'
import GitHubRepos from './components/GitHubRepos'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Career />
      <GitHubRepos />
      <Contact />
    </div>
  )
}

export default App