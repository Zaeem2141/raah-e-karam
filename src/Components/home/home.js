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
      <OurMission />
      <Statistics />
      <DomainsSection isScrollable={true} isBlack={true} />
      <RationListCard/>
    </>
  );
};
