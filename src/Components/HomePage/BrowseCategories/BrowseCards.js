import "./BrowseCards.css"

const BrowseCards = (props) => {
  return(
      <div className={"BrowseCardContainer"}>
        <div className={"BrowseCardImgs"}>
          <img src={props.ImgBg} alt="" className={"bgImg"}/>
          <img src={props.MainImg} alt="" className={"paintImg"}/>
        </div>
        <div className={"BrowseCardDesc"}>
          <h1 className={"BrowseCardsTittle"}>{props.Cardname}</h1>
        </div>
      </div>

  )
}; export default BrowseCards