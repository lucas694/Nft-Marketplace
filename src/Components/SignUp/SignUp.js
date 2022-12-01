import "./SignUp.css"
import SignUpBg from "../../Assets/SignUpBg.jpg";
import BtnPurple from "../Buttons/Btn-Purple";
import Input from "./Input";
import {FaUserAlt ,FaRegEnvelope, FaLock} from "react-icons/fa";
import Modal from 'react-modal';


const SignUp = () => {
  return(
    <div className={"SignUpContainer"}>
      <div className={"ContentLeft"}>
        <img src={SignUpBg} alt="SignUpBg" className={"SignUpBg"}/>
      </div>
      <div className={"ContentRight"}>
        <h1 className={"SignUpTittle"}>Create Account</h1>
        <p className={"SignUpDescription"}>Welcome! Enter Your Details And Start Creating, Collecting And Selling NFTs.</p>
        <form className={"SignUpForm"}>
            <Input type={"text"} placeholder={"Username"}/>
            <Input type={"text"} placeholder={"Email Addres"}/>
            <Input type={"Password"} placeholder={"Email Password"}/>
            <Input type={"Password"} placeholder={"Confirm Password"}/>
            <BtnPurple className={"BtnSubscribePurple "}
                        BtnText={"Sign Up"}/>
        </form>
      </div>
    </div>
  )
}; export default SignUp