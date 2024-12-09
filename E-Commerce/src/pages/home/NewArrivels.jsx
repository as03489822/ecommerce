import Card from "./Card"
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from 'axios';

export default function NewArrivels(){
    let navigate = useNavigate();
    let [products, setProducts] = useState([]);
    let  fetchData = async() => {    
        const response =await axios.get('https://ecommerce-alpha-ten-44.vercel.app/products');
         setProducts(response.data)
    }
    useEffect(() =>{
        fetchData()
    }, []);

    const firstFive = products.slice(0, 4);
    return(<>
        <div className=" md:flex-column  text-center md:px-16">
        <div className=" md:flex-column ">
            <h1 className="text-[32px] md:text-[3rem] font-bold text-center pb-12">NEW ARRIVELS</h1>
            <Card arrivels={firstFive}  />
        </div >
        <button onClick={()=> navigate('/shop')} className="mt-12 w-[90%] md:w-auto border-gray-300 border  px-16 py-2 rounded-3xl">View All</button>
        <hr className="my-12  w-4/5 ml-10 md:ml-[8rem]"/>
        </div>
        </>
    )
}

