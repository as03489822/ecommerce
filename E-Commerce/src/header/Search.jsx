import { useState } from "react"
function Search(){
    let [input , setInput] = useState("")
    let searchHandle = (event) => {
        setInput(event.target.value)
    }
    let formSubmit = () =>{
        console.log(input)
        setInput("")
    }
    return(
        <div className="  relative  md:w-[32rem]" >
        <form action="" onSubmit={formSubmit}>
        <button className="  md:block absolute  ml-4 mt-2.5  text-gray-400 text-base md:text-xl cursor-pointer" type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
        </button>
            <input className="h-10 md:h-12 outline-none w-full rounded-3xl bg-slate-100 focus:outline-none  pl-12 " type=" text " placeholder="Search for products..." onChange={searchHandle} value={input}  />
        </form>
        </div>
    )
}

export default Search