import React from 'React'
import PropTypes from "prop-types";

const Stepform = ({
  services,
  multipleLocations,
  name,
  organization,
  NumberofAssociates,
  streetaddress,
  city,
  zipCode,
  email,
  phone,
  comments,
  captcha
}) => {
  
  
  return (

      <div>
        <Form>
           <label htmlFor="Services"></label> 
           <label htmlFor="Multiple Locations"></label> 
           <label htmlFor="Name"></label> 
           <label htmlFor="Organization"></label> 
           <label htmlFor="Number of Associates">Number of Associates</label> 
                <select id="NumberOfAsociates" name="cars">
                    <option value="small">0-100</option>
                    <option value="medium">101-250</option>
                    <option value="large">251-500</option>
                    <option value="Xlarge">500+</option>
                </select>
           <label htmlFor="Street Address"></label> 
           <label htmlFor="City"></label> 
           <label htmlFor="Zip Code"></label> 
           <label htmlFor="E-mail"></label> 
           <label htmlFor="Phone Number"></label> 
           <label htmlFor="Comments"></label> 
           <label htmlFor="Recapcha"></label> 
 
        </Form>
      </div>

  );
};

Stepform.propTypes = {
    services: PropTypes.string,
    multipleLocations: PropTypes.string,
    name: PropTypes.string,
    organization: PropTypes.string,
    population: PropTypes.string,
    streetAddress: PropTypes.string,
    city:PropTypes.string,
    zipCode: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    comments:PropTypes.string,
    captcha: PropTypes.string
};
Stepform.defaultProps = {
 services:"",
  multipleLocations:"",
  name:"",
  organization:"",
  population:"",
  streetaddress:"",
  city:"",
  zipCode:"",
  email:"",
  phone:"",
  comments: "",
  captcha:"How can we assist you?"
  };
  
  export default Stepform;
  