import "./ModalContent.css"
import Modal from 'react-modal';
import SignUp from "./SignUp/SignUp";
import {useState} from "react";


const ModalContent = (props) =>{
  const [modalIsOpen ,setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal =() => {
    setModalIsOpen(false);
  };
  return(
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={closeModal}
        className={"ModalStyle"}
        contentLabel="Example Modal"
      >
        <button className={"BtnModalLight"}onClick={props.closeModal}>Close Modal</button>
        {props.Content}
      </Modal>
    </div>
  )
}
export default ModalContent
