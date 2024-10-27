import React from 'react';
import './partners.css';
import medicalstore from "../../images/medicalstore.avif"
import generalstore from "../../images/generalstore.avif"

const OurPartners = () => {
  const partners = [
    {
      category: "Medicine",
      name: "Mubeen Medical Store",
      address: "Vanikey Chowk, Hafizabad",
      imageUrl: medicalstore,
    },
    {
      category: "Rashan",
      name: "Sheikh Sooba General Store",
      address: "Daal Bazaar, Hafizabad",
      imageUrl: generalstore,
    },
  ];

  return (
    <section className="our-partners-section">
      <h2>Our Partners</h2>
      <p className="subheading">
        These are our official partners who support our cause with dedication and generosity.
      </p>

      <div className="partner-cards">
        {partners.map((partner, index) => (
          <div key={index} className="partner-card">
            <h3 className="category-heading">{partner.category}</h3>
            <img src={partner.imageUrl} alt={partner.name} className="partner-image" />
            <div className="partner-info">
              <h4>{partner.name}</h4>
              <p>Address: {partner.address}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPartners;
