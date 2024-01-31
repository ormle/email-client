import React from "react";
import './emaildisplay.styles.css';

const EmailDisplay = ({ email }) => {

    if (!email) {
        return <div className="emaildisplay-container">No email selected</div>
    }

    const {id, from, address, time, message, subject, tag, read} = email;

    return (
        <div className='emaildisplay-container' 
        id={id}
        read={read} 
        tag={tag}>
            <h1>Subject: {subject}</h1>
            <hr />
            <h3>From: {from}{address}</h3>
            <hr />
            <p>Timestamp: {time}</p>
            <hr />
            <p>{message}</p>
        </div>
    )
};

export default EmailDisplay;