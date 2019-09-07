import React from 'react'
import Heading from '../components/Heading'

const Contact = () => (
  <section className="contact">
    <Heading text="contact us" />
    <div className="contact__outer">
      <form action="" className="form">
        <div>
          <label htmlFor="name" className="form__label">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="form__control"
            placeholder="First Last"
          />
        </div>
        <div>
          <label htmlFor="email" className="form__label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form__control"
            placeholder="user@domain.mail"
          />
        </div>
        <div>
          <label htmlFor="text" className="form__label">
            Message
          </label>
          <textarea name="text" id="text" rows={10} className="form__control" />
        </div>
        <div>
          <input type="submit" value="submit" className="form__submit" />
        </div>
      </form>
    </div>
  </section>
)

export default Contact
