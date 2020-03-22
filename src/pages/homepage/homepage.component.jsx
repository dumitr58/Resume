import React from 'react';

import "./homepage.styles.scss";

const Homepage = () => (
    <div className='profile' id="Homepage">
        <h1 className='title'>Profile</h1>
        <center>
            <p className='writing'> I'm a full stack developper, that likes to get the job done</p>
            </center>
        <hr></hr>
        <div className="row">
            <div className="column">
                <h2 className="title2">Summary</h2>
                    <p className="writing">I am a computer scientist with a deep love for programming,
                     cyber security, and mathematical problem solving. My love of programming is not
                      limited and as I have interest in many forms of programming, I find that I spend
                       a lot of my free time researching and programming. I am dedicated to
                         finishing any job I start and I approach all my tasks with a relentless and
                          positive attitude.</p>
            </div>
            <div className="column">
                <img className='profile-picture' src={require('../../assets/Capture.PNG')} alt='website logo'></img>
            </div>
            <div className="column">
                <h2 className="title2">Details</h2>
                <b className="writing2">Name:</b>
                <p className='writing'>Robert Ionut Dumitrescu</p>
                <b className="writing2">Age:</b>
                <p className='writing'>26 years</p>
                <b className="writing2">Location:</b>
                <p className='writing'>Glassboro, New Jersey, United Sates</p>
            </div>
        </div>
    </div>
)

export default Homepage;