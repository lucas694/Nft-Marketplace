import "./SubscribeSec.css"
import SubscribePhoto from "../../Assets/Subscribe.png"
import { FaEnvelope } from "react-icons/fa";
import BtnPurple from "../Buttons/Btn-Purple";


const SubscribeSec = () => {
  return(
    <div className={"SubscribeContainer"}>
      <div className={"SubscribeLeft"}>
        <img src={SubscribePhoto} className={"SubscribePhoto"}/>
      </div>
      <div className={"SubscribeRight"}>
        <h1 className={"SubsTittle"}>Join Our Weekly Digest</h1>
        <p className={"SubsDesc"}>Get Exclusive Promotions & Updates Straight To You Inbox.</p>
        <div className={"SubsBtnSec"}>
          <BtnPurple className={"BtnSubscribeWhite"}
                      BtnText={"Enter your email, here"}/>

          <BtnPurple className={"BtnSubscribePurple"}
                     BtnText={"Subscribe"}
                      BtnIcon={<FaEnvelope className={"BtnSubscribePurpleIcon"}/>}/>

        </div>
      </div>
    </div>
  )
}; export default SubscribeSec;