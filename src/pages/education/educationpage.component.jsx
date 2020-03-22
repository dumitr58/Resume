import React from 'react';

import "./educationpage.styles.scss";

const EducationPage = () => (
    <div className="profile2" id="Education">
        <h2 className="title">Education</h2>
        <center>
            <p className='writing'> "Education is not the learning of facts,
            but the training of the mind to think."
            <br />- Albert Einstein </p>
            </center>
        <hr></hr>
        <div className="row">
            <div className="column">
                <b className="writing2">Rowan University</b>
                <p className="writing">September 2018 - May 2020</p>
            </div>
            <div className="column2">
                <b className="writing2">Bachelor of Science in Computer Science</b>
                <p className="writing">GPA: 4.0 - Dean's List, summa cum laude
                <br />Concentration: Cybersecurity which follows the guidelines of 
                National Security Agency (NSA) and the Department of 
                Homeland Security (DHS) for Academic Excellence in Cyber Defense (CAE-CD) </p>
            </div>
        </div>
        <div className="row">
            <div className="column">
                <b className="writing2">Camden County College</b>
                <p className="writing">September 2016 - May 2018</p>
            </div>
            <div className="column2">
                <b className="writing2">Associate of Science in Computer Science</b>
                <p className="writing">GPA: 3.7 - Dean's List, cum lade
                <br />President of Mu Alpha Theta Math Honor Society</p>
            </div>
        </div>
    </div>
)

export default EducationPage;