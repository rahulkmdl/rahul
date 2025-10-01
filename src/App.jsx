import Header from './components/Header'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  )
}

export default App
