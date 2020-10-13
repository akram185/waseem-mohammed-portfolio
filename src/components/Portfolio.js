import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Portfolio.css'

class Portfolio extends Component {
  render() {
    return (
      <>
        <h1 className="my-work">Checkout My Work</h1>
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
    imageURL:
      'https://lh3.googleusercontent.com/fNqY3TLeVHVbFmfpqbNjaUj8JTNNAU3glzXf8jPcI41tbT7-fICAntqlH7FmqC4qI5d4WrPW8tGTL5Y4-HRDDNgV1nJDSQueqR4MTUe5dDzEaCSEdXMEZFIBTVGrLJOGxAmW0PZpR39_96h30tGfrDmXKRg1tVk7YuHqS6Fawu0SXmfx8U8hdjra-qMcvycpmiyAwWthlP84LIM_9P3tf9Om0TCY9BtvVtWxCAscnUO3rwkvoiO38z5aarujS0T706DSmCtOxoAkMGH63rAJ7ravy6HuePqYwX0oil5JtIH6Rnjig9dxDm8uUq776C7Jv7Tz--nmQvru1j7FNmJUIC8N2A1bQh6dtw25lhVqLJE0W8G71WUlswdRBuAdcUraMoRIrv2YS2HyLXaEbJwovZRC1WiHbjLpv4Vh0jq1XaJlehoE8gsyjhe474FfLPE-1AcCRumq-q82Nubn4MzT8uriR_Da8kjMZh4e8pOZDdWyNbUmqm63CLuYSj08SFySbQQLiMOtGxXYD1r-5E4N_KNJYVjR_Ql2p3NoOGKY1JtKABjHyMwl-1JJJCddWU1LfNe9e57daWDn-d427YX52BoEjlkHS_EBFoo2exJ3qiyoEfqXBX6UJCpqLcTUtRwsjZcPNpI7B0xOl2z4qDwhAAVUL_hteuNmujZ-QnOrrgO1DQZdKwcQmuIU2AxI=w1676-h958-no?authuser=0',
    liveDemo: 'https://the-door-nyc.netlify.app/',
    code: 'https://github.com/akram185/The-Door',
  },
  {
    title: 'EZ Rentals',
    description:
      'A fully functional Full-Stack application developed using Ruby on Rails on the Back-End and React, JavaScript, CSS, JSX on the Front-End. Web Page has user authentication, MVC, Full CRUD on Back-End and Front-End. Users have one to many associations with the cars and cars have many to many associations with the types.',
    imageURL:
      'https://lh3.googleusercontent.com/SVl7St9aCgrJgi7X0NmjL_aAqrtTHiSpsfH-JT5Yt3W9l3P0UcIvoNRYDOm4nu6oHGTFa3R9JEntZbWMrp-LudjTnKYKMIulZJvuCR27_E118E2C446aL6-m9_UAaXLW7alGN-xtehSDwHWjNT4w69Tx2f2_e0K4bNBox_ncfSNMgxiDUqovitbF_i5oS898kuysoVuDRWbiTliiPECNVIi5Au9jCq0AlsyymX5ay03WBrCSGiPChSAMWFKnUZM83XD5NmNGt12HIZ0kKo-6PNIqM_9xEZh2zbL5ZMoD_pmYT5ufzWlWHuY-j_iE4_w_AA44Xs9CvYi9FRbzZGv7KZ0COWEYSrkyQtPoRsWb70HPnercc-Rq-N0PelTr6QTzLKe8sDnsOkXQgnkWF_Hu8dXtxTUMYksMQ0-fGXkSpAX6EkigtinOtT_IxShgQ_67_2qX6J4CQTJd95uT3lKK6e0lN3tLGig-m3_1-BWT4iA844vojO5a-0Jfa6ByE4F-Gd5VzKsHALYiwGqWBkarwpxhEQse55pVIyHTe7xFgr_6bpJyrxpZMWRidHMgbKGwi1b7d_KbtIAEf7D1jrAqcP2Gl4ovZh5XZqdMCsz-HcV2xAJE8I00Ho_uzHWbnY0elH9rSj1rt8ht3amvE10J6UGDk5gVWtfknRKsqTJUeWvl44PxNS_g9RCei7UM=w1676-h954-no?authuser=0',
    liveDemo: 'https://ez-rentals.netlify.app/',
    code: 'https://github.com/akram185/EZ-Rentals',
  },
]
