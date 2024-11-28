export default function CardSale({sale}){
    const newPrice = parseFloat(sale[0]);
    const oldPrice = sale[1] ? parseFloat(sale[1]) : null;
    const discount = oldPrice ? Math.round(((oldPrice - newPrice) / oldPrice) * 100) : null;

    return(
        <div className="flex items-center pl-1 mt-1 md:my-2">
        <p className="text-[20px] md:text-[24px] font-bold ">
           {newPrice? <span>${newPrice}</span>: <span>${oldPrice}</span>} 
            {discount ? <span className="ml-3 opacity-50 line-through">${oldPrice}</span> : null }
        </p>
        {discount? <p className=" ml-5 text-[#FF3333]  bg-[#FF3333] h-[20px] rounded-xl bg-opacity-10 text-[10px] px-3 leading-[20px]">{discount}%</p> : null}
        </div>
    )
} 