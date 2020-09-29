import React from 'react'
import './ContactForm.css'

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: '',
    }
  }

  render() {
    const { status } = this.state
    return (
      <section id="contact">
        <p className='contact-message'>Let's Work Together</p>
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/mgeperpv"
          method="POST"
        >
          <input className='email-input' placeholder="Email" type="email" name="email" />
          <input className='email-input' placeholder="Phone" type="text" name="phone" />
          <input className='message-input' placeholder="Message" type="text" name="message" />
          {status === 'SUCCESS' ? <p>Thanks!</p> : <button>Submit</button>}
          {status === 'ERROR' && <p>Ooops! There was an error.</p>}
        </form>
      </section>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: 'SUCCESS' })
      } else {
        this.setState({ status: 'ERROR' })
      }
    }
    xhr.send(data)
  }
}
