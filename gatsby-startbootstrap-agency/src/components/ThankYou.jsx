import React from 'react'


const submissionStyles = {
    container: {
        minHeight: '10em',
        display: 'table-cell',
        verticalAlign: 'middle'
    },
    header:{
        paddingTop: '10px',
        textAlign: 'center'
    },
    subheader:{
        paddingTop: '10px',
        textAlign: 'center'
    } 


}

const ThankYou = () => {
    return (
        <div styles={submissionStyles.container}>
            <h1 style={submissionStyles.header}>Thank you!</h1>
            <h6 style={submissionStyles.subHeader}>We received your submission and will be in touch shortly.</h6>
        </div>
    )
}



export default ThankYou