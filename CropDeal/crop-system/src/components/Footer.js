import React from 'react';
import '../components/Footer.css'

const Footer = () => (
  <footer className="footer">
      <div>
      &copy; {new Date().getFullYear()} Copyright:{"Agriculture Crop System"}
      </div>     
  </footer>
);
  
export default Footer;