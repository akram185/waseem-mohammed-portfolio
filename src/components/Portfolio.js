import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Portfolio.css'

class Portfolio extends Component {
  render() {
    return (
      <>
        <h1 className="my-work">Check Out My Work</h1>
        <div>
          <div>
            <div>
              <div>
                {workData.map((work) => (
                  <WorkCard {...work} />
                ))}
                \
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Portfolio
const WorkCard = ({ title, description, imageURL, liveDemo, code }) => (
  <>
    <section id="works">
      <div className="container">
        <div className="col">
          <div className="card-works">
            {/* <h5 className="card-title">{title}</h5> */}
            <img className="card-img" src={imageURL} />
            <p className="card-description">{description}</p>
            <p>
              <button className="demo1">
                <a target="_blank" href={liveDemo}>
                  Live Demo
                </a>
              </button>
              <button className="demo">
                <a target="_blank" href={code}>
                  View Code
                </a>
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
)

const workData = [
  {
    title: 'High School Finder',
    description:
      'Built an amazing web application using vanilla JS, high level CSS and Dynamic HTML. Web Page takes user input and displays the results of the highschool in each borough on the DOM.',
    imageURL:
      'https://i.ibb.co/tq6Yp4w/Screen-Shot-2020-09-25-at-5-07-55-PM.png',
    liveDemo: 'https://pages.git.generalassemb.ly/akram185/High-School-Finder/',
    code: 'https://git.generalassemb.ly/akram185/High-School-Finder',
  },
  {
    title: 'Royale Moto',
    description:
      'A full-stack web application developed using React, JavaScript, Bootstrap, Airtable, Node.js. Web Page displays the collection of motorcycles. The cool feature of this app is that the user can add motorcycles of their choice to the collection.',
    imageURL: 'https://i.ibb.co/LZsYFKd/p2-pic.png',
    liveDemo: 'https://royalemoto.netlify.app/',
    code: 'https://github.com/akram185/Royale-Moto',
  },
  {
    title: 'The Door',
    description:
      'Reproduced a high fidelity UX design mock-up in an agile team using React, React Router, Express, Mongoose, MongoDB, JavaScript, JSX, CSS, Formik and Bootstrap. Deployed Back-End through Heroku and Front-End through Netlify. Web Page was faithfully recreated in a fully-functional format. CRUD was implemented on the Back-End and the Front-End.',
    imageURL: 'https://i.ibb.co/3kDJBsj/p3-pic.png',
    liveDemo: 'https://the-door-nyc.netlify.app/',
    code: 'https://github.com/akram185/The-Door',
  },
  {
    title: 'EZ Rentals',
    description:
      'A fully functional Full-Stack application developed using Ruby on Rails on the Back-End and React, JavaScript, CSS, JSX on the Front-End. Web Page has user authentication, MVC, Full CRUD on Back-End and Front-End. Users have one to many associations with the cars and cars have many to many associations with the types.',
    imageURL: 'https://i.ibb.co/D8p3gVG/p4-pic.png',
    liveDemo: 'https://ez-rentals.netlify.app/',
    code: 'https://github.com/akram185/EZ-Rentals',
  },
]
