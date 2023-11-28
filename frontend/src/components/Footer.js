import React from 'react';

const Footer = () => {
  const footerStyles = {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    padding: '5px',
    textAlign: 'center',
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    fontSize: '12px',
  };

  return (
    <div>
      <footer style={footerStyles}>
        <p>&copy; 2023 Team Just Nerds. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
