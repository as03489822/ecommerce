import StoreInfo from "./StoreInfo"
import BannerImage from "../../assets/images/Rectangle 2.png"
import Victor from "../../assets/images/Vector.png"
import { useNavigate } from "react-router-dom"

function Banner(){
    let navigate= useNavigate()
    let information=[
            {text: "International Brands" , num : "200+"}, 
            {text: "High-Quality Products" , num : "2,000+"}, 
            {text: "Happy Customers" , num : "30,000+"}
        ]
    return(
        <>
        <div className=  "md:w-full md:flex  ">
            <div className="  pt-6 px-5  md:pt-16 md:px-16 md:w-1/2 ">
                <div className=" md:w-[500px] ">
                    <h1 className="w-full text-4xl md:text-[3.5rem] md:leading-[4.5rem]   font-bold ">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                    <p className="5 satoshi text-sm md:text-[1rem] pt-4">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                    <button onClick={()=> navigate('/shop')} className="bg-black text-white w-full md:w-52 h-[3.5rem] rounded-full mt-4">Shop Now</button>
                </div>
                <div className=" my-4 md:mt-10  md:h-[74px]">
                    <StoreInfo data={information} />
                </div>
            </div>
            <div className=" md:mt-0 md:relative h-[448px] w-full md:w-1/2 md:h-[660px] ">
                <img src={BannerImage} alt="banner" className="h-full w-full object-right  object-cover " />
                <img src={Victor} alt="victor" className="absolute w-11 h-11 md:w-14 md:h-14  top-[41rem] left-4 md:top-72 md:left-0 "/>
                <img src={Victor} alt="victor" className="absolute w-19 h-19 md:w-[6.5rem] md:h-[6.5rem] top-[38rem] right-16 md:top-20  md:right-10 " />
            </div>
        </div>
        </>
    )
}

export default Banner