import { useState } from "react"
import Alert from "./Alert"
import Logo from "./Logo"
import Search from "./Search"
import { Link } from "react-router-dom"
import Icons from "./Icons"

function Header(){
    let[navbar , setNavbar] = useState(false);
    let [search , setSearch] = useState(false);

    let link =[
        {to: "/shop", name: "Shop"},
        {to: "/on sale", name: "On sale"},
        {to: "/new arrivels", name: "New Arrivels"},
        {to: "/brand", name: "Brand"}
    ]
    return (
        <div className="bg-white">
            <Alert/>
            <div className=" mx-6 my-3 md:my-6  md:flex md:justify-around md:items-center ">
                <div className="flex  justify-between">
                    <div className="flex  md:gap-0  gap-4 items-center">
                        <div onClick={()=> setNavbar(!navbar)} className="cursor-pointer w-4 md:hidden" >
                        {navbar?<i className=" fa-solid fa-xmark"></i> : <i className=" fa-solid fa-bars"></i>}
                        </div>
                    
                    <Logo />
                    </div>
                    <div className=" flex items-center sm:hidden gap-3">
                        <span className="cursor-pointer" onClick={() => setSearch(!search)}>
                            {search?<i className=" fa-solid fa-xmark"></i> : <i className="fa-solid fa-magnifying-glass"></i>}
                        </span>
                    <Icons />
                    </div>  
                </div>
                <nav className="mt-2 mt-0 ">
                    <ul className={`md:flex mt-4 p-4 md:p-0 sm:mt-0  text-md gap-4 bg-white font-semibold w-[80%] md:w-auto rounded-3xl md:rounded-none absolute md:static md:z-auto  ${navbar?'top-[5rem] z-[1] ':'top-[-6rem] z-[-1]' }`}>
                        {link.map((el , index) => 
                        <li onClick={()=> setNavbar(!navbar)} className="p-1 " key={index} ><Link to={el.to}>{el.name}</Link></li>
                        )}
                    </ul>
                </nav>
                <div  className={`flex justify-center items-center md:relative  absolute md:top-auto md:z-auto  md:block w-[80%] h-[5rem] md:h-auto md:w-auto bg-white rounded-3xl ${search?'top-[6rem] z-[1] ':'top-[-6rem] z-[-1]' }`}>
                <Search />
                </div>
                <div  className="hidden md:block"> 
                <Icons />
                </div>
            </div>
        </div>
    )
}

export default Header