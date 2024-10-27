import React from "react";
import { Card } from "antd";
import Fee from "../../images/education.avif";
import food from "../../images/food1.avif";
import medicine from "../../images/medicine.avif";
import work from "../../images/work.avif";
import "./domains.css";

const DomainsSection = ({ isScrollable , isBlack=false}) => (
  <section  className="domains-section">
    <h2 className={isBlack ? "BlackHeading" : "CustomHeading"}>Our Domains</h2>
    <div className={isScrollable ? "scroll-container" : "grid-container"}>
      {[
        { title: "School Fee", imgSrc: Fee, description: "We support students by paying their fees, helping them continue their education without financial stress." },
        { title: "Food", imgSrc: food, description: "We distribute ration to families in need, ensuring they have basic food supplies for survival." },
        { title: "Medicine", imgSrc: medicine, description: "We provide medical aid and medicines to those who cannot afford healthcare and treatments." },
        { title: "Employment", imgSrc: work, description: "We help create employment opportunities for the less privileged, enabling them to earn a living with dignity." },
      ].map((card, index) => (
        <Card
          key={index}
          hoverable
          title={<strong>{card.title}</strong>}
          cover={<img alt={card.title} src={card.imgSrc} />}
          className="custom-card"
        >
          <p>{card.description}</p>
        </Card>
      ))}
    </div>
  </section>
);

export default DomainsSection;
