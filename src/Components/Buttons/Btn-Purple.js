import "./Btn-Purple.css"

const BtnPurple = (props) => {
  return(
    <button onClick={props.onClick} className={props.className}>{props.BtnIcon}{props.BtnText}</button>
  )
};export default BtnPurple