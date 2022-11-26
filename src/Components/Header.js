import "./Header.css"
import { FaStore } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import {useState} from "react";


import BtnPurple from "./Buttons/Btn-Purple";

const Header = () =>{
  const [isOpen, setIsOpen] = useState(false);
const toggle = () => {
  setIsOpen(!isOpen)
  console.log(isOpen);
}


  return(
    <div className={"HeaderContainer"}>
      <div className={"HeaderLeft"}>
          <FaStore className={"HeaderIcon"}/>
        <h1 className={"HeaderTittle"}>NFT Marketplace</h1>
      </div>

      <div className={"HeaderRight"}>
        <button onClick={toggle}>
          <FaBars className={"BtnMobileIcon"}/>
        </button>
        <ul className={"UlHeader"}>
          <li className={"LiHeader"}>Marketplace</li>
          <li className={"LiHeader"}>Rankings</li>
          <li className={"LiHeader"}>Connect a wallet</li>
          <li className={"LiHeader"}>
            <BtnPurple className={"BtnHeader"}
                         BtnText={"Sign Up"}
            BtnIcon={<FaRegUser className={"BtnHeaderIcon"}/>}/>
          </li>
        </ul>

        <div>
          <ul className={isOpen ? "NavMobile" : "NavMobileHidden"}>
            <li className={"LiMobileHeader"}>Marketplace</li>
            <li className={"LiMobileHeader"}>Rankings</li>
            <li className={"LiMobileHeader"}>Connect a wallet</li>
          </ul>
        </div>
      </div>
    </div>
  )
};
export default Header