import "../css/Footer.css";

export default function Footer() {
  return (
    <div className="text-center footer-away">
      <p>
        <a href="https://github.com/joshcord99" target="_blank">
          <img src="/githubcat.png" className="footerImage" alt="github-logo" />
        </a>

        <a
          href="https://www.linkedin.com/in/joshua-cordial-9550ba1aa/"
          target="_blank"
        >
          <img
            src="/linkdnlogo.png"
            className="footerImage"
            alt="linkdn-logo"
          />
        </a>
      </p>
    </div>
  );
}
