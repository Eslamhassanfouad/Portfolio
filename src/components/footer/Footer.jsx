import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
// import { FaGithubSquare } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <footer>
      {/* <a href="#" className="footer__logo"></a> */}
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/eso.vip">
          <FaFacebookF style={{ fontSize: "1.2rem" }} />
        </a>
        <a href="https://www.linkedin.com/in/eslam-hassan95">
          <BsLinkedin style={{ fontSize: "1.2rem" }} />
        </a>
        <a href="https://github.com/Eslamhassanfouad">
          <BsGithub style={{ fontSize: "1.2rem" }} />
        </a>
      </div>
      <div className="footer__copyright">
        <strong>&copy; EslamHassan. All rights reserved</strong>
      </div>
    </footer>
  );
}
