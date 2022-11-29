import "./HomePage.css"
import HeroSection from "./HeroSection";
import TrendingCollection from "./TrendingCollection/TrendingCollection";
import TopCreators from "./TopCreators/TopCreators";
import BrowseCategories from "./BrowseCategories/BrowseCategories";
import NftHighlight from "./NftHighlight";
import SubscribeSec from "./SubscribeSec";

const HomePage = () => {
  return(
    <div className={"HomePageContainer"}>
    <HeroSection/>
      <TrendingCollection/>
      <TopCreators/>
      <BrowseCategories/>
      <NftHighlight/>
      <SubscribeSec/>

    </div>
  )
}; export default HomePage