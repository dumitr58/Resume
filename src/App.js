import React from 'react';
import './App.css';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import EducationPage from './pages/education/educationpage.component';
import SkillsPage from './pages/skills/skillspage.component';
import ExperiencePage from './pages/experience/experience.component';
import ContactPage from './pages/contact/contactpage.component';
import AboutmePage from './pages/aboutme/aboutmepage.component';

class App extends React.Component {
  render() {
    return (
      
    <div>
      <Header/>
      <Homepage/>
      <EducationPage/>
      <SkillsPage/>
      <ExperiencePage/>
      <AboutmePage/>
      <ContactPage/>
    </div>
  );
}  
}

export default App;