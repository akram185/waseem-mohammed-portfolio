import React, { Component } from 'react'

class Portfolio extends Component {
  render() {
    return (
      <>
        <h1>Checkout my work!!</h1>
        <div className="container mt-5">
          <div className="row">
            <div className="col">
              <div className="card-deck">
                {movieData.map((movie) => (
                  <MovieCard {...movie} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Portfolio
const MovieCard = ({ title, year, description, imageURL }) => (
  <div className="card">
    <img className="card-img-top" src={imageURL} alt="Movie poster" />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      <p className="card-text">
        <small className="text-muted">{year}</small>
        <a target="_blank" href="https://royalemoto.netlify.app/">
          Live Demo
        </a>
        <a target="_blank" href="https://github.com/akram185/Royale-Moto">
          View Code
        </a>
      </p>
    </div>
  </div>
)

const movieData = [
  {
    title: 'High School Finder',
    description:
      'Everyone’s favorite family of superheroes is back in “Incredibles 2” – but this time Helen is in the spotlight, leaving Bob at home with Violet and Dash to navigate the day-to-day heroics of “normal” life.',
    imageURL:
      'https://lh3.googleusercontent.com/hIl-x5eTgDpZucecaTORsebgX4lsABPrThOmF7BUvYK8Ss95e1osFZuWw3TsYzJuwbqOsQ=s149',
  },
  {
    title: 'Royale Moto',
    description:
      'Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality.',
    imageURL:
      'https://lh3.googleusercontent.com/s4zTJ3SO4261PrFta_icRZNhOavSRcHsyi3OMkLS9Dx3HVBUkO2nL7nHDA6w0TOc4Jnjh8E=s149',
    liveDemo: 'https://royalemoto.netlify.app/',
    code: 'https://github.com/akram185/Royale-Moto',
  },
  {
    title: 'The Door',
    description:
      'Bohemian Rhapsody is a foot-stomping celebration of Queen, their music and their extraordinary lead singer Freddie Mercury. Freddie defied stereotypes and shattered convention to become one of the most beloved entertainers on the planet.',
    imageURL:
      'https://lh3.googleusercontent.com/YyzP8BJZHCRaa1qCKuLRAMo1BaeaBOkdZC-vX-0YL3CYpAm5uL_p2r0osPSbEzrgfiW3=s148',
  },
  {
    title: 'EZ Rentals',
    description:
      'Everyone’s favorite family of superheroes is back in “Incredibles 2” – but this time Helen is in the spotlight, leaving Bob at home with Violet and Dash to navigate the day-to-day heroics of “normal” life.',
    imageURL:
      'https://lh3.googleusercontent.com/9_hC2v9yV83zWgD882jCFxcfUXQl6d7WHyggDYBHMtD0dsIPWDmek_oKWPcIDkPl8Bor=s149',
  },
]
