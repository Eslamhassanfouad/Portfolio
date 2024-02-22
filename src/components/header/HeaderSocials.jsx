import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { CgMail } from "react-icons/cg";

export default function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href=" https://www.linkedin.com/in/eslam-hassan95" target="__blank">
        <BsLinkedin />
      </a>
      <a
        style={{ fontSize: "20px" }}
        href="mailto:eslamhassannew@gmail.com"
        target="_blank"
      >
        <CgMail />
      </a>
      <a href="https://wa.me/+201123132632" target="__blank">
        <BsWhatsapp />
      </a>
    </div>
  );
}
