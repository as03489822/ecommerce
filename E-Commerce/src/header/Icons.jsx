import { Link } from "react-router-dom"
function Icons(){
    return(
        <div className=" flex gap-3 md:gap-4">
            <Link to={'/cart'}><i className="cursor-pointer fa-solid fa-cart-shopping text-xl md:text-2xl"></i></Link>
            <i className="fa-regular fa-user text-xl md:text-2xl"></i>
        </div>
    )
}

export default Icons