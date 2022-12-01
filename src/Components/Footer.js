import "./Footer.css"
import BtnPurple from "./Buttons/Btn-Purple";
import {FaEnvelope, FaStore,FaDiscord,FaInstagram,FaYoutube,FaTwitter} from "react-icons/fa";


const Footer = () => {
  return(
    <div className={"FooterContainer"}>
      <section className={"FooterContent"}>
        <div className={"FooterSections"}>
        <div className={"flex items-center md:pb-4 pb-2"}><FaStore className={"HeaderIcon"}/>
          <h1 className={"HeaderTittle"}> NFT Marketplace</h1>
        </div>
          <p className={"FooterLinks FooterLeft"}>NFT Marketplace UI created with Anima For Figma.</p>
          <p className={"FooterLinks"}>Join our Community</p>
          <section className={"FooterIconSec"}>
            <FaDiscord className={"FooterIcons"}/>
            <FaYoutube className={"FooterIcons"}/>
            <FaTwitter className={"FooterIcons"}/>
            <FaInstagram className={"FooterIcons"}/>
          </section>
        </div>
        <div className={"FooterSections"}>
          <h1 className={"FooterTittle"}>Explore</h1>
          <ul>
            <li className={"FooterLinks"}>Marketplace</li>
            <li className={"FooterLinks"}>Ranking</li>
            <li className={"FooterLinks"}>Connect a Wallet</li>
          </ul>
        </div>
        <div className={"FooterSections"}>
          <h1 className={"FooterTittle"}>Join Our Weekly Digest</h1>
          <p className={"FooterLinks"}>Get exclusive promotions & updates straight to your inbox.</p>
          <div className={"SubsBtnSec"}>
            <BtnPurple className={"BtnSubscribeWhite"}
                       BtnText={"Enter your email, here"}/>

            <BtnPurple className={"BtnSubscribePurple"}
                       BtnText={"Subscribe"}
                       BtnIcon={<FaEnvelope className={"BtnSubscribePurpleIcon"}/>}/>

          </div>
        </div>
      </section>
      <div>
        <hr className={"FooterHr"}/>
        <div>
          <p className={"FooterCopyright"}>
            <h1> ❮❯ by <a href={"https://github.com/lucas694"} target="_blank" className={"FooterName"}>
              Lucas Cardoso</a> © 2022 All rights reserved.</h1></p>
        </div>
      </div>
    </div>
  )
}; export default Footer;