import "./Input.css"
import {FaUserAlt ,FaRegEnvelope, FaLock} from "react-icons/fa";


const Input = (props) =>{
  return(
    <input type={props.type} className={"SignUpFormInputField"} placeholder={props.placeholder} />
  )
};export default Input