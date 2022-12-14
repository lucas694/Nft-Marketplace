import "./HeroSection.css"
import BtnPurple from "../Buttons/Btn-Purple";
import HeroCard from "../../Assets/HeroCard.png";
import creator from "../../Assets/AssetCres.png";
import { FaRocket } from "react-icons/fa";
import {useState} from "react";
import ModalContent from "../ModalContent";
import SignUp from "../SignUp/SignUp";
import Wallet from "../Wallet";


const HeroSection = () => {
  const [modalWalletIsOpen ,setModalWalletIsOpen] = useState(false);
  const openWalletModal = () => {
    setModalWalletIsOpen(true);
  };
  const closeWalletModal =() => {
    setModalWalletIsOpen(false);
  };
  return(
    <div className={"HeroContainer"}>
      <div className={"HeroLeft"}>
        <h1 className={"HeroTittle"}>Discover Digital Art & Collect NFTs</h1>
        <p className={"HeroDescription"}>NFT Marketplace UI Created With Anima For Figma. Collect, Buy And Sell Art From More Than 20k NFT Artists.</p>
        <div className={"HeroInfContent"}>
          <BtnPurple onClick={openWalletModal} className={"BtnHero"} BtnText={"Connect a wallet"} BtnIcon={<FaRocket className={"BtnHeaderIcon"}/>}/>

          <div className={"HeroInfSection"}>
            <div className={"HeroInf"}>
              <h1 className={"HeroInfTittle"}>240k +</h1>
              <p className={"HeroInfText"}>Total Sales</p>
            </div>

            <div className={"HeroInf"}>
              <h1 className={"HeroInfTittle"}>100k +</h1>
              <p className={"HeroInfText"}>Auctions</p>
            </div>

            <div className={"HeroInf"}>
              <h1 className={"HeroInfTittle"}>240k +</h1>
              <p className={"HeroInfText"}>Artists</p>
            </div>
          </div>
        </div>
      </div>

      <div className={"HeroRight"}>
        <div className={"HeroCard"}>
          <div className={"HeroCardImg"}>
            <img src={HeroCard} alt={"HeroCard"} className={"HeroCardImg"}/>
          </div>
          <div className={"HeroCardInf"}>
            <h1 className={"CardHeroTittle"}>Space Walking</h1>
            <div className={"CardCreator"} >
              <img src={creator}className={"creatorImg"}/>
              <p>AnimaKid</p>
            </div>
          </div>
        </div>
      </div>
      <div className={"ModalHidden"}>
        <ModalContent
          isOpen={modalWalletIsOpen}
          onRequestClose={closeWalletModal}
          className={"ModalStyle"}
          closeModal={closeWalletModal}
          Content={<Wallet/>}/>
      </div>
    </div>
  )
}; export default HeroSection