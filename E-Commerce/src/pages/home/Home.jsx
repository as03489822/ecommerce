import Banner from "./Banner"
import Brands from "./Brands"
import NewArrdivels from "./NewArrivels"
import TopSell from "./TopSell"

import image10 from '../../assets/images/image 13.png'
import image11 from '../../assets/images/image 11.png'
import image12 from '../../assets/images/image 12.png'
import image13 from '../../assets/images/image 14.png'

import ReviewCarsoule from "./ReviewCarousel"

function Home(){

    return(
        <>
        <div className=" md:flex md:justify-between md:h-[660px] bg-[#F2F0F1] overflow-hidden">
            <Banner />
         </div>
         <div className=" md:h-[122px] bg-black  ">
            <Brands />
        </div> 
        <div className="my-10">
        <NewArrdivels/>
        <TopSell />
         <div className="mx-6 md:mx-[5rem] mt-16 h-[1080px] md:h-[840px] bg-[#F2F0F1] rounded-[25px] md:rounded-[40px] flex-column">
            <h1 className="text-5xl font-bold py-16 text-center">BROWSE BY DRESS STYLE</h1>
            <div className="md:flex  px-4 md:px-10 " >
                <div className="relative md:w-2/5 h-[190px] md:h-[289px] ">
                    <img src={image11} alt="image11" className="rounded-2xl  z-0  h-full w-full"/>
                    <div className="absolute top-7 left-8 text-4xl font-bold" ><h3>Casual</h3></div>
                </div>
                <div className="relative  mt-6 md:mt-auto md:ml-4 md:w-3/5 h-[190px] md:h-[289px]">
                    <img src={image10} alt="image11" className="rounded-2xl h-full w-full z-0" />
                    <div className="absolute top-7 left-8 text-4xl font-bold" ><h3>Formal</h3></div>
                </div>
            </div>

            <div className="md:flex px-4 md:mx-10 mt-4  " >
                <div className="relative  md:w-3/5 h-[190px] md:h-[289px]">
                    <img src={image12} alt="image11" className="rounded-2xl static z-0 h-full w-full"/>
                    <div className="absolute top-7 left-8 text-4xl font-bold" ><h3>Gym</h3></div>
                </div>
                <div className="relative md:ml-4 mt-6 md:mt-auto md:w-2/5 h-[190px] md:h-[289px]">
                    <img src={image13} alt="image11" className="rounded-2xl static z-0 w-full h-full object-cover"/>
                    <div className="absolute top-7 left-8 text-4xl font-bold" ><h3>Party</h3></div>
                </div>
            </div>
        </div>
        </div>
       <ReviewCarsoule />  
        </>
    )
}

export default Home