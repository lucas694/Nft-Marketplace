import "./NftHighlight.css"
import Shroomie from "../../Assets/CardImgs/Avatar/Shroomie.png"
import BtnPurple from "../Buttons/Btn-Purple";
import { FaRegEye } from "react-icons/fa";
import Timer from "../Timer";


const NftHighlight = () => {
  return(
    <div className={"HightlightContainer"}>
      <div className={"HightlightContent"}>
        <div className={"HighlightLeft"}>
          <div className={"HighlightCreator"}>
            <img src={Shroomie} alt={"Shroomie"} className={"HighlightCreatorIcon"}/>
            <p className={"HighlightCreatorName"}>Shroomie</p>
          </div>
          <h1 className={"HightlightTittle"}>Magic Mushrooms</h1>
          <section className={"BtnSec"}>
            <BtnPurple className={"BtnNftHighlight"}
                       BtnText={"See NFT"}
                       BtnIcon={<FaRegEye
                       className={"BtnNftHighlightIcon"}/>}/>
          </section>
        </div>
        <div className={"HighlightRight"}>
          <Timer/>
        </div>
      </div>
    </div>
  )
}; export default NftHighlight