import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Row } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import PortfolioDetailDialog from "components/PortfolioDetailDialog";
import "./Quote.scss";

const Quote = ({ className, frontmatter }) => {
  const [showDetail, setShowDetail] = React.useState(false);
  const handleShowDetail = React.useCallback(() => {
    setShowDetail(true);
  }, []);
  const handleHideDetail = React.useCallback(() => {
    setShowDetail(false);
  }, []);

  if (!frontmatter) {
    return null;
  }
  

  const { anchor, header: rootHeader, subheader: rootSubHeader } = frontmatter;

  return (
    
    <PageSection className={clsx("quote", className)} id={anchor}>
      <> 
      <Row>
      <a
          role="button"
          tabIndex='-1'
          data-toggle="modal"
          onClick={handleShowDetail}
        >
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
        </a>
      </Row>
      <PortfolioDetailDialog
        show={showDetail}
        onHide={handleHideDetail}
      />
    </>
    
    </PageSection>
    
  );
};

Quote.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Quote.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Quote;
