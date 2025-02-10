import React from 'react';

function Footer() {
  return (
    <footer className="footer">

      <div className="logo">
        <span className="logo-purple">Studi</span>
        <span className="logo-orange">que</span>
      </div>

      <p className="created-with">
        Created with <span className="heart">❤️</span>
      </p>

      <div className="social">
        <h4 className="join-us">Join us on</h4>
        <div className="social-icons">

          <div className="icon">
            <a href="https://chat.whatsapp.com/EGvVrxAA9qI3p66W8g2OIO" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
              />
            </a>
          </div>

          <div className="icon">
            <a href="https://www.instagram.com/studique.in/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;