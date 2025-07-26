import Header from "./static/Header"
import Footer from "./static/Footer"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Skills from "./components/Skills"
import Project from "./components/Project"




function App() {
  

  return (
    <>
    <Header/>
    <div id="home"><Home/></div>
    <div id="about"><About/></div>
    <div id="project"><Project/></div>
    <div id="skills"><Skills/></div>
    <div id="contact"><Contact/></div> 
    <Footer/>
    </>
  )
}

export default App
