import React from "react";
import "./prothfolio.css";
import Projects from "./Projects";
import car from "../../assets/car.png";
import bill from "../../assets/bills.png";
import carmgmt from "../../assets/carmgmt.jpg";

const Porthfolio = () => {
  return (
    <div className="prothfolio-container" id="portfolio">
      <div className="prothfolio-text">
        <div className="porthfolio-title">My Portfolio</div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iste quibusdam cupiditate quae? Earum in aut amet obcaecati omnis. Consectetur, fugit, cum tempora provident, ducimus animi exercitationem inventore asperiores vero totam quibusdam. Tenetur provident soluta perspiciatis, ullam aperiam aut temporibus maxime voluptas optio rerum ex, corporis, maiores aliquam exercitationem? Eius ipsum ad necessitatibus a et, placeat tempore debitis, aspernatur ipsa odio laboriosam in? Magnam quidem facere dolore id, quam repudiandae totam laborum quia officia.
        </p>
      </div>
      <div className="prothfolio-projects">
        <Projects
          title="CarDeals"
          img={car}
          link="https://github.com/ti-jagrit/CarDeals"
          desc="A system where users can Add car for selling, buy car, and predict car prices using Laravel and Decision Tree Algorithm."
        />
        <Projects
          title="Car Management"
          img={carmgmt}
          link="https://github.com/ti-jagrit/Car-Management"
          desc="A system where users can Add car for selling, buy car, and Request for meetings using PHP, HTML, CSS, and JS."
        />
        <Projects
          title="Bills"
          img={bill}
          link="https://github.com/ti-jagrit/Bills"
          desc="An efficient billing system with admin  can manage stock, product, user, and sub-admin, gaenerate bill, manages orders, create bills developed using Spring Boot,JSP, JPA, MYSQL, integrated payment method esewa and khalti, social login OAuth2."
        />
        <Projects
          title="Ecom"
          img={bill}
          link="#"
          desc="An Ecommerce system with admin is able to add project manage order and user can add to cart make payemnt and order using Spring Boot, JSP, MYSQL, JPA and role based authencation."
        />
      </div>
    </div>
  );
};

export default Porthfolio;
