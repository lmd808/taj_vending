import React from "react";
import PropTypes from "prop-types";
import { Row } from "react-bootstrap";
import PageSection from "components/PageSection";
import PortfolioDetailDialog from "components/PortfolioDetailDialog";
import './GetStarted.scss'
  

const GetStarted = ({ className, frontmatter }) => {
    const {anchor, header} = frontmatter;
    const [showDetail, setShowDetail] = React.useState(false);
    const handleShowDetail = React.useCallback(() => {
        setShowDetail(true);
    }, []);
    const handleHideDetail = React.useCallback(() => {
        setShowDetail(false);
    }, []);
    
    
    return (

        <PageSection className={className} id={anchor}>
            <div id="bounce">
                <a
                    role="button"
                    tabIndex={-1}
                    className="linkToModal"
                    data-toggle="modal"
                    onClick={handleShowDetail}>
                <Row className="justify-content-center text center">
                    
                    <h1 className="mt-0 quote-header">{header}</h1>
                    <h3 className="mt-0 quote-subheader">Click and Get Quoted</h3>
                    
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
