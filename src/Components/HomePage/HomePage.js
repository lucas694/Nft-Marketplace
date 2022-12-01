import "./HomePage.css"
import HeroSection from "./HeroSection";
import TrendingCollection from "./TrendingCollection/TrendingCollection";
import TopCreators from "./TopCreators/TopCreators";
import BrowseCategories from "./BrowseCategories/BrowseCategories";
import NftHighlight from "./NftHighlight";
import SubscribeSec from "./SubscribeSec";
import HowItsWorks from "./HowItsWorks";
import Footer from "../Footer";

const HomePage = () => {
  return(
    <div className={"HomePageContainer"}>
    <HeroSection/>
      <TrendingCollection/>
      <TopCreators/>
      <BrowseCategories/>
      <NftHighlight/>
      <SubscribeSec/>
      <HowItsWorks/>
      <Footer/>

    </div>
  )
}; export default HomePage