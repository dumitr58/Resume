import React from 'react';

import './aboutmepage.styles.scss';

const Aboutme = () => (
    <div className="profile6" id="Aboutme">
        <h2 className="title">About me</h2>
        <center>
            <p className='writing'> "No great thing is created suddenly, any more than a bunch of grapes
            or a fig. 
            <br />If you tell me that you desire a fig. I answer that there must be time.
            <br />Let it first blossom then bear fruit, then ripen."
            <br />- Epictetus </p>
            </center>
        <hr></hr>
        <p className="writing">I am a computer scientist with a deep love for programming,
                     cyber security, and mathematical problem solving. My love of programming is not
                      limited and as I have interest in many forms of programming, I find that I spend
                       a lot of my free time researching and programming. I am a diligent and hardworking
                        person who is undeterred by responsibilities and challenges. I am dedicated to
                         finishing any job I start and I approach all my tasks with a relentless and
                          positive attitude. I firmly believe that anything is possible if you give
                           it everything you have. I am a team player who can pick up new skills and
                            learn things quickly as I constantly strive to become better. I am always
                             looking to present the work of my team as the best it can possibly be and nothing less.
                              I believe knowledge is the key to success. </p>
        
        <div className="row">
            <div className="column">
                <b className="title2">Personal Interests</b>
                <ul className="no-bullets">
                <li className="line">
                        <span className="score">
                            <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                            <span className="writing">Programming: Websites, Apps, AI, business, gaming</span>
                        </span>
                </li>
                <li className="line">
                        <span className="score">
                            <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                            <span className="writing">Martial arts & Weightraining, practiced and competed as a teen.
                            Now just for fun and health</span>
                        </span>
                </li>
                <li className="line">
                        <span className="score">
                            <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                            <span className="writing">Big fan of animals, I love dogs especially.</span>
                        </span>
                </li>
                <li className="line">
                        <span className="score">
                            <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                            <span className="writing">I prefer table games like table tennis
                            pool, but when I have the time I indulge in some video games as well
                            </span>
                        </span>
                </li>
                <li className="line">
                        <span className="score">
                            <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                            <span className="writing">I like keeping up with technology and 
                            I also like cars.</span>
                        </span>
                </li>
                </ul>
            </div>
        </div>
    </div>
)

export default Aboutme;