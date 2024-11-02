import { usePageTitle } from "../pageTitle/pageTitle";
import "./aboutUs.css";
import DomainsSection from "../domains/domains";
import OurPartners from "../partners/partners";
import OurMission from "../mission/mission";

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
      <OurMission
        page={"about"}
        heading="Families Being Targeted"
        title="To Whom Raah-e-Karam Provides Support"
        text={
          <>
            <p style={{ marginBottom: "1.5em" }}>
              Raah-e-Karam is a charitable organization dedicated to supporting
              those in need, particularly widows, hardworking "white-collar"
              individuals who find it difficult to seek help, and others without
              representation or support.
            </p>
            <p style={{ marginBottom: "1.5em" }}>
              Our mission is rooted in compassion and dignity, focusing on four
              essential areas:
            </p>
            <ol style={{ marginBottom: "1em", lineHeight: "1.6" }}>
              <li>
                <strong>Education</strong>: We believe education is a powerful
                tool for change. For students with the passion to learn but
                lacking resources, we provide the support they need to pursue
                their dreams and unlock a brighter future.
              </li>
              <li>
                <strong>Employment Opportunities</strong>: For families with
                able members willing to work but without the means to earn, we
                offer pathways to sustainable livelihoods. Our initiatives
                empower these families to become self-sufficient, fostering
                dignity and stability.
              </li>
              <li>
                <strong>Food Assistance</strong>: We understand that food
                security is fundamental. By providing essential food supplies,
                we help families meet their basic needs, giving them the
                strength to work towards a more secure future.
              </li>
              <li>
                <strong>Medicine</strong>: Access to healthcare is a basic
                right, yet many struggle to afford it. We offer support for
                medicines and medical care to ensure that health challenges do
                not become a barrier to a better life.
              </li>
            </ol>
            <p>
              At Raah-e-Karam, we are committed to uplifting individuals and
              families, breaking the cycle of poverty, and spreading hope and
              compassion to those who need it most.
            </p>
          </>
        }
        isShowButton={false}
      />

    </div>
  );
};
