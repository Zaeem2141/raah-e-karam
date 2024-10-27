import { usePageTitle } from "../pageTitle/pageTitle";
import "./aboutUs.css";
import DomainsSection from "../domains/domains";
import OurPartners from "../partners/partners";

export const AboutUs = () => {
  usePageTitle("About - Raah e Karam");
  return (
    <div className="about-us">
      {/* Intro Section */}
      <section className="intro-section-with-background">
        <div className="text-card">
          <h1>Raah e Karam</h1>
          <p>
            <strong>Raah e Karam</strong> is a non-profit, student-based
            organization with a mission to serve humanity by providing essential
            support to those in need. Founded with the spirit of charity and
            selflessness, we collect donations from generous individuals who
            want to make a real difference in the lives of the underprivileged.
          </p>
          <p>
            We focus on providing <strong>rashan supplies</strong> for families,{" "}
            <strong>fee assistance</strong> for students,
            <strong> medical aid</strong> for those who need it, and{" "}
            <strong>employment support</strong> to create sustainable
            livelihoods.
          </p>
          <p>
            Our approach is rooted in transparency. We ensure donors see how
            their contributions are used through proof like videos, images, and
            even invite them to accompany us during ration distribution.
          </p>
          <br />
          <br />
          <div className="foundation-info">
            <strong>Foundation Date:</strong>{" "}
            <span className="foundation-date">June 1, 2024</span>
            <strong>Foundation Area:</strong>{" "}
            <span className="foundation-area">Hafizabad, Pakistan</span>
          </div>
        </div>
      </section>
      <DomainsSection id="domainsSection" isScrollable={false} />
      <OurPartners />
    </div>
  );
};
