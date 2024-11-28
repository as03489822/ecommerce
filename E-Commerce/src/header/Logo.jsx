import { Link } from "react-router-dom"
import Pic from "../assets/images/SHOP.CO.png"
function Logo(){
    return(
        <div className=" "><Link to="/"><img src={Pic} alt="SHOP.CO" /></Link></div>
    )
}
export default Logo