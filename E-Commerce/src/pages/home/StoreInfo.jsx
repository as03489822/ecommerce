
function StoreInfo({data,}) {
  return (
          <div className=" flex gap-7  flex-wrap justify-center md:justify-between  md:w-[35rem] ">
              {data.map((el, index) => (
              <div key={index} className="text-start flex-column">
                <h1 className="text-2xl md:text-[2.5rem] font-semibold h-[54px] leading-[54px]">
                  {el.num}
                </h1>
              <p className="satoshi text-xs md:text-base">{el.text}</p>
          </div>
        ))}
      </div>
  )
}

export default StoreInfo