import { Link } from "react-router-dom"
import { ToastContainer,toast } from "react-toastify"
import axios from "axios"
import { useNavigate } from "react-router-dom"
function Icons(){
    let navigate = useNavigate();
    let logOut=async()=>{
        let response =await axios.post('http://localhost:8080/logout' ,{} ,{withCredentials: true })
        navigate('/')
        console.log(response.data.message)
        toast.success(`${response.data.message}`)
    }
        return(
        <div className=" flex gap-3 md:gap-4">
            <ToastContainer position="top-center"  />
            <i onClick={logOut}  className="cursor-pointer text-xl md:text-2xl">Logout</i>
            <Link to={'/cart'}><i className="cursor-pointer fa-solid fa-cart-shopping text-xl md:text-2xl"></i></Link>
        </div>
    )
}

export default Icons