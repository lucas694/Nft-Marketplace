import "./Header.css"
import { FaStore } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import {useState} from "react";
import {Link} from "react-router-dom";
import Modal from 'react-modal';
import BtnPurple from "./Buttons/Btn-Purple";
import SignUp from "./SignUp/SignUp";
import Wallet from "./Wallet";
import ModalContent from "./ModalContent";

const Header = (props) =>{
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
    console.log(isOpen);
  };{/*Botão Mobile*/}


  const [modalSignUpIsOpen ,setModalSignUpIsOpen] = useState(false);
  const openSignUpModal = () => {
    setModalSignUpIsOpen(true);
  };
  const closeSignUpModal =() => {
    setModalSignUpIsOpen(false);
  };
  const [modalWalletIsOpen ,setModalWalletIsOpen] = useState(false);
  const openWalletModal = () => {
    setModalWalletIsOpen(true);
  };
  const closeWalletModal =() => {
    setModalWalletIsOpen(false);
  };

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
          <Link to="/">
            <li className={"LiHeader"}>Home</li>
          </Link>

          <li className={"LiHeader"}>Rankings</li>
          <li className={"LiHeader"}>
            <button onClick={openWalletModal}>Connect Wallet</button>
          </li>
          <li className={"LiHeader"}>
            <BtnPurple className={"BtnHeader"}
                       onClick={openSignUpModal}
                       BtnText={"Sign Up"}
                       BtnIcon={<FaRegUser className={"BtnHeaderIcon"}
                       Content={""}/>}/>
          </li>
        </ul>
        <div>
          <ul className={isOpen ? "NavMobile" : "NavMobileHidden"}>
            <li className={"LiMobileHeader"}>Marketplace</li>
            <li className={"LiMobileHeader"}>Rankings</li>
            <li className={"LiHeader"}>
              <button onClick={openWalletModal}>Connect Wallet</button>
            </li>
            <li className={"LiMobileHeader"}>
              <BtnPurple className={"BtnHeader"}
                         onClick={openSignUpModal}
                         BtnText={"Sign Up"}
                         BtnIcon={<FaRegUser className={"BtnHeaderIcon"}
                         Content/>}/>
            </li>
          </ul>
        </div>
      </div>
      <div className={"ModalHidden"}>
        <ModalContent
                isOpen={modalSignUpIsOpen}
                onRequestClose={closeSignUpModal}
                className={"ModalStyle"}
                closeModal={closeSignUpModal}
                Content={<SignUp/>}/>
        <ModalContent
          isOpen={modalWalletIsOpen}
          onRequestClose={closeWalletModal}
          className={"ModalStyle"}
          closeModal={closeWalletModal}
          Content={<Wallet/>}/>
      </div>
    </div>
  )
};
export default Header