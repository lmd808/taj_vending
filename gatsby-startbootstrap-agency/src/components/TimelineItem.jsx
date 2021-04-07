import React from "react";
import PropTypes from "prop-types";
import "./TimelineItem.scss";

const TimelineItem = ({
  header,
  subheader,
  content,
}) => {
  const headerPart = header ? <h4>{header}</h4> : null;
  const subheaderPart = subheader ? <h4 className="subheading">{subheader}</h4> : null;

  
  return (

      <div>
        <div>
          {headerPart}
          {subheaderPart}
        </div>
        <div className="mx-auto text-center col-lg-8">
          <p className="text-muted">{content}</p>
        </div>
      </div>

  );
};

TimelineItem.propTypes = {
  header: PropTypes.string,
  subheader: PropTypes.string,
  content: PropTypes.string,
};

TimelineItem.defaultProps = {
  header: "",
  subheader: "",
  content: "",
};

export default TimelineItem;
