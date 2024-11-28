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
            <img src={el.star} alt="star" key={index} />
            ))}
            {halfStar ? <i className="text-[#FFC633] flex items-center fa-solid fa-star-half h-[19px] "></i> :null}
        </>
    )
}