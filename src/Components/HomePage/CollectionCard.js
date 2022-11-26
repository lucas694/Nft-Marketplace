import "./CollectionCard.css"

const CollectionCard = (props) =>{
  return(
    <div className={"CollectionCardContainer"}>
      <div className={"CollectionCardPrimary"}>
        <img src={props.Img1} className={""}/>
      </div>
      <div className={"CollectionCardSecondary"}>
        <img src={props.Img1} className={"SecondaryCardImg"}/>
        <img src={props.Img2} className={"SecondaryCardImg"}/>
        <a href={"#"} className={"SecondaryMoreCards"}>1025+</a>
      </div>
      <div className={"CollectionCardInf"}>
        <h1 className={"CollectionCardTittle"}>{props.Cardname}</h1>
        <section className={"CollectionCardCreator"} >
          <img src={props.Avatar} className={"CollectionCardAvatar"}/>
          <p className={"CardCreatorName"}>{props.Creator}</p>
        </section>
      </div>
    </div>
  )
};
export default CollectionCard;