import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import "./mynav.css";
import { useState } from "react";

export default function MyNav() {
  const [activeClass, setActiveClass] = useState("#");

  return (
    <nav className="nav">
      <a
        href="#"
        onClick={() => setActiveClass("#")}
        className={activeClass === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveClass("#about")}
        className={activeClass === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveClass("#experience")}
        className={activeClass === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      {/* <a
        href="#services"
        onClick={() => setActiveClass("#services")}
        className={activeClass === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a> */}
      <a
        href="#contact"
        onClick={() => setActiveClass("#contact")}
        className={activeClass === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}
