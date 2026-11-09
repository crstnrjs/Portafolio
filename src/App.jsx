import Header from './components/Header/Header'
import Info from './components/Home/Info'
import AboutMe from './components/Home/AboutMe'
import Experience from './components/Home/Experience'
import Contact from './components/Home/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-ink"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="main">
        <Info id="inicio" />
        <AboutMe id="sobre-mi" />
        <Experience id="experiencia" />
        <Contact id="contacto" />
      </main>
      <Footer />
    </>
  )
}

export default App
