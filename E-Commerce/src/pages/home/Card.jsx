import CardRating from "./CardRating"
import CardSale from "./CardSale"
import { Link } from "react-router-dom"

function Card( {arrivels }){
    
    return(
        <div className="flex md:justify-center items-center md:flex-wrap overflow-scroll no-scrollbar ">
            {arrivels.map((arivel ) =>
                 <div  key={arivel._id} className=" pl-6 shrink-0">
                    <Link to={`/product/detail/${arivel._id}`}>
                    <img src={arivel.image} alt="sata.alt" className="h-[300px] w-[280px] rounded-2xl border border-slate-400 " />
                 <h3 className=" font-bold text-start text-[1.25rem] pt-4">{arivel.title}</h3>
                 <div className="flex items-center pl-1 mt-1 h-[19px]">
                    <CardRating rating={arivel.rating}/>{arivel.rating}<span className="opacity-75">/5</span>
                 </div>
                     <CardSale sale ={[arivel.newPrice , arivel.oldPrice] } />
                    </Link> 
                </div>
        )}
        </div>
    )
}

export default Card

