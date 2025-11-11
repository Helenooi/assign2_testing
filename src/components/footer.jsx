import "../css/Footer.css"; // Import the separate CSS file

const Footer = () => {
  const TwitterIcon = () => (
    <svg
      width="30"
      height="30"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
    >
      <path d="M22.23 5.924c-.81.36-1.68.6-2.59.71.93-.56 1.64-1.45 1.97-2.52-.87.52-1.84.91-2.87 1.11a4.02 4.02 0 0 0-2.97-1.29c-2.21 0-4 1.79-4 4 0 .31.03.61.1.9C7.69 7.97 4.1 5.84 1.67 2.45A4.006 4.006 0 0 0 3.1 7.4c-.74 0-1.45-.23-2.07-.62-.02 2.04 1.47 3.75 3.52 4.14-.68.18-1.4.24-2.14.09a4.01 4.01 0 0 0 3.74 2.8 8.05 8.05 0 0 1-4.95 1.7c-.32 0-.64-.02-.96-.06 2.68 1.72 5.88 2.69 9.1 2.69 10.9 0 16.9-9.04 16.9-16.9 0-.26-.01-.51-.03-.76.76-.55 1.42-1.24 1.92-2.02z" />
    </svg>
  );
  

  const FacebookIcon = () => (
    <svg
      width="30"
      height="30"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
    >
      <path d="M20 0H4C1.79 0 0 1.79 0 4v16c0 2.21 1.79 4 4 4h8v-9h-3v-4h3V8c0-4.42 3.58-8 8-8h3v3h-2c-2.21 0-4 1.79-4 4v4h4l-1 4h-3v9h6c2.21 0 4-1.79 4-4V4c0-2.21-1.79-4-4-4z" />
    </svg>
  );

  const InstagramIcon = () => (
    <svg
      width="30"
      height="30"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.33 3.608 1.304.975.975 1.242 2.242 1.304 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.33 2.633-1.304 3.608-.975.975-2.242 1.242-3.608 1.304-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.33-3.608-1.304-.975-.975-1.242-2.242-1.304-3.608C2.175 15.634 2.163 15.254 2.163 12s.012-3.584.07-4.85c.062-1.366.33-2.633 1.304-3.608.975-.975 2.242-1.242 3.608-1.304C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.737 0 8.332.015 7.052.072c-1.705.077-3.22.553-4.415 1.748C1.442 3.017.966 4.532.889 6.237.832 7.518.817 7.923.817 12s.015 4.482.072 5.763c.077 1.705.553 3.22 1.748 4.415 1.195 1.195 2.71 1.671 4.415 1.748 1.281.057 1.686.072 5.048.072s3.767-.015 5.048-.072c1.705-.077 3.22-.553 4.415-1.748 1.195-1.195 1.671-2.71 1.748-4.415.057-1.281.072-1.686.072-5.048s-.015-3.767-.072-5.048c-.077-1.705-.553-3.22-1.748-4.415C20.269.625 18.754.149 17.049.072 15.768.015 15.363 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );

  return (
    <div className="main-container">
      {/* Your page content here */}
      <footer className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>We do our best to enhance your experience during your journey in Penang.</p>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>Email: PenangOneBetter@gmail.com</li>
            <li>Phone: +012 345 6789</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul className="social-links">
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Twitter"
                className="social-link"
              >
                <TwitterIcon />
                <span>Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook"
                className="social-link"
              >
                <FacebookIcon />
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram"
                className="social-link"
              >
                <InstagramIcon />
                <span>Instagram</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Penang Attraction. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
