import { BrowserRouter } from "react-router-dom"
import { Navbar, Model, About, Experience, Works, Tech, Interests, Contact } from "./components"
import { StarsCanvas } from "./components/canvas"

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Model />
        </div>
        <About />
        <Experience />
        <Works />
        <Tech />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
