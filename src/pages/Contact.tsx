// src/pages/Contact.tsx 
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-primary mb-4">Contact - Bears of the World</h1>
      <div className="row">
        <div className="col-12">
          <img 
            src="https://bearsapi.ryanhunter.ca/images/site_contact.webp" 
            alt="About Bears" 
            className="img-fluid mb-3"
            style={{ width: '800px', height: '615px', objectFit: 'cover' }}
          />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
