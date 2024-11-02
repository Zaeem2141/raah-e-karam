import DomainsSection from "../domains/domains";
import Slider from "../homeImageSlider/homeImageSlider";
import OurMission from "../mission/mission";
import { usePageTitle } from "../pageTitle/pageTitle";
import RationListCard from "../rashanListCard/rashanListCard";
import { Statistics } from "../stats/stats";

export const Home = () => {
  usePageTitle("Raah e Karam");
  return (
    <>
      <Slider />
      <OurMission
        heading={"Our Mission"}
        title={"Mission"}
        text={
          "At Raah e Karam, we believe that no one should go to bed hungry, be denied access to education, or suffer due to a lack of medical care. Our mission is to uplift the underprivileged by providing essential resources like food, school fees, and medical aid. We are committed to bringing hope and support to those in need, ensuring that every contribution goes directly to making a tangible difference in their lives. Together, with the compassion of our community, we strive to create a future where everyone has the opportunity to thrive. Your generosity fuels this vision—join us in making a meaningful impact today."
        }
      />
      <Statistics />
      <DomainsSection isScrollable={true} isBlack={true} />
      <RationListCard />
    </>
  );
};
