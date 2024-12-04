import { useState } from "react"
import axios from 'axios'

function Address ({cart, total}){
    // let cartArr = cart;
    // console.log(cartArr)
    const [form , setForm]= useState({
        // cart:cartArr,
        contact: '',
        country: '',
        firstname: '',
        lastname: '',
        address: '',
        city: '',
        postalcode: '',
        number: '',
        payment: ''
    })

    let handleChange =(e)=> {
        setForm((preValue)=>{

            return {...preValue , [e.target.name]:e.target.value}
        })
    }

    let placeOrder=async(e)=>{
        e.preventDefault();
        console.log(form)
        try{
        let response = await axios.post('http://localhost:8080/order' ,{form } , {withCredentials: true});
        console.log(response);
        }catch(err){
            console.log(err)
        }
    }

    return(
        <div className="md:">
            <form >
                <div>
                    <p className="mt-1 text-[20px] font-semibold">Contact</p>
                    <input className="text-[14px] py-2 my-2 rounded-full pl-3 w-full bg-slate-100" name={'contact'} value={form.contact} onChange={handleChange} type="text" placeholder="Email or phone number" />
                </div>
                <div>
                    <p className="mt-1 text-[20px] font-semibold">Delivery</p>
                    <div>
                    <div className="flex gap-2">
                        <input className="text-[14px] py-2 my-2 rounded-full pl-3 w-full bg-slate-100" name={'firstname'} value={form.firstname} onChange={handleChange} type="text" placeholder="First name" />
                        <input className="text-[14px] py-2 my-2 rounded-full pl-3 w-full bg-slate-100" name={'lastname'} value={form.lastname} onChange={handleChange} type="text" placeholder="Last name" />
                    </div>
                    <div className="flex gap-2">
                        <input className="text-[14px] py-2 my-2 rounded-full pl-3 w-full bg-slate-100" name={'country'} value={form.country} onChange={handleChange} type="text" placeholder="Country/Region" />
                        <input className="text-[14px] py-2 my-2 rounded-full pl-3 w-full bg-slate-100" name={'address'} value={form.address} onChange={handleChange} type="text" placeholder="Address" />
                    </div>
                    <div className="flex gap-2">
                        <input className="text-[14px] py-2 my-2 rounded-full pl-3 w-full bg-slate-100" name={'city'} value={form.city} onChange={handleChange} type="text" placeholder="City" />
                        <input className="text-[14px] py-2 my-2 rounded-full pl-3 w-full bg-slate-100" name={'postalcode'} value={form.postalcode} onChange={handleChange} type="text" placeholder="Postal code" />
                        <input className="text-[14px] py-2 my-2 rounded-full pl-3 w-full bg-slate-100" name={'number'} value={form.number} onChange={handleChange} type="number" placeholder="Phone" />
                    </div>
                    </div>
                </div>
                <div>
                    <p className="mt-1 text-[20px] font-semibold">Payment</p>
                    <input className="my-3" type="radio" name="payment"  id="payment"  value={'onDeleviry'} onChange={handleChange} /><label className="ml-2" htmlFor="payment">Cash on Delivery (COD)</label>
                    <hr className="md:hidden"/>
                    <input className="my-3 md:ml-10" type="radio" name="payment" id="payment1"  value={'online'} onChange={handleChange} /><label className="ml-2" htmlFor="payment1">Payment with Stripe</label>
                </div>
                <div className="md:flex md:justify-between">
                        <p className=" flex justify-between md:justify-start  md:gap-2 items-center">
                            <span className="text-[20px]">Total</span>
                            <span className="font-bold text-[20px]">${total}</span>
                        </p>
                        <button onClick={placeOrder} className="w-full md:w-auto md:px-10 my-3 bg-black py-2 rounded-full text-white text-[16px]" >Place Order</button>
                </div>
                
            </form>
        </div>
    )
}

export default Address