import React from "react";
import PropTypes from "prop-types";

import Image from "components/Image";

const Client = ({ imageFileName, href, imageAlt}) => {
  const imgPart = (
    <Image className="img-fluid d-block mx-auto" fileName={imageFileName} alt={imageAlt} />
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {imgPart}
      </a>
    );
  }

  return imgPart;
};

Client.propTypes = {
  imageFileName: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  href: PropTypes.string,
};

Client.defaultProps = {
  href: null,
};

export default Client;
