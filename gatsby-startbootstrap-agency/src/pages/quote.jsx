import React from 'react'


const quote = () => {
    return (
        <div>
              <form
                  method="post"
                  name="contact"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  action="/thanks"
                >
                  <input
                    type="hidden"
                    name="contact-form"
                    value="contact-form"
                  />
                  <div hidden>
                    <label>
                      Don’t fill this out: <input name="bot-field" />
                    </label>
                  </div>
                  <div className="row uniform 50%">
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div className="12u">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        rows="4"
                      />
                    </div>
                  </div>
                  <ul className="actions">
                    <li className="form-submit">
                      <button type="submit" className="button">
                        Submit
                      </button>
                    </li>
                  </ul>
                </form>
            
        </div>
    )
}


export default quote