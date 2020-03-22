import React from 'react';

import './experience.styles.scss';

const ExperiencePage =() => (
        <div className="profile4" id="Experience">
        <h2 className="title">Experience</h2>
        <center>
            <p className='writing'> "Waste no more time arguing about what a good man should be. Be one."
            <br />- Marcus Aurelius</p>
        </center>
        <hr></hr>
        <div className="row">
            <div className="column">
                <b className="writing2">Student Team Lead</b>
                <p className="writing">Rowan University, Glassboro, NJ
                <br />September 2019 - December 2019</p>
            </div>
            <div className="column2">
                <p className="writing">Assumed the role of Product Owner,
                 Scrum Master and Developer. Conducted research with a team
                  of Rowan undergraduate students developing an Automated
                   Test Tool for GUI's (Graphical User Interfaces) for ASRC Federal.</p>
            </div>
        </div>
        <div className="row">
            <div className="column">
                <b className="writing2">Student Team Lead</b>
                <p className="writing">Rowan University, Glassboro, NJ
                <br />January 2020 - May 2020</p>
            </div>
            <div className="column2">
                <p className="writing">Created an Emergency Service Application 
                with a Team of Rowan undergraduate students that is designed to 
                help Emergency Services such as Police, Fire and EMS with 
                reducing crime rate in the Glassboro area.</p>
            </div>
        </div>
        <hr></hr>
        <h2 className="title2">Employment History</h2>
        <div className="row">
            <div className="column">
                <b className="writing2">Banquet Hall Host</b>
                <p className="writing">Indian Cultural Center, Marlton, NJ
                <br />September 2014 - Present</p>
            </div>
            <div className="column2">
            <ul className="no-bullets2">
                <li className="line">
                        <span className="writing">Trained and supervised new hosts and hostesses
                        on establishment policies and regulations</span>
                    </li>
                    <li className="line">
                        <span className="writing">Worked with management, servers, and staff 
                        to ensure maximum guest satisfaction</span>
                    </li>
                    <li className="line">
                        <span className="writing">Worked directly with customers</span>
                    </li>
                    <li className="line">
                        <span className="writing">Interacted and managed 3rd party entities 
                        such as Caterers, Decorators</span>
                    </li>
                </ul>
            </div>
        </div>
        <div className="row">
            <div className="column">
                <b className="writing2">Business Owner</b>
                <p className="writing">Hercules Service, Lindenwold NJ
                <br />August 2014 - Present</p>
            </div>
            <div className="column2">
            <ul className="no-bullets2">
                <li className="line">
                        <span className="writing">Built a business from the ground up</span>
                    </li>
                    <li className="line">
                        <span className="writing">Managed expenses, income and accounting</span>
                    </li>
                    <li className="line">
                        <span className="writing">Set policies, rules and regulations in place for 
                        business growth and stability</span>
                    </li>
                    <li className="line">
                        <span className="writing">Maintaned and increased clientele base and satisfaction annually</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
)

export default ExperiencePage;