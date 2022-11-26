import "./TrendingCollection.css"
import CollectionCard from "./CollectionCard";
import PrimaryAnimal from "../../Assets/CardImgs/CollectionCard/PrimaryAnimal.png";
import SecondaryAnimal from "../../Assets/CardImgs/CollectionCard/SecondaryAnimal.png";
import SecondaryAnimal2 from "../../Assets/CardImgs/CollectionCard/SecondaryAnimal-2.png";
import PrimaryMush from "../../Assets/CardImgs/CollectionCard/PrimaryMush.png";
import SecondaryMush from "../../Assets/CardImgs/CollectionCard/SecondaryMush.png";
import SecondaryMush2 from "../../Assets/CardImgs/CollectionCard/SecondaryMush2.png";
import PrimaryMachine from "../../Assets/CardImgs/CollectionCard/PrimaryMachine.png";
import SecondaryMachine from "../../Assets/CardImgs/CollectionCard/SecondaryMachine.png";
import SecondaryMachine2 from "../../Assets/CardImgs/CollectionCard/SecondaryMachine2.png";
import PrimaryRobot from "../../Assets/CardImgs/CollectionCard/PrimaryRobot.png";
import SecondaryRobot from "../../Assets/CardImgs/CollectionCard/SecondaryRobot.png";
import SecondaryRobot2 from "../../Assets/CardImgs/CollectionCard/SecondaryRobot2.png";
import Avatar from "../../Assets/CardImgs/CollectionCard/Avatar.png";
import Avatar1 from "../../Assets/CardImgs/CollectionCard/Avatar1.png";
import Avatar2 from "../../Assets/CardImgs/CollectionCard/Avatar2.png";
import Avatar3 from "../../Assets/CardImgs/CollectionCard/Avatar3.png";

const TrendingCollection = () => {
  const CollectionCardList = [
  {Cardname:"DSGN Animals", Creator:"MrFox", Img1:PrimaryAnimal, Img2:SecondaryAnimal, Img3:SecondaryAnimal2, Avatar:Avatar ,},
  {Cardname:"Magic Mushrooms", Creator:"Shroomie", Img1:PrimaryMush, Img2:SecondaryMush, Img3:SecondaryMush2, Avatar:Avatar1 ,},
  {Cardname:"DSGN Animals", Creator:"BeKind2Robots", Img1:PrimaryMachine, Img2:SecondaryMachine, Img3:SecondaryMachine2, Avatar:Avatar2 ,},
  {Cardname:"Happy Robots", Creator:"Robotica", Img1:PrimaryRobot, Img2:SecondaryRobot, Img3:SecondaryRobot2, Avatar:Avatar3 ,}
  ]
  return(
    <div className={"TrendingCollectionContainer"}>
      <h1 className={"TrendingCollectionTitle"}>Trending Collections</h1>
      <p className={"TrendingCollectionDesc"}>Checkout Our Weekly Updated Trending Collection.</p>
      <div className={"TrendingCardContent"}>
        {CollectionCardList.map((item, index) => {
          return(
            <CollectionCard
              Cardname={item.Cardname}
              Creator={item.Creator}
              Img1={item.Img1}
              Img2={item.Img2}
              Img3={item.Img3}
              Avatar={item.Avatar}
            />
          )
        })}
      </div>
    </div>
  )
};export default TrendingCollection;