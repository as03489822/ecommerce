import Card from "./Card"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function TopSell(){
    let navigate = useNavigate();
        let [products, setProducts] = useState([]);
        useEffect(() =>{
            async function fetchData() {    
                const response =await axios.get('https://ecommerce-rouge-eight.vercel.app/products');
                 setProducts(response.data)
            }fetchData()
        }, []);

        
    const secondFive = products.slice(4, 8);
    return(
        <div className="md:flex-column  text-center md:px-16">
        <div className="md:flex-column ">
            <h1 className="text-[32px] md:text-[3rem] font-bold text-center pb-12">TOP SELLING</h1>
            <Card arrivels={secondFive} />
        </div >
        <button onClick={()=> navigate('/shop')} className="w-[90%] md:w-auto mt-12 border-gray-300 border px-16 py-2 rounded-3xl">View All</button>
        </div>
    )
}
