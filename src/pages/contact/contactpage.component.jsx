import React from 'react';

import './contactpage.styles.scss';

const ContactPage = () => (
    <div className="profile5" id="Contact">
        <h2 className="title">Contact</h2>
        <center>
            <p className='writing'> "If you always put limits on anything you do,
            physical or anything else,
            <br />It will spread into your work and into your life. There are no limits.
            <br />There are only plateaus, and you must not stay there, you must go beyond them."
            <br />- Bruce Lee </p>
            </center>
        <hr></hr>
        <div className="row">
            <div className="column">
                <ul className="no-bullets3">
                    <li className="line">
                    <a className="writing2" 
                    href="https://myresumebucket160837-dev.s3.us-east-2.amazonaws.com/RobertDumitrescu_Resume.pdf"
                    target="_blank" rel="noopener noreferrer">
                        <span className="glyphicon glyphicon-file"></span>
                        <span className="writing">Resume</span>
                    </a>
                    </li>
                </ul>
            </div>
            <div className="column2">
                <ul className="no-bullets3">
                    <li className="line">
                        <a className="writing2" href="mailto:robert.dumitrescu94@yahoo.com">
                            <span className="glyphicon glyphicon-envelope"></span>
                            <span className="writing2">robert.dumitrescu94@yahoo.com</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
)

export default ContactPage;