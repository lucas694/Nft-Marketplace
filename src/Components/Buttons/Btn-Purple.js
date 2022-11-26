import "./Btn-Purple.css"

const BtnPurple = (props) => {
  return(
    <button className={props.className}>{props.BtnIcon}{props.BtnText}</button>
  )
};export default BtnPurple