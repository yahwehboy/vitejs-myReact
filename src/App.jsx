import './App.css'
import Header from './components/Header'
import Profile from './components/Profile'
import Footer  from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <Profile name="Olalekan Omotayo" position="WebDeveloper, Pentester"/>
      <Footer />
      <Profile name="Olalekan Omotayo" position="CEO"/>
      <Footer />
    </>
  )
}

export default App
