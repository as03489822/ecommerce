import axios from "axios";
import { useEffect , useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CardRating from "../home/CardRating";
import CardSale from "../home/CardSale";

import Preview from "./Preview";

function Details(){
    let {id} =useParams(); //get id from url
    let [details , setDetails  ] = useState({});
    let [check , setCheck] =useState([false , false , false]);
    let [size , setSize] = useState([false , false , false ,false]);
    let [counter , setCounter] = useState(1);

    
    let colors  =['black','brown','gray'];
    let sizes = ['Small' , 'Medim' , 'Large' , 'X-Large'];
    const [selectedSize , setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [error , setError] = useState(false);

    let handleCheck =(index) => {
        setSelectedColor(colors[index])
        let match= check.map((_ ,i)=> i === index);
        setCheck(match);
    }
    let handleSize = (index) => {
        setSelectedSize(sizes[index]);
        let matched = size.map((_ , i) => i === index);
        setSize(matched);
    }
    let increase = () => {
        setCounter((preValue)=> (
            preValue +1
        ))
    }

    let decrease = () => {
        (counter===1? null:
            setCounter((preValue)=> (
                preValue -1
            ))
        )
    }

    useEffect(() =>{
    fetchData()
    }, [id]);

    let fetchData =async () => {
        const response =await axios.get(`https://ecommerce-alpha-ten-44.vercel.app/${id}`);
        setDetails(response.data)
    }
    let men =details.title && details.title.toLowerCase().includes('men');

    // let [cart , setCart] = useState(()=>{
    //     const savedCart = localStorage.getItem('cart')
    //     return savedCart ? (JSON.parse(savedCart)) : [];
    // })
    // useEffect(() => {
    //     localStorage.setItem('cart' , JSON.stringify(cart));
    // } , [cart])

    let handleAddToCart =async () => {
        try{
            if(!selectedColor || !selectedSize){
                toast.error("tou may not select size  or color" )
                setError(true);
                return;
            }
            setError(false);
            const newItem = {
                title: details.title,
                image:details.image,
                price : details.newPrice ? details.newPrice : details.oldPrice,
                selectedSize : selectedSize,
                selectedColor:selectedColor,
                count : counter,
            };
            let response =  await axios.post(`https://ecommerce-alpha-ten-44.vercel.app/cart`, newItem , { withCredentials: true })
            console.log(response.data)
            toast.success("product saved to cart")
            setCheck([false, false, false])
            setSize([false, false, false, false])
            setSelectedColor('')
            setSelectedSize('')
        }catch(err){
            toast.error(`${err.response.data.message}`)
            console.log(err.response.data.message)
        }
    };

    return(<>
        <div className="md:h-[550px] md:flex justify-center  w-full md:w-[ful]md:w-[50%] ">
            <ToastContainer position="top-center"  />
            <div className="p-6 md:p-auto self-center md:w-[50%] md:h-[530px] "><img src={details.image} className="w-full md:h-full rounded-2xl border border-slate-400 p-6 md:p-0 " alt="image" /></div>
            <div className="px-6 md:p-6 md:flex md:flex-col justify-center ">
                <div className="flex gap-2 flex-col   ">
                    <h1 className="text-2xl font-bold" >{details.title}</h1>
                    <div className={"flex items-center h-[19px]"}><CardRating rating={details.rating}  />{details.rating}<span className="opacity-75">/5</span></div>
                    <CardSale sale ={[details.newPrice , details.oldPrice] } />
                    <p>{details.description}</p>
                </div>
                <hr className=" my-4 "/>
                <div>
                    <p>Select Colors</p>
                    <div className="flex gap-2 py-2">
                        {colors.map((color ,index) =>(
                        <i key={index} onClick={() => handleCheck(index)} 
                        style={{background:color}}
                        className={`z-auto w-[40px] text-center leading-[40px] h-[40px] rounded-full  ${check[index] ?'fa-solid fa-check text-white':null}`}>
                        </i>    
                        ))}
                    </div>
                    {error ? (<p className="text-[16px] font-semibold text-[red] bg-[#fcd2d2] h-9 leading-[36px] pl-4 rounded-[10px]">Please Select Color</p>): null}
                </div>
                <hr className=" my-4 "/>
                <div>
                <p>Choose Size</p>
                    <div className="flex   gap-1 py-2">  
                        {sizes.map((sizeLabel , index) =>(
                            <button key={index} onClick={() => handleSize(index)} className={`py-2 px-4  rounded-full     ${size[index]   ? 'bg-black text-white' :'bg-slate-200 opacity-50' } `}>{sizeLabel}</button>
                        ))} 
                    </div>
                {error ? (<p className="text-[16px] font-semibold text-[red] bg-[#fcd2d2] h-9 leading-[36px] pl-4 rounded-[10px]">Please Select Size</p>): null}
                </div>
                <hr className=" my-4 "/>
                <div className="flex gap-2 pb-6 py-2">
                    <div className="flex w-[30%] relative">
                    <i onClick={decrease} className=" absolute top-3 left-2 cursor-pointer fa-solid fa-minus "></i>
                        <p className="text-center bg-slate-200 py-2 w-full rounded-full">{counter}</p>
                    <i onClick={increase} className=" absolute top-3 right-2 fa-solid fa-plus"></i>
                    </div >
                    <button onClick={handleAddToCart} className="w-[70%] bg-black py-2 px-8 text-white rounded-full">Add to Cart</button>
                </div>
            </div>
        </div>
        <Preview id={id}  reviews={details?.reviews || []}  fetchReviews={fetchData} men={men} />

        </>
    )
}

export default  Details
