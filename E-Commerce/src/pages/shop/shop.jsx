import { useState , useEffect} from 'react'
import filter from '../../assets/svg/Frame.svg'
import Products from './Products'
import axios from 'axios'
import SideBar from './SideBar'

function Shop() {
    let [filterToggle , setFilteToggle] = useState(true);
    let handleToggled = ()=>{
        setFilteToggle(!filterToggle)
    }

    let [products, setProducts] = useState([]);
    useEffect(() =>{
        async function fetchData() {    
            const response =await axios.get('https://ecommerce-alpha-ten-44.vercel.app/products');
             setProducts(response.data)
        }fetchData()
    }, []);  

    useEffect(()=> {
        const handleResize = () =>{
            if(window.innerWidth >= 786){
                setProductsPerPage(9)
            }else{
                setProductsPerPage(6)
            }
        }
        handleResize();
        window.addEventListener('resize' , handlePrevious);
        return ()=> window.removeEventListener('resize' , handlePrevious)
    } , [])

    // FOR pageination and products per page
    let [currPage ,setCurrPage] = useState(1);

    // for mobile view 6 product perPage
    let [productsPerPage , setProductsPerPage] =useState(6) ;
    let totalPages = Math.ceil(products.length/productsPerPage);

    let startingIndex = (currPage - 1) * productsPerPage;
    let endingIndex = startingIndex + productsPerPage;

    let currentProducys = products.slice(startingIndex , endingIndex);

     let goToPage = (pageNumber) => {
        setCurrPage(pageNumber)
    }

    let handleNext =() => {
        setCurrPage( currPage +1)
    }

    let handlePrevious =() => {
        setCurrPage( currPage -1)
    }


   
    return(
        <>
        <hr  className=' mx-4 md:mx-10 md:my-6 '/>
    <div className='relative h-full w-full md:flex justify-center   '>  
        <div className={`p-4  bg-white border relative border-slate-100 rounded-t-[1.5rem] md:rounded-b-[1.5rem] w-full h-full md:w-[20%]  ${filterToggle?'hidden md:block': 'block' } `} >    
        <div className='flex justify-between  items-center'> 
                <p className='text-[20px]  font-bold'>Filter</p>
                <i onClick={handleToggled} className="md:hidden cursor-pointer text-slate-500 text-[24px] fa-solid fa-xmark"></i>
            </div>
            <SideBar filtered={setProducts} tog={setFilteToggle} />
        </div>

        {/* main area */}
        <div className={`md:w-[70%] px-4 md:px-0 h-full  bg-white  w-full ${filterToggle?'block ': 'hidden md:block' }`}>
            <div className=' md:ml-6 py-2 flex justify-between items-center'>
                <p className='text-[24px] md:text-[32px] font-bold'>Shop</p>
                <div onClick={handleToggled} className='md:hidden flex justify-center items-center bg-slate-200 rounded-full h-8 w-8 cursor-pointer '><img className='w-3 h-3'  src={filter} alt="frame"  /></div>
            </div>
            <Products arrivels={currentProducys} />
            
            <hr  className='mx-4'/>
            <div className='flex justify-between items-center h-9 md:mx-4 pt-5 py-10 h-[100px]'>
                <button onClick={handlePrevious} className={`border border-slate-200 py-1 px-2 text-[12px] rounded-md ${currPage === 1 ? 'hidden' : null} `}><i className="text-[12px] h-4 w-4 fa-solid fa-arrow-left"></i> Previous</button>
                <div className='flex items-center gap-2'>
                    {Array.from({length:totalPages} , (_ ,index) => (
                        <p key={index + 1} onClick={() => goToPage(index + 1)} className={`flex justify-center items-center w-7 h-7  ${currPage === index+1?'bg-slate-200':null}`}>{index+1}</p>
                    ))}
                </div>
                <button onClick={handleNext} className={`border border-slate-200 py-1 px-2 text-[12px] rounded-md ${currPage === totalPages? 'hidden' : 'block'}`}> Next <i className="text-[12px] h-4 w-4 fa-solid fa-arrow-right"></i></button>
            </div>
        </div> 
    </div>
    </>
    )
}

export default Shop
