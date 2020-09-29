import React, { Component } from 'react'
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src="https://media-exp1.licdn.com/dms/image/C4E03AQHmS0bedqhEeQ/profile-displayphoto-shrink_400_400/0?e=1606953600&v=beta&t=Vxw0NUNrxAVyqUCPI53VmXiONNuwfHIuvEY1z_ZnSeI"
              alt=""
            />
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{resumeData.aboutMe}</p>
          </div>
        </div>
      </section>
    )
  }
}
