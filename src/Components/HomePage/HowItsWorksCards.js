import "./HowItsWorksCards.css"

const HowItsWorksCards = (props) =>{
  return(
    <div className={"HowItsWorksCards"}>
      <img src={props.img} alt={"music"} className={"HowItsWorksImg"}/>
      <div className={"HowItsWorksCardsInf"}>
        <h1 className={"HowItsWorksCardsTittle"}>{props.name}</h1>
        <p className={"HowItsWorksCardsDesc"}>{props.desc}</p>
      </div>
    </div>
  )
}; export default HowItsWorksCards;