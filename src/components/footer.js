import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="footer-divider"></div>
      <img src="" alt="" />
      <ul className="link-list">
        <h3 className="list-title">Links</h3>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <ul className="other-list">
        <h3 className="list-title">Other</h3>
        <li>
          <Link to="*">User FAQs</Link>
        </li>
        <li>
          <Link to="*">Legal</Link>z
        </li>
        <li>
          <Link to="*">Privacy Policy</Link>
        </li>
        <li>
          <Link to="*">Terms and Conditions</Link>
        </li>
      </ul>
    </footer>
  );
}
