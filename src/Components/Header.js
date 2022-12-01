import "./Header.css"
import { FaStore } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import {useState} from "react";
import {Link} from "react-router-dom";
import Modal from 'react-modal';
import BtnPurple from "./Buttons/Btn-Purple";
import SignUp from "./SignUp/SignUp";

const Header = () =>{
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
    console.log(isOpen);
  };{/*Botão Mobile*/}

  const [modalIsOpen ,setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal =() => {
    setModalIsOpen(false);
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
          <li className={"LiHeader"}>Connect a wallet</li>
          <li className={"LiHeader"}>
              <BtnPurple className={"BtnHeader"}
                         BtnText={"Sign Up"}
                         BtnIcon={<FaRegUser className={"BtnHeaderIcon"}
                         onClick={openModal}/>}
              />
          </li>
        </ul>

        <div>
          <ul className={isOpen ? "NavMobile" : "NavMobileHidden"}>
            <li className={"LiMobileHeader"}>Marketplace</li>
            <li className={"LiMobileHeader"}>Rankings</li>
            <li className={"LiMobileHeader"}>Connect a wallet</li>
            <li className={"LiMobileHeader"}><BtnPurple className={"BtnHeader"}
                       BtnText={"Sign Up"}
                       BtnIcon={<FaRegUser className={"BtnHeaderIcon"}
                                           onClick={openModal}/>}
            /></li>
          </ul>
        </div>
      </div>
      <div className={modalIsOpen ? "ModalStyle" : "ModalHidden" }>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className={"ModalStyle"}
          contentLabel="Example Modal"
        >
          <button className={"BtnModalLight"}onClick={closeModal}>Close Modal</button>
            <SignUp/>
        </Modal>
      </div>
    </div>
  )
};
export default Header