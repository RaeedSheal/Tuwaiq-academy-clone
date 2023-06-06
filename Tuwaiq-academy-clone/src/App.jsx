import Navbar from './components/Navbar'
import Mainsection from './components/Mainsection'
import './assets/App.css'
import Bootcampsection from './components/Bootcampsection'
import Footerbar from './components/Footerbar'

function App() {

  return (
    <>
      <Navbar/>
      <section className='main-section'>
        <Mainsection/>
      </section>
      <section>
        <Bootcampsection/>
      </section>
      <Footerbar/>
    </>
  )
}

export default App
