export default function CardSale({sale}){
    const newPrice = parseFloat(sale[0]);
    const oldPrice = sale[1] ? parseFloat(sale[1]) : null;
    const discount = oldPrice ? Math.round(((oldPrice - newPrice) / oldPrice) * 100) : null;

    return(
        <div className="flex items-center pl-1 mt-1">
        <p className="text-2xl font-bold pl-">
           {newPrice? <span>${newPrice}</span>: <span>${oldPrice}</span>} 
            {discount ? <span className="ml-3 opacity-50 line-through">${oldPrice}</span> : null }
        </p>
        {discount? <p className=" ml-5 text-[#FF3333]  bg-[#FF3333] h-[1.75rem] rounded-xl bg-opacity-10 text-sm px-3 leading-[1.75rem]">{discount}%</p> : null}
        </div>
    )
} 