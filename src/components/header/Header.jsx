import reactLogo from "../../assets/react.svg";
import { CTA } from "./CTA";
import es from "../../assets/es.png";
import HeaderSocials from "./HeaderSocials";
import "./header.css";
export default function Header() {
  return (
    <header>
      <div className="container header__container">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h5>Hello I'm</h5>
        <h1>Eslam Hassan</h1>
        <div>
          <a href="https://vitejs.dev" target="_blank"></a>
          <a target="_blank">
            <img src={reactLogo} className="logo" alt="React logo" />
          </a>
        </div>
        <h5
          style={{ marginLeft: "10px", marginTop: "5px" }}
          className="text-light"
        >
          React.js Developer
        </h5>{" "}
        <CTA />
        <div className="me">
          <img src={es} alt="me" />
        </div>
        <HeaderSocials />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}
