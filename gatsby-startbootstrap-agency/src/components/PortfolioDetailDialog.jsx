import React from "react";
import PropTypes from "prop-types";
import { Modal, Button, Row, Col } from "react-bootstrap";

import './portfoliodetaildialog.scss'



function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const QuoteDetailDialog = ({
  onHide,
  ...restProps

}) => {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const thankYou = ()=> {
    console.log('Success! Thank You!')
    onHide()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => thankYou())
      .catch((error) => error)
  }

   return (
    <Modal
      {...restProps}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Get Started with a Quote: </Modal.Title>
      </Modal.Header>
      <Modal.Body className="mx-auto">  
      <Row className= "text-center">
        <Col/>
        <Col sm={10}>
        <Row><span><em>To begin a quote, fill out the form below and press submit. It is that easy! We look forward to hearing from you.</em></span>
        </Row>
        </Col>
        <Col/>
      </Row>
      <hr/>
      <form
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        
          <h6>Which Services are you interested in?</h6>
          <ul>
            <li><label htmlFor="snack">
          <input type="checkbox" className="check-box" id="snack" name="snack" value="Snack Services"/>
          Snack Services</label></li>
          <li>
          <label htmlFor="drink"> 
          <input type="checkbox" className="check-box" id="drink" name="drink" value="Drink Services "/>
          Drink Services</label>
          </li>
          <li>
          <label htmlFor="coffee">
          <input type="checkbox" className="check-box" id="coffee" name="coffee"  value="Coffee Services"/>
          Coffee Services</label>
          </li>
          </ul>

          <h6>Do you have multiple locations?</h6>
          <ul>
          <li>
          <label htmlFor="yesMulti">
          <input type="checkbox" className="check-box" id="yesMulti" name="yes" value="yes"/>
          Yes</label> 
          </li>
          <li>
          <label htmlFor="noSingular">
          <input type="checkbox" className="check-box inlineBox" id="noSingular" name="no" value="no"/>
          No</label> 
          </li>
          </ul>
          <hr/>
          <h6>Contact Information: </h6>
          <label className='form-input'>
            First Name:
          <input type="text" name="First Name" placeholder="Jane" className="form-input-size" onChange={handleChange} required />
          </label>
          <label className="form-input">
            Last Name:
            <input type="text" name="Last Name" placeholder="Doe" className="form-input-size" onChange={handleChange} required />
          </label>
          <label className='form-input'>
            Organization (Optional):
          <input type="text" name= "organization" placeholder= "Taj Vending" className="form-input-size" onChange={handleChange} required/>
          </label>
          <label className= "form-input">
            Email Address: 
            <input type="email" name="email" placeholder="Jane@tajvending.com" className= "form-input-size" onChange={handleChange} required/>
          </label>
          <label className= "form-input">
            Phone Number: (No Dashes) 
          <input type="tel" name="phone" placeholder="000-000-0000"  pattern="[0-9]{3}[0-9]{3}[0-9]{4}" className="form-input-size" onChange={handleChange} required/>
          </label>
      <hr/>
        <h6>How can we help you?</h6>
          <label>
            <textarea name="message" placeholder="Type here..." onChange={handleChange} />
          </label>
        <div>
          <Button type="submit" variant="primary">Submit</Button>
        </div>
      </form>
      
      </Modal.Body>
      <Modal.Footer>
        <div className="mx-auto">
        <small><em>All calls and emails will receive a response within 24 hours.</em></small>
        </div>
      </Modal.Footer>
    </Modal>
  ) 
};

QuoteDetailDialog.propTypes = {
  onHide: PropTypes.func
};

QuoteDetailDialog.defaultProps = {
  onHide: null,
};

export default QuoteDetailDialog;
