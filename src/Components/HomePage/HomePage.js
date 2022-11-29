import "./HomePage.css"
import HeroSection from "./HeroSection";
import TrendingCollection from "./TrendingCollection/TrendingCollection";
import TopCreators from "./TopCreators/TopCreators";
import BrowseCategories from "./BrowseCategories/BrowseCategories";
import NftHighlight from "./NftHighlight";

const HomePage = () => {
  return(
    <div className={"HomePageContainer"}>
    <HeroSection/>
      <TrendingCollection/>
      <TopCreators/>
      <BrowseCategories/>
      <NftHighlight/>

    </div>
  )
}; export default HomePage