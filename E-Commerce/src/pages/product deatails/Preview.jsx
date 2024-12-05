import CardRating from "../home/CardRating";
import {useState , useEffect} from  "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "../home/Card"

export default function Preview({id, reviews, fetchReviews, men}){
    
    const navigate = useNavigate();
    let [formData , setFormData] = useState({
        username: '',
        rating: 2.5,
        message: ''
    })

    let [view , setView] =useState(false)
    let [products, setProducts] = useState([]);

    let handleChange =(event) => {
        setFormData((prevalue) =>( 
        {...prevalue , [event.target.name] : event.target.value}
        ))
    }

    let handleView = () => {
        setView(!view)
    }

    let handleSubmit =async(event)=>{
        event.preventDefault();
        try {
            await axios.post(`https://ecommerce-rouge-eight.vercel.app/review`, formData);
            setFormData({
                username: '',
                rating: '',
                message: ''
            });
            alert("Review submitted successfully!");
            setView(!view)
            fetchReviews()
            navigate(`/product/${id}`)
        } catch (error) {
            console.error("Error submitting review:", error);
        }
    }

    let  fetchData = async() => {    
        const response =await axios.get('https://ecommerce-rouge-eight.vercel.app/products');
         setProducts(response.data)
    }
    useEffect(() =>{
        fetchData()
    }, []);
    const menProducts = products.filter(product => product.title.toLowerCase().includes("men"));
    const womenProducts = products.filter(product => product.title.toLowerCase(). includes("women"));
    let recomendProduct =men? menProducts : womenProducts;
    let randomRroduct = Math.floor(Math.random()*5);
    let recomendArr = recomendProduct.slice(randomRroduct, randomRroduct + 4);

    return(
        <div className=" p-6  md:w-[100%] md:m-auto">
            <div className="md:px-20">
                            {/* product details */}
            <hr className=" mb-4 "/>
            {view?
            <div className="flex justify-between">
                <p className="text-[20px] font-bold">Comment Here</p>
                <button onClick={handleView} className="text-[12px] bg-black text-white rounded-full px-3 py-2">View All Comments </button>
            </div>
            :
            <div className="flex justify-between">
                <p className="text-[20px] font-bold">All Reviews</p>
                <button onClick={handleView} className="text-[12px] bg-black text-white rounded-full px-3 py-2">Write a Review</button>
            </div>}
            <hr className=" my-4 "/>
            </div>

            {/* product reviews */}
            <div className={`  ${!view ?'md:px-20 md:flex md:flex-wrap md:justify-between block' :'hidden'} `}>
            {reviews.length > 0 ? (reviews.map((review,index) =>(
                <div key={index} className="shrink-0 border border-slate-300  w-[100%] md:w-[49%] px-6 py-2 rounded-3xl my-4">
                    <div className="flex items-center mt-1 h-[19px]">
                        <CardRating rating={review.rating} />
                    </div>
                    <div className="pt-4 text-xl font-bold">
                        {review.username}
                        <i className="fa-solid fa-circle-check text-[#01AB31]"></i>
                    </div>
                    <p className="pt-4 text-base">
                        {review.message}
                    </p>
                </div> 
                ))):<p>No reviews available</p>}
            </div>

            {/* Add review */}
            <div className={ `md:px-20 ${view ?'block' :'hidden'}`} >
                <form onSubmit={handleSubmit} className="flex md:gap-4  flex-col md:flex-auto gap-4">
                    <div className="md:flex md:gap-10">
                    <div  className="md:w-[50%]">
                    <label htmlFor="user" className=" block font-semibold" >Username</label>  
                    <input className="mt-2 w-full  focus:outline-none bg-slate-200 py-2 pl-5 rounded-full" type="text" id="user" placeholder="Username" name="username" value={formData.username} onChange={handleChange} required/>
                    </div>

                    <div className=" md:flex md:gap-5 md:flex-col  md:w-[50%]">
                    <label htmlFor="rate" className=" block font-semibold">Rating (0 to 5)</label>
                    <input className=" w-full  bg-gray-200 appearance-none rounded-lg h-2 "  type="range" min={0} max={5} step={0.5} name="rating" value={formData.rating} onChange={handleChange} />
                    </div>
                    </div>

                    <div>
                    <label htmlFor="description" className=" block font-semibold" >Comment</label>
                    <textarea className="mt-2 w-full  focus:outline-none bg-slate-200 py-2 pl-5 rounded-2xl" cols={5} rows={5} name="message" id="description" onChange={handleChange} value={formData.message} required> </textarea>
                    </div>

                    <button className="md:w-[30%] bg-black text-white py-2 px-4 rounded-full " type="Submit">Submit</button>
                </form>
            </div>

                {/* recommended product */}
            <div className="flex  flex-col justify-center w-full mb-16" >
                <p className="md:my-10 px-10 py-5 leading-[30px] text-center text-[32px] md:text-[48px] font-bold" >YOU MIGHT ALSO LIKE</p>
                <Card  arrivels={recomendArr}  />
            </div>

        </div>
    )
}