import Slider from "../homeImageSlider/homeImageSlider"
import OurMission from "../mission/mission"
import { usePageTitle } from "../pageTitle/pageTitle"
import { Statistics } from "../stats/stats"

export const Home = () =>{
    usePageTitle("Raah e Karam")
    return(
        <>
        <Slider/>
        <OurMission/>
        <Statistics/>
        </>
    )
}