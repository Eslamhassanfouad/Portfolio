// import ess from "../../assets/ess.png";
import certificate3 from "../../assets/certificate3.png";
import { FaAward } from "react-icons/fa";
import { BsFolderCheck } from "react-icons/bs";
import "./about.css";

export default function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={certificate3} alt="abt_me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward />
              <h5>Experience</h5>
              <small>1 Year Experience</small>
            </article>

            <article className="about__card">
              <BsFolderCheck />
              <h5>Projects</h5>
              <small>20+</small>
            </article>
          </div>
          <p>
            Welcome! I'm Eslam, a certified Full-Stack Developer proficient in
            React and Django, trained at the ITI institute. ITI is a reputable
            institution certified by the Ministry of Communication in Egypt. I
            graduated from Cairo University and currently focus primarily on
            React development, though I also have experience in backend
            development. I've discovered my passion for frontend development,
            which is why I predominantly work in that area now.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
