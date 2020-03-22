import React from 'react';
import { ReactComponent as Logo } from '../../assets/RDLogo.svg'
import { Link } from 'react-scroll';

import './header.styles.scss';


class Header extends React.Component {
render () { return(
    <div className='header'>
        <div className='logo-container' >
            <Logo className='logo' />
        </div>
        <div className='options'>
        <Link className='option'activeClass="active"
      to="Homepage"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={-50}
      duration={500}
      delay={250}
      isDynamic={true}
      onSetActive={this.handleSetActive}
      onSetInactive={this.handleSetInactive}
      ignoreCancelEvents={false}>Profile</Link>
      <Link className='option'activeClass="active"
      to="Education"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={-70}
      duration={500}
      delay={250}
      isDynamic={true}
      onSetActive={this.handleSetActive}
      onSetInactive={this.handleSetInactive}
      ignoreCancelEvents={false}>Education</Link>
      <Link className='option'activeClass="active"
      to="Skills"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={-70}
      duration={500}
      delay={250}
      isDynamic={true}
      onSetActive={this.handleSetActive}
      onSetInactive={this.handleSetInactive}
      ignoreCancelEvents={false}>Skills</Link>
      <Link className='option'activeClass="active"
      to="Experience"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={-70}
      duration={500}
      delay={250}
      isDynamic={true}
      onSetActive={this.handleSetActive}
      onSetInactive={this.handleSetInactive}
      ignoreCancelEvents={false}>Experience</Link>
      <a className='option' href="https://myresumebucket160837-dev.s3.us-east-2.amazonaws.com/RobertDumitrescu_Resume.pdf" 
      target="_blank" rel="noopener noreferrer">Resume</a>
      <Link className='option'activeClass="active"
      to="Aboutme"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={-70}
      duration={500}
      delay={250}
      isDynamic={true}
      onSetActive={this.handleSetActive}
      onSetInactive={this.handleSetInactive}
      ignoreCancelEvents={false}>About me</Link>
      <Link className='option'activeClass="active"
      to="Contact"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={-70}
      duration={500}
      delay={250}
      isDynamic={true}
      onSetActive={this.handleSetActive}
      onSetInactive={this.handleSetInactive}
      ignoreCancelEvents={false}>Contact</Link>
        </div>
    </div>
    )
}

}

export default Header;