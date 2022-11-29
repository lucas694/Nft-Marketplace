import "./BrowseCategories.css"
import ArtBg from "../../../Assets/CardImgs/BrowseCards/Artbg.png";
import PaintBrush from "../../../Assets/CardImgs/BrowseCards/PaintBrush.png";
import SwatchesBg from "../../../Assets/CardImgs/BrowseCards/SwatchesBg.png";
import Swatches from "../../../Assets/CardImgs/BrowseCards/Swatches.png";
import MusicBg from "../../../Assets/CardImgs/BrowseCards/MusicBg.png";
import Music from "../../../Assets/CardImgs/BrowseCards/MusicNotes.png";
import PhotoBg from "../../../Assets/CardImgs/BrowseCards/CameraBg.png";
import Photo from "../../../Assets/CardImgs/BrowseCards/Camera.png";
import VideoBg from "../../../Assets/CardImgs/BrowseCards/VideoBg.png";
import Video from "../../../Assets/CardImgs/BrowseCards/VideoCamera.png";
import UtilityBg from "../../../Assets/CardImgs/BrowseCards/Utility.png";
import Utility from "../../../Assets/CardImgs/BrowseCards/MagicWand.png";
import SportBg from "../../../Assets/CardImgs/BrowseCards/BasketBg.png";
import Sport from "../../../Assets/CardImgs/BrowseCards/Basketball.png";
import PlanetBg from "../../../Assets/CardImgs/BrowseCards/PlanetBg.png";
import Planet from "../../../Assets/CardImgs/BrowseCards/Planet.png";

import BrowseCards from "./BrowseCards";

const BrowseCategories = () => {
  const BrowseCardList = [
    {Cardname:"Art", ImgBg:ArtBg, MainImg:PaintBrush},
    {Cardname:"Collectibles", ImgBg:SwatchesBg, MainImg:Swatches},
    {Cardname:"Music", ImgBg:MusicBg, MainImg:Music},
    {Cardname:"Photography", ImgBg:PhotoBg, MainImg:Photo},
    {Cardname:"Video", ImgBg:VideoBg, MainImg:Video},
    {Cardname:"Utility", ImgBg:UtilityBg, MainImg:Utility},
    {Cardname:"Sport", ImgBg:SportBg, MainImg:Sport},
    {Cardname:"Planet", ImgBg:PlanetBg, MainImg:Planet},
    ]
  return(
    <div className="BrowseCategoriesContainer">
      <div>
        <h1 className="BrowseCategoriesTitle">Browse Categories</h1>
      </div>
      <div className={"BrowseCategoriesCards"}>
        {BrowseCardList.map((item, index) => {
          return(
            <BrowseCards Cardname={item.Cardname} ImgBg={item.ImgBg} MainImg={item.MainImg} key={index}/>
          )
        })}
      </div>
    </div>
  )
}
export default BrowseCategories