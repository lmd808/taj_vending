import React from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";


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
      .then(() => onHide())
      .catch((error) => alert(error))
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
        <Modal.Title id="contained-modal-title-vcenter">Contact </Modal.Title>
      </Modal.Header>
      <Modal.Body className="mx-auto">  
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
          <p>
          <input type="checkbox" id="snack" name="snack" value="Snack Services"/>
          <label htmlFor="snack"> Snack Services</label>
          <br/>
          <input type="checkbox" id="drink" name="drink" value="Drink Services "/>
          <label htmlFor="drink"> Drink Services</label>
          <br/>
          <input type="checkbox" id="coffee" name="coffee"  value="Coffee Services"/>
          <label htmlFor="coffee"> Coffee Services</label>
          </p>
          <br/>
          <h6>Do you have multiple locations?</h6>
          <p>
           <input type="checkbox" id="yesMulti" name="yes" value="yes"/>
           <label htmlFor="yesMulti">Yes</label> 
           <input type="checkbox" id="noSingular" name="no" value="no"/>
           <label htmlFor="noSingular">no</label> 
           </p>
           <br/>
          <h6>Name and Organization:</h6>
          <p>
          <label>
            Name:
            <input type="text" name="First Name" placeholder="First Name" onChange={handleChange} />
            <input type="text" name="Last Name" placeholder="Last Name" onChange={handleChange} />
            <br/>
          </label>
          <br/>
          <label>
            Organization: <input type="text" name= "organization" placeholder= "Organization" onChange={handleChange}/>
          </label>
          </p>
          <br/>
      <h6>Contact Info</h6> 
        <p>
          <label>
            Email Address: 
            <input type="email" name="email" placeholder="Jane@tajvending.com" onChange={handleChange} />
          </label>
          <br/>
          <label>
            Phone Number*
          <input type="tel" name="phone" placeholder="000-000-0000"  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={handleChange} />
          </label>

        </p>
        <br/>
        <h6>How can we help you?</h6>
        <p>
          <label>
            <textarea name="message" placeholder="Type here..." onChange={handleChange} />
          </label>
        </p>
        <p>
          <Button type="submit" variant="primary">Submit</Button>
        </p>
      </form>
      
      </Modal.Body>
      <Modal.Footer>
        <div className="mx-auto">
        <small><em>All calls and Emails will be responded to within 24 hours.</em></small>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

QuoteDetailDialog.propTypes = {
  onHide: PropTypes.func,
};

QuoteDetailDialog.defaultProps = {
  onHide: null,
};

export default QuoteDetailDialog;
