import "./HomePage.css"
import HeroSection from "./HeroSection";
import TrendingCollection from "./TrendingCollection";

const HomePage = () => {
  return(
    <div className={"HomePageContainer"}>
    <HeroSection/>
      <TrendingCollection/>

    </div>
  )
}; export default HomePage