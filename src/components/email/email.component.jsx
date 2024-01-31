import React, { useState } from "react";
import './email.styles.css';

const Email = ({ email , onClick }) => {

    const {id, from, address, time, message, subject, tag, read} = email;
    
    //State to hold background color
    const [backgroundColor, setBackgroundColor] = useState(read ? '#0081A7' : '#9CE7FC');

    //clicking an email to show its contents
    const handleClick = () => {
        onClick(email);
        //Changing background color if it has been read
        email.read = !email.read;
        setBackgroundColor(backgroundColor === '#0081A7' ? '#9CE7FC' : '#0081A7');
    }

    return (
        <div 
        id={id} 
        onClick={handleClick} 
        className={'email-container'} 
        read={read} 
        tag={tag}
        message={message}
        style={{backgroundColor}}>
            <h2>Subject: {subject}</h2>
            <p>From: {from}{address}</p>
            <p>Time: {time}</p>
        </div>
    )
};

export default Email;