import React from 'react';
import Email from '../email/email.component';
import './emaillist.styles.css';

const EmailList = ({ emails , clickEmail}) => (

    <div className="emailList">
        {emails.map(email => (
            <Email key={email.id} email={email} onClick={clickEmail}/>
        ))}
    </div>

);

export default EmailList;