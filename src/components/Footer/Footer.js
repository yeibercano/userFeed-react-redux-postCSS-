import React, { Component } from 'react'

const Footer = () => {
	const date = new Date().getFullYear();

  return (
    <footer className="footerBackground"> 
      <h3 className='footerText'>User Feed &copy; { date } &nbsp; | &nbsp;</h3>
      <h3 className='footerText'><a href="#"> github project</a></h3>
    </footer>
  );
}

export default Footer;