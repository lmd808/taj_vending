import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import PageSection from "components/PageSection";
import PortfolioDetailDialog from "components/PortfolioDetailDialog";
import './GetStarted.scss'

function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&') 
  }
  

const GetStarted = ({ className, frontmatter }) => {
    const {anchor, header, subheader} = frontmatter;
    const [showDetail, setShowDetail] = React.useState(false);
    const handleShowDetail = React.useCallback(() => {
        setShowDetail(true);
    }, []);
    const handleHideDetail = React.useCallback(() => {
        setShowDetail(false);
    }, []);
    
    
    return (

        <PageSection className={className} id={anchor}>
            <div id="bounce" className="particleContainer">
                <a
                    role="button"
                    tabIndex={-1}
                    className="linkToModal"
                    data-toggle="modal"
                    onClick={handleShowDetail}>
                <Row className="justify-content-center">
                    <Col lg={8} className="text-center">
                    <h1 className="mt-0">{header}</h1>
                    <h2 className="mt-0">Let us know what you need!</h2>
                    
                    </Col>
                </Row>
                </a>
                <PortfolioDetailDialog
                show={showDetail}
                onHide={handleHideDetail}
            />
        </div>
        </PageSection>  
        
      
      
    )
}

GetStarted.propTypes = {
    className: PropTypes.string,
    frontmatter: PropTypes.object,
  };
  
  GetStarted.defaultProps = {
    className: null,
    frontmatter: null,
  };
export default GetStarted;
