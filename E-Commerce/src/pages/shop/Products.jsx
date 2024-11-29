import ProductsRating from './ProductsRating'
import ProductsSale from "./productsSale"
import { Link } from "react-router-dom"

function Card( {arrivels }){
   
    return(
        <div className="py-4 flex gap-3 flex-wrap justify-center items-center  ">
            {arrivels.map((arivel ) =>
                 <div  key={arivel._id} className="w-[160px] md:w-[295px]  ">
            <Link to={`/product/detail/${arivel._id}`}>
                <img src={arivel.image} alt="sata.alt" className="h-[174px] w-[160px] rounded-2xl border border-slate-400 md:w-[295px] md:h-[298px] " />
                 <h3 className=" md:hidden font-bold text-start text-[1rem]   pt-1">{arivel.title.length>15? arivel.title.slice(0,15) + "..." :  arivel.title}</h3>
                 <h3 className=" hidden md:block font-bold text-start text-[18px]   pt-2">{arivel.title}</h3>
                 <div className="flex items-center h-1 mt-1 md:mt-2">
                    <ProductsRating rating={arivel.rating}/>{arivel.rating}<span className="opacity-75">/5</span>
                 </div>
                     <ProductsSale sale ={[arivel.newPrice , arivel.oldPrice] } />
            </Link> 
                </div>
        )}
        </div>
    )
}

export default Card