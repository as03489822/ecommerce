import CardRating from "./CardRating";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';



export default function ReviewCarsoule(){

    let reviews =[
        {id:1, star: 5, name:"Sara M.", description:" I'm blown away by the quality and style of the clothes I received from Shop.co .From casual wear to elegant dresses , every piece  I'   ve bought has exceeded my expectation"},
        {id:2, star: 5, name:"Alex K.", description:" I'm blown away by the quality and style of the clothes I received from Shop.co .From casual wear to elegant dresses , every piece  I'   ve bought has exceeded my expectation"},
        {id:3, star: 5, name:"James L.", description:" I'm blown away by the quality and style of the clothes I received from Shop.co .From casual wear to elegant dresses , every piece  I'   ve bought has exceeded my expectation"},
        {id:4, star: 5, name:"Lara A.", description:" I'm blown away by the quality and style of the clothes I received from Shop.co .From casual wear to elegant dresses , every piece  I'   ve bought has exceeded my expectation"},
        {id:5, star: 5, name:"Watson v.", description:" I'm blown away by the quality and style of the clothes I received from Shop.co .From casual wear to elegant dresses , every piece  I'   ve bought has exceeded my expectation"}
    ];

    return(
        <div className=" md:mt-[4rem] pb-[3rem] md:mb-[4rem]">
            <div className=" mx-6 md:h-12 md:mx-[5rem]  flex justify-between items-end">
                <h1 className="font-bold text-3xl md:text-5xl">OUR HAPPY CUSTOMERS</h1>
                <div className="flex justify-between md:justify-around h-9 w-[7rem]">
                    <button className="m-2 " ><i className=" swiper-button-prev text-2xl fa-solid fa-arrow-left"></i></button>
                    <button className="m-2" ><i className="swiper-button-next text-2xl fa-solid fa-arrow-right"></i></button>
                    </div>
            </div>

            <div  className=" mt-12 h-[240px] flex justify-center  gap-4 overflow-hidden">
            <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={"auto"} 
            breakpoints={{
                640: {
                  slidesPerView: 1, // 1 slide per view for screens >= 640px
                },
                768: {
                  slidesPerView: 2, // 2 slides per view for screens >= 768px
                },
                1024: {
                  slidesPerView: 3, // 3 slides per view for screens >= 1024px
                },
              }}
              centeredSlides={true} // Center the active slide
            loop={true} // Enable infinite looping
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}>
                {reviews.map((review,index) =>(
                <SwiperSlide className=" ml-[8px]  md:ml-[5px]  " key={index} >
                <div className="shrink-0 border border-slate-300 md:h-[239px] w-[95%] md:w-[400px] p-6 rounded-3xl">
                    <div className="flex items-center mt-1 h-[19px]">
                        <CardRating rating={review.star} />
                    </div>
                    <div className="pt-4 text-xl font-bold">
                        {review.name}
                        <i className="fa-solid fa-circle-check text-[#01AB31]"></i>
                    </div>
                    <p className="pt-4 text-base">
                        {review.description}
                    </p>
                </div> 
                </SwiperSlide>
                ))}
        </Swiper>

            </div>
        </div>
    )
}