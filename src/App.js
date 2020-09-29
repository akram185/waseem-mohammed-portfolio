import React, { Component } from 'react'
import Header from './components/Header'
import About from './components/About'
import Portfolio from './components/Portfolio'
import ContactUs from './components/ContactForm'
import Footer from './components/Footer'
import resumeData from './resumeData'
import Skills from './components/Skills'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Skills resumeData={resumeData} />
        <Portfolio resumeData={resumeData} />
        <ContactUs resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </div>
    )
  }
}

export default App
