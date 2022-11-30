import "./HowItsWorks.css"
import HowItsWorksCards from "./HowItsWorksCards";
import Collection from "../../Assets/Collection.png"
import Earning from "../../Assets/Earning.png"
import Wallet from "../../Assets/Wallet.png"


const HowItsWorks = () =>{
  const HowItsWorksCard = [
    {id:1, Name:"Setup Your Wallet", img:Wallet ,Desc:"Choose between auctions and fixed-price listings. Starts earning by selling your NFTs or trading others."},
    {id:2, Name:"Create Collection", img:Collection ,Desc:"Upload your work and setup your collection. Add a description, social. links and floor price."},
    {id:3, Name:"Start Earning", img:Earning ,Desc:"Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner."},
  ]
  return(
    <div className={"HowItsWorksContainer"}>
      <div>
        <h1 className={"HowItsWorksTittle"}>How It Works</h1>
        <p className={"HowItsWorksDesc"}>Find Out How To Get Started</p>
      </div>
      <div className={"HowItsWorksCardsContainer"}>
        {HowItsWorksCard.map((item) => {
          return(
            <HowItsWorksCards key={item.id} name={item.Name} img={item.img} desc={item.Desc}/>
          )
        })}
      </div>
    </div>
  )
}; export default HowItsWorks;