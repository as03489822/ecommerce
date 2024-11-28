import Logo from "../header/Logo"
import Visa from '../assets/creditCard/Visa.png'
import Mastercard from '../assets/creditCard/Mastercard.png'
import Paypal from '../assets/creditCard/Paypal.png'
import Pay from '../assets/creditCard/ Pay.png'
import GPay from '../assets/creditCard/G Pay.png'


export default function Footer(){
    let icons = ['fa-brands fa-twitter', 'fa-brands fa-facebook', 'fa-brands fa-instagram', 'fa-brands fa-github'];
    let list1 =['About', 'Features', 'Works', 'Career'];
    let list2 = ['Customer Support', 'Delivery Details', 'Term & Condations', 'Privacy Policy'];
    let list3 =['Account', 'Manage Deleveries', 'Orders', 'Payment'];
    let list4 =['Free eBook', 'Deploymen Tutorial', 'How to - Blog', 'Youtube Playlist'];
    let payment =[Visa , Mastercard , Paypal , Pay , GPay];
    return( 
    
        <div className="relative h-[981px] md:h-[450px] bg-[#F2F0F1] ">
            <div className=" static mt-[130px] md:mt-[90px]  md:flex  md:justify-center ">
            <div className="md:flex md:items-center md:justify-around h-[330px] md:h-[180px] w-[90%] bg-black text-white  mx-5 md:mx-auto px-7 py-7 rounded-3xl absolute top-[-130px] md:top-[-90px]">
                 <h1 className="text-[32px] font-bold leading-[2.25rem] md:leading-[3rem] md:w-[551px] text-[40px] " >STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
                 <div className="py-8  w-[300px] ">
                    <form action="">
                    <input type="text" className=" w-full h-[42px] rounded-full pl-6" placeholder="enter you email address" />
                    <button className="mt-2 w-full h-[42px] bg-white rounded-full text-black font-semibold">Subscribe to Newsletter</button>
                    </form>
                 </div>
            </div>
            </div>

            <div className="pt-[220px] md:pt-[90px] pl-6 w-[90%] md:w-[100%] md-w-full ">
                <div className="md:flex justify-around  ">

                <div className=" mt-12">
                    <Logo  />
                    <p className="md:w-[248px] text-sm pt-3">We have clothes that suits your style and which you&apos;re proud to wear. From women to men</p>
                    <div className="pt-3  flex gap-3">
                        {icons.map((icon , index) => (
                            <i key={index} className={`w-[28px] h-[28px] border border-slate-400 leading-[24px] text-center rounded-full bg-white ${icon}`}></i>
                        ))}
                    </div>
                </div>
                <div className="flex flex-wrap md:flex-nowrap mt-10 w-[90%] md:w-[65%] justify-between  ">  
                    <ul className="w-[50%]">
                        <h1 className="font-bold  leading-[2rem] tracking-widest">COMPANY</h1>
                        {list1.map((listText , index) => (
                            <li key={index} className="opacity-70 leading-[2rem]">{listText}</li>    
                        ))}
                    </ul>
                    <ul className="w-[50%]">
                        <h1 className="font-bold  leading-[2rem] tracking-widest">HELP</h1>
                        {list2.map((listText , index) => (
                            <li key={index} className="opacity-70 leading-[2rem]">{listText}</li>    
                        ))}
                    </ul>
                    <ul className="w-[50%]">
                        <h1 className="font-bold  leading-[2rem] tracking-widest">FAQ</h1>
                        {list3.map((listText , index) => (
                            <li key={index} className="opacity-70 leading-[2rem]">{listText}</li>    
                        ))}
                    </ul>
                    <ul className="w-[50%]">
                        <h1 className="font-bold  leading-[2rem] tracking-widest">RESOURCES</h1>
                        {list4.map((listText , index) => (
                            <li key={index} className="opacity-70 leading-[2rem]">{listText}</li>    
                        ))}
                    </ul>  
                </div>

                </div>

                <hr className="my-8  mx-4 text-center w-[95%] md:mx-auto  "/>
                <div className=" md:ml-12  w-[90%] md:w-[85%] ">
                        <div className="md:flex md:justify-between text-center w-full">
                        <p>Shop.co &#169; 2000-2023. All Right Reserved</p>
                    <div className="flex justify-center  items-center gap-4 mt-4 md:mt-auto ">
                        {payment.map((card , index) =>
                        <img key={index} src={card} alt="creditcard" className=" h-[25px] w-[39px] object-contain bg-white rounded-sm   "  />
                        )}
                    </div>
                        </div>
                </div>

            </div>
        </div>
    )
}