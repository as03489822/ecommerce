import Slider from 'react-slider'
import { useState } from 'react';
import axios from 'axios'


export default function SideBar({filtered ,tog}){
    
    let TShirts= ['tshrit1', 'tshrit2', 'tshrit3'];
    let Shorts= ['Shorts1', 'Shorts2', 'Shorts3'];
    let Shirts= ['Shirts1', 'Shirts2', 'Shirts3'];
    let Hoodie= ['Hoodie1', 'Hoodie2', 'Hoodie3'];
    let Jeans= ['Jeans1', 'Jeans2', 'Jeans3'];
    let [toggled , setToggled] = useState({
        TShirts: false,
        Shorts: false,
        Shirts: false,
        Hoodie: false,
        Jeans: false,
        Price: false,
        Colors: false,
        Sizes: true,
        DressStyle: true,  
    })
    let handleListToggled =(e) => {
        let NameAtt = e.target.getAttribute('name')
        setToggled( {...toggled, [NameAtt] : !toggled[NameAtt]}  )
    }
    let [values , setValues]= useState([50 , 350 ]);
    let colors= ['#00C12B' , '#F50606', '#F5DD06', '#F57906', '#06CAF5', '#063AF5', '#7D06F5', '#F506A4', '#FFFFFF', '#000000'];
    let [colorCheck , setColorCheck] = useState([false, false, false, false, false, false, false, false, false, false])
    let handleColorCheck = (index) => {
        let checkingArr = colorCheck.map((_ , idx) => idx === index)
        setColorCheck(checkingArr)
    }
    let sizes = ['XX Small', 'X Small', 'Small', 'Medim', 'Large', 'X-Large', 'XX Large', '3X Large', '4X Large']
    let [size , setSize] = useState([false , false , false ,false, false, false, false, false, false]);
    let handleSize= (index) => {
        let checkingArr = colorCheck.map((_ , idx) => idx === index);
        setSize(checkingArr)
    }
    let dressStyle = ['Casual', 'Formal', 'Party', 'Gym'];

    let handleFormSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/shop/filter', {
                minPrice: values[0],  // From your slider state
                maxPrice: values[1],
            });
    
            // Set the filtered products in the parent state (assuming it’s passed down as props)
            filtered(response.data);
            tog(true)
        } catch (error) {
            console.error("Error fetching filtered products:", error);
        }
    } 

    return(
        <>

            <hr className='my-2 md:my-4' />
            <form  onSubmit={handleFormSubmit}>
                <ul className='flex flex-col gap-4 py-2'>
                <li>
                    <div className='flex justify-between items-center'>
                        <span className='text-slate-400 text-[16px]'>T-Shirts</span>
                        <i onClick={handleListToggled} name={'TShirts'} className={`text-slate-400 ${toggled.TShirts? 'fa-solid fa-chevron-up': 'fa-solid fa-chevron-right'}`}></i>
                    </div>
                    <ul className={`${toggled.TShirts? 'block' : 'hidden'}`} >
                    {TShirts.map((el , idx) => (
                        <li className='ml-2' key={idx}>
                            <input className='bg-black' type="checkbox" name='Tshirts' id={el} />
                            <label className='ml-3' htmlFor={el}>{el}</label>
                        </li>
                    ))}
                    </ul>
                </li>

                <li>
                    <div className='flex justify-between items-center'>
                        <span className='text-slate-400 text-[16px]'>Shorts</span>
                        <i onClick={handleListToggled} name={'Shorts'} className={`text-slate-400 ${toggled.Shorts? 'fa-solid fa-chevron-up': 'fa-solid fa-chevron-right'}`}></i>
                    </div>
                    <ul className={` ${toggled.Shorts? 'block' : 'hidden'}`} >
                    {Shorts.map((el , idx) => (
                        <li className='ml-2' key={idx}>
                            <input className='bg-black' type="checkbox" name='Tshirts' id={el} />
                            <label className='ml-3' htmlFor={el}>{el}</label>
                        </li>
                    ))}
                    </ul>
                </li>

                <li>
                    <div className='flex justify-between items-center'>
                        <span className='text-[16px] text-slate-400'>Shirts</span><i onClick={handleListToggled} name={'Shirts'} className={`text-slate-400 ${toggled.Shirts? 'fa-solid fa-chevron-up': 'fa-solid fa-chevron-right'}`}></i>
                    </div>
                    <ul className={`${toggled.Shirts? 'block' : 'hidden'}`} >
                    {Shirts.map((el , idx) => (
                        <li className='ml-2' key={idx}>
                            <input className='bg-black' type="checkbox" name='Tshirts' id={el} />
                            <label className='ml-3' htmlFor={el}>{el}</label>
                        </li>
                    ))}
                    </ul>
                </li>

                <li>
                    <div className='flex justify-between items-center'>
                        <span className='text-[16px] text-slate-400'>Hoddie</span><i onClick={handleListToggled} name={'Hoodie'} className={`text-slate-400 ${toggled.Hoodie? 'fa-solid fa-chevron-up': 'fa-solid fa-chevron-right'}`}></i>
                    </div>
                    <ul className={`${toggled.Hoodie? 'block' : 'hidden'}`} >
                    {Hoodie.map((el , idx) => (
                        <li className='ml-2' key={idx}>
                            <input className='bg-black' type="checkbox" name='Tshirts' id={el} />
                            <label className='ml-3' htmlFor={el}>{el}</label>
                        </li>
                    ))}
                    </ul>
                </li>

                <li>
                    <div className='flex justify-between items-center'>
                        <span className='text-[16px] text-slate-400'>Jeans</span><i onClick={handleListToggled} name={'Jeans'} className={`text-slate-400 ${toggled.Jeans? 'fa-solid fa-chevron-up': 'fa-solid fa-chevron-right'}`}></i>
                    </div>
                    <ul className={`${toggled.Jeans? 'block' : 'hidden'}`} >
                    {Jeans.map((el , idx) => (
                        <li className='ml-2' key={idx}>
                            <input className='bg-black' type="checkbox" name='Tshirts' id={el} />
                            <label className='ml-3' htmlFor={el}>{el}</label>
                        </li>
                    ))}
                    </ul>
                </li>
            </ul>
            <hr className='my-2 md:my-4' />
            
            <div>
            <div className='flex justify-between items-center'>
                <span className='text-[20px] font-bold'>Price</span>
                <i onClick={handleListToggled} name={'Price'}  className={` ${ toggled.Price? 'fa-solid fa-chevron-up': 'fa-solid fa-chevron-right'}`}></i>
            </div>
                <Slider
                className={` bg-black h-1 my-3 rounded-full  ${ toggled.Price? 'block': 'hidden'}`}
                thumbClassName="h-[14px] top-[-5px] w-[14px] bg-[black] rounded-full focus:outline-black"
                trackClassName=""
                min={0} max={400}
                value={values}
                onChange={setValues}
                minDistance={10}
                />
                <div className={`flex justify-around text-[14px] font-semibold ${ toggled.Price? 'block': 'hidden'}`}><span>Min : ${values[0]}</span> <span>Max : ${values[1]}</span></div>    
                <hr className='my-2 md:my-4' />
            </div>


            <div>
                <div className='flex justify-between items-center'>
                    <span className='text-[20px] font-bold'>Colors</span>
                    <i onClick={handleListToggled} name={'Colors'}  className={` ${ toggled.Colors? 'fa-solid fa-chevron-up': 'fa-solid fa-chevron-right'}`}></ i>
                </div>
                <div className={` flex flex-wrap gap-2 py-2 ${toggled.Colors? 'block': 'hidden'}`}>
                    {colors.map((color ,index) =>(
                        <i key={index} onClick={() => handleColorCheck(index)} 
                        style={{background:color}}
                        className={`z-auto w-[37px] h-[37px] text-center leading-[40px] h-[40px] rounded-full border border-slate-300 ${colorCheck[index] ?'fa-solid fa-check text-white':null}`}></i>    
                    ))}
                </div>   
                <hr className='my-2 md:my-4' />
            </div>

            <div>
                <div className='flex justify-between items-center'>
                    <span className='text-[20px] font-bold'>Sizes</span>
                    <i onClick={handleListToggled} name={'Sizes'}  className={` ${ toggled.Sizes? 'fa-solid fa-chevron-up': 'fa-solid fa-chevron-right'}`}></ i>
                </div>
                <div className={ `flex flex-wrap  gap-2 py-2 ${toggled.Sizes? 'block': 'hidden'}`}>  
                        {sizes.map((sizeLabel , index) =>(
                            <button key={index} onClick={() => handleSize(index)} className={`py-2 px-4  rounded-full     ${size[index] ? 'bg-black text-white' :'bg-slate-200 opacity-50' } `}>{sizeLabel}</button>
                        ))} 
                    </div> 
                <hr className='my-2 md:my-4' />
            </div>

            <div>
                <div className='flex justify-between items-center'>
                    <span className='text-[20px] font-bold'>Dress Style</span>
                    <i onClick={handleListToggled} name={'DressStyle'}  className={` ${ toggled.DressStyle? 'fa-solid fa-chevron-up': 'fa-solid fa-chevron-right'}`}></ i>
                </div>
                <ul className={`flex flex-col gap-4 py-2 ${toggled.DressStyle? 'block': 'hidden'}`}>
                    {dressStyle.map((el , idx) => (
                            <li key={idx}>
                                <div className='flex justify-between items-center'>
                                    <span className='text-slate-400 text-[16px]'>{el}</span>
                                    <i onClick={handleListToggled} name={'TShirts'} className={`text-slate-400 ${toggled.dressStyle? 'fa-solid fa-chevron-up': 'fa-solid fa-chevron-right'}`}></i>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <hr className='my-2 md:my-4' />
            </div>
            <button type='submit' className='py-2 bg-black text-white rounded-full w-full cursor-pointer'>Apply Filter</button>
            </form>
        </>
    )
}