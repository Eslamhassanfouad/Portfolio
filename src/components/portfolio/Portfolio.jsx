import tt from "../../assets/tt.png";
import pizza from "../../assets/pizza.png";
import cin from "../../assets/cin.png";
import gym from "../../assets/gym.png";
import "./portfolio.css";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pizza} alt="" />
          </div>
          <h3>Ordering Pizza </h3>
          <div className=".portfolio__item-image">
            <a href="https://github.com" className="btn">
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={tt} alt="" />
          </div>
          <h3>TimeTracker Web-App</h3>
          <div className=".portfolio__item-image">
            <a href="https://github.com" className="btn">
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={cin} alt="" />
          </div>
          <h3>Cinema Ticket Reservations</h3>
          <div className=".portfolio__item-image">
            <a href="https://github.com" className="btn">
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={gym} alt="" />
          </div>
          <h3>Supplements E-commerce</h3>
          <div className=".portfolio__item-image">
            <a href="https://github.com" className="btn">
              Github
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
