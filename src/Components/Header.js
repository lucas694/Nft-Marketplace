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

const Header = () =>{
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
    console.log(isOpen);
  };{/*Botão Mobile*/}

  const [modalIsOpenSignUp ,setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal =() => {
    setModalIsOpen(false);
  };

  const [modalWalletIsOpen ,setModalWalletIsOpen] = useState(false);
  const openModalWallet = () => {
    setModalWalletIsOpen(true);
  };
  const closeModalWallet =() => {
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
            <button onClick={openModalWallet}>Connect Wallet</button>
          </li>
          <li className={"LiHeader"}>
            <BtnPurple className={"BtnHeader"}
                       onClick={openModal}
                       BtnText={"Sign Up"}
                       BtnIcon={<FaRegUser className={"BtnHeaderIcon"}/>}/>
          </li>
        </ul>
        <div>
          <ul className={isOpen ? "NavMobile" : "NavMobileHidden"}>
            <li className={"LiMobileHeader"}>Marketplace</li>
            <li className={"LiMobileHeader"}>Rankings</li>
            <li className={"LiMobileHeader"}>Connect a wallet</li>
            <li className={"LiMobileHeader"}>
              <BtnPurple className={"BtnHeader"}
                         onClick={openModal}
                         BtnText={"Sign Up"}
                         BtnIcon={<FaRegUser className={"BtnHeaderIcon"}/>}/>
            </li>
          </ul>
        </div>
      </div>
      <div className={modalIsOpenSignUp ? "ModalStyle" : "ModalHidden" }>
        <Modal
          isOpen={modalIsOpenSignUp}
          onRequestClose={closeModal}
          className={"ModalStyle"}
          contentLabel="Example Modal"
        >
          <button className={"BtnModalLight"}onClick={closeModal}>Close Modal</button>
            <SignUp/>
        </Modal>
      </div>

      <div className={modalWalletIsOpen ? "ModalStyle" : "ModalHidden" }>
        <Modal
          isOpen={modalWalletIsOpen}
          onRequestClose={closeModalWallet}
          className={"ModalStyle"}
          contentLabel="Example Modal"
        >
            <button className={"BtnModalLight"}onClick={closeModalWallet}>Close Modal</button>
            <Wallet/>
        </Modal>
      </div>
    </div>
  )
};
export default Header