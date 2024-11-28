import star from "../../assets/images/Star 5.png"
export default function CardRating({rating}){
    let fullStar = Math.floor(rating);
    let halfStar = rating % 1 !== 0;
    let arr = [];
        for(let i= 0; i< fullStar ; i++){
        arr.push({star})}
    return(
        <>
            {arr.map((el ,index) =>(
            <img  className="h-3 md:h-4 w-3 md:w-4 ml-1" src={el.star} alt="star" key={index} />
            ))}
            {halfStar ? <i className="ml-1 text-[12px] text-[14px] text-[#FFC633] flex items-center fa-solid fa-star-half  "></i> :null}
        </>
    )
}