import React from 'react'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-containers container-xl d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <a href="#Contact">Contact</a>
          <a
            href="https://doubtbuddy.com/privacy-policy"
            target="_blank"
            rel="noreferrer"
          >
            Policy
          </a>
          <a href="https://doubtbuddy.com/tnc" target="_blank" rel="noreferrer">
            Terms
          </a>
        </div>

        <div>
          <a
            href="https://twitter.com/doubtbuddy"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/twitter.png" alt="" />
          </a>
          <a
            href="https://m.facebook.com/doubtbuddy"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/facebook.png" alt="" />
          </a>
          <a
            href="https://www.instagram.com/doubtbuddyapp/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/insta.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
