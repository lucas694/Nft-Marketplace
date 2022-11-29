import "./TopCreators.css"
import BtnPurple from "../../Buttons/Btn-Purple";
import { FaRocket } from "react-icons/fa";
import CreatorsCards from "./CreatorsCards";
//avatars
import Keepitreal from "../../../Assets/CardImgs/Avatar/Keepitreal.png"
import Digilab from "../../../Assets/CardImgs/Avatar/Digilab.png"
import Gravityone from "../../../Assets/CardImgs/Avatar/Gravityone.png"
import Animakid from "../../../Assets/CardImgs/Avatar/Animakid.png"
import Bluewhale from "../../../Assets/CardImgs/Avatar/Bluewhale.png"
import Dotgu from "../../../Assets/CardImgs/Avatar/Dotgu.png"
import Ghiblier from "../../../Assets/CardImgs/Avatar/Ghiblier.png"
import Juanie from "../../../Assets/CardImgs/Avatar/Juanie.png"
import Mrfox from "../../../Assets/CardImgs/Avatar/Mrfox.png"
import Robotica from "../../../Assets/CardImgs/Avatar/Robotica.png"
import Rustyrobot from "../../../Assets/CardImgs/Avatar/Rustyrobot.png"
import Shroomie from "../../../Assets/CardImgs/Avatar/Shroomie.png"



const TopCreators = () => {
  const Creators = [
    {id:1, name:"Keepitreal", avatar:Keepitreal, sales:"34.53 ETH"},
    {id:2, name:"Digilab", avatar:Digilab, sales:"34.53 ETH"},
    {id:3, name:"Gravityone", avatar:Gravityone, sales:"34.53 ETH"},
    {id:4, name:"Juanie", avatar:Juanie, sales:"34.53 ETH"},
    {id:5, name:"Bluewhale", avatar:Bluewhale, sales:"34.53 ETH"},
    {id:6, name:"Mrfox", avatar:Mrfox, sales:"34.53 ETH"},
    {id:7, name:"Shroomie", avatar:Shroomie, sales:"34.53 ETH"},
    {id:8, name:"Robotica", avatar:Robotica, sales:"34.53 ETH"},
    {id:9, name:"Rustyrobot", avatar:Rustyrobot, sales:"34.53 ETH"},
    {id:10, name:"Animakid", avatar:Animakid, sales:"34.53 ETH"},
    {id:11, name:"Dotgu", avatar:Dotgu, sales:"34.53 ETH"},
    {id:12, name:"Ghiblier", avatar:Ghiblier, sales:"34.53 ETH"},
  ]
  return(
    <div className="TopCreatorsContainer">
      <section className={"TopCreatorsTextSec"}>
        <h1 className={"TopCreatorsTittle"}>Top Creators</h1>
        <div className={"TopCreatorsDescSec"}>
          <p className={"TopCreatorsDescription"}>Checkout Top Rated Creators on the NFT Marketplace</p>
          <BtnPurple className={"BtnCreators"}
                     BtnText={"View Rankings"}
                     BtnIcon={<FaRocket
                     className={"BtnCreatorsIcon"}/>}/>
        </div>
      </section>
      <section className={"TopCreatorsCardsSec"}>
        {Creators.map((creator) => (
          <CreatorsCards
            id={creator.id}
            name={creator.name}
            avatar={creator.avatar}
            sales={creator.sales}
          />
        ))}
      </section>
    </div>
  )
}; export default TopCreators;