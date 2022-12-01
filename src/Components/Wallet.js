import "./Wallet.css"
import WalletBg from "../Assets/WalletBg.jpg";
import BtnPurple from "./Buttons/Btn-Purple";
import { FaBitcoin } from "react-icons/fa";
import { FaMask } from "react-icons/fa";
import { TbPlugConnected } from "react-icons/tb";


const Wallet = () => {
  return(
    <div className={"WalletContainer"}>
      <div className={"ContentWalletLeft"}>
        <img src={WalletBg} alt="WalletBg" className={"WalletBg"}/>
      </div>
      <div className={"ContentWalletRight"}>
        <h1 className={"WalletTitle"}>Wallet</h1>
        <p></p>
        <div className={"WalletBtnSec"}>
          <BtnPurple className={"BtnWallet "}
                      BtnText={"Metamask"}
                      BtnIcon={<FaMask className={"WalletBtnIcon"}/>}/>

          <BtnPurple className={"BtnWallet "}
                     BtnText={"Wallet Connect"}
                     BtnIcon={<TbPlugConnected className={"WalletBtnIcon"}/>}/>

          <BtnPurple className={"BtnWallet "}
                     BtnText={"Coinbase"}
                     BtnIcon={<FaBitcoin className={"WalletBtnIcon"}/>}/>

        </div>
      </div>
    </div>
  )
};
export default Wallet