import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">
          <span style={{ color: '#8a2adf' }}>Studi</span>
          <span style={{ color: '#f98806' }}>que</span>
        </h1>
      </div>
      <nav className="header-center">
        <ul className="nav-links">
          <li><Link href="/" legacyBehavior><a className="active">Home</a></Link></li>
          <li><Link href="/about" legacyBehavior><a>About Us</a></Link></li>
          <li><Link href="/faq" legacyBehavior><a>FAQ</a></Link></li>
          <li><Link href="/contact" legacyBehavior><a>Contact Us</a></Link></li>
        </ul>
      </nav>
      <div className="header-right">
        <button className="btn btn-login">Log In</button>
        <button className="btn btn-signup">Create Account</button>
      </div>
    </header>
  );
}

export default Header;