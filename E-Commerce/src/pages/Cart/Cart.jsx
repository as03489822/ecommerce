import { useEffect, useState } from "react"
import { toast , ToastContainer } from "react-toastify";
import axios from 'axios'
import Address from "./Address";

export default function Cart(){
    const [cart, setCart] = useState([]);
    const [toggled , settoggled] = useState(false)

    const increaseCount = (id)=>{
        setCart(
            cart.map(item => item.id === id ?{...item , count: item.count + 1}: item)
        )
    }
    const decreaseCount = (id)=>{
        setCart(
            cart.map(item => item.count >1   ? (item.id === id ?{...item , count: item.count - 1}: item):item)
        )
    }
    
    const handleCheckout = ()=>{
        settoggled(!toggled)
    }

    const removeProduct =async (id) => {
        let response = await axios.delete(`https://ecommerce-alpha-ten-44.vercel.app/${id}`);
        let data =cart.filter((_ , crt) => crt.id === id);
        setCart(data)
        console.log(response)
        toast.success(`${response.data.message}`)
    }

    useEffect(()=>{
        async function fetchData(){
            try{
                const response =await axios.get("https://ecommerce-alpha-ten-44.vercel.app/cart" ,{ withCredentials: true }) 
                if(response){
                    setCart(response.data)
                }else{
                    setCart([])
                }
            }catch(err){
                 toast.error(`${err.response.data.message}`)
            }
        }fetchData()   
        }, []);
    let Subtotal = cart.reduce((sum , item) => sum + (item.price*item.count), 0);
    let discount = Math.round(Subtotal/100 *20);
    let total = Subtotal - discount ;
    let cartlength = cart.length===0;

    return(
        <div className="mx-4   md:w-full">
            <ToastContainer position="top-center" />
            {/* cart products */}
            <div className={`md:px-[55px] my-3 text-[24px] md:text-[32px] font-bold `}> {!toggled? <p>YOUR CART</p> : <p>Order Now</p>}</div>
            <div className={`md:flex md:gap-7 md:justify-center md:items-top md:full  mb-[155px] `}>
                <div className="md:w-[55%] px-3 border border-slate-200 rounded-[10px]"> 
                {cartlength?<p className="h-[200px] flex justify-center items-center font-semibold">Your Cart Is Empty</p>
                :cart.map((item , idx) =>(
                <div className={`${!toggled?'block' : 'hidden'}`}  key={idx}>
                    <div className=" w-full flex  pt-3 pb-3  md:pt-5 md:pb-5 md:px-2 items-center">
                        <div className="w-[89px] md:w-[100px] h-[95px]"><img className="border border-slate-200 rounded-[1rem] w-full h-full" src={item.image} alt="" /></div>
                        <div className="ml-3 w-[70%] md:w-full" >
                                <div className=" flex justify-between">
                                    <div className="    ">
                                        <h1 className=" text-[16px] font-bold">{item.title}</h1>
                                        <p className="text-[12px]">Size:&nbsp;<span className="text-slate-400 ">{item.selectedSize}</span></p>
                                        <p className="text-[12px]">Color:&nbsp;<span className="text-slate-400 ">{item.selectedColor}</span></p>
                                    </div>
                                    <i onClick={()=> removeProduct(item._id)} className="cursor-pointer text-[red] leading-[20px] fa-solid fa-trash-can"></i>
                                </div>
                                <div className=" w-full flex justify-between items-center">
                                    <p className="text-[20px] font-bold">${item.price}</p>
                                    <div className="flex relative">
                                        <i onClick={() => decreaseCount(item.id)} className=" cursor-pointer absolute top-1 left-2 cursor-pointer fa-solid fa-minus "></i>
                                        <p className="text-center   bg-slate-200   px-10 w-full rounded-full">{item.count}</p>
                                        <i onClick={() => increaseCount(item.id)}  className=" cursor-pointer absolute top-1 right-2 fa-solid fa-plus"></i>
                                    </div >
                                </div>
                            </div>
                        </div>  
                        {idx === cart.length-1?null:<hr/>}
                    </div>
                ))}
                    {/* address */}
                    <div className={` z-10 bg-white  ${toggled?'block' : 'hidden'}`}>
                        <Address cart={cart} total={total} />
                    </div>
                </div>  

                {/* cart summary */}
                <div className={` md:w-[35%] h-full border boreder-slate-200 rounded-[10px]  mt-6 flex gap-3 flex-col p-3 ${cartlength?'hidden ':'block'} ${!toggled?'block' : 'hidden'}`}>
                    <p className="text-[20px] font-bold">Order Summary</p>
                    <div className=" flex flex-col gap-3">
                        <p className=" flex justify-between">
                            <span className="text-[16px] text-slate-400">Subtotal</span>
                            <span className="font-bold">${Subtotal}</span>
                        </p>
                        <p className=" flex justify-between">
                            <span className="text-[16px] text-slate-400">Discount (-20%)</span>
                            <span className="text-[red] font-bold">-${discount}</span>
                        </p>
                        <p className=" flex justify-between">
                            <span className="text-[16px] text-slate-400">Delivery Fee</span>
                            <span className="font-bold">$</span>
                        </p>
                    </div>
                    <hr />
                    <div className="flex flex-col gap-3">
                        <p className=" flex justify-between items-center">
                            <span className="text-[20px]">Total</span>
                            <span className="font-bold text-[20px]">${total}</span>
                        </p>
                        <div className=" md:w-full flex gap-3">
                            <div className="relative md:w-[75%]">
                                <i className="text-slate-400 top-3 left-3 absolute fa-solid fa-tag "></i>
                                <input className="py-2 rounded-full pl-10 bg-slate-100 text-slate-400 focus:outline-none text-[16px] md:w-full" placeholder="Add promo code" type="text" name="" id="" />
                            </div>
                            <button className=" w-[25%] rounded-full text-[16px] bg-black text-white px-5">Apply</button>
                        </div>
                    </div>
                    <button onClick={handleCheckout} className="my-3 bg-black py-2 rounded-full text-white text-[16px]">Go To Checkout <i></i></button>
                </div>
            </div>
        </div>
    )
}
