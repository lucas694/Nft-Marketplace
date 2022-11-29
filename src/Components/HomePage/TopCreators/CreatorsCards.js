import "./CreatorsCards.css"


const CreatorsCards = (props) => {
  return (
    <div className="CreatorsCardsContainer">
      <button className={"CreatorCardId"}>{props.id}</button>
      <img src={props.avatar} className={"CreatorCardAvatar"}/>
      <div className={"CreatorCardInfs"}>
        <h1 className={"CreatorCardTittle"}>{props.name}</h1>
        <div className={"CreatorCardDescSec"}>
          <p className={"CreatorCardDesc"}>Total Sales: </p>
          <h3 className={"CreatorCardDescValue"}> {props.sales}</h3>
        </div>
      </div>
    </div>
  )
}; export default CreatorsCards;