import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { ToastContainer,toast } from "react-toastify"


function Icons(){
    let navigate = useNavigate();
    let [token , setToken] = useState(localStorage.getItem('token'));
    useEffect(()=>{
        let data = localStorage.getItem('token');
        setToken(data)
    } , [token])

    let login=()=>{
        navigate('/login')
    }
    let logOut=async()=>{
        let response = await axios.post('http://localhost:8080/logout', {}, {withCredentials:true});
        toast.success(`${response.data.message}`)
        localStorage.removeItem('token')
        setToken(null)
        navigate('/')
    }
        return(
        <div className=" flex gap-3 md:gap-4">
            <ToastContainer position="top-center" />
            {token? <i className="cursor-pointer text-xl md:text-2xl" onClick={logOut}>logout</i> :<i className="cursor-pointer text-xl md:text-2xl" onClick={login}>logIn</i> }
            <Link to={'/cart'}><i className="cursor-pointer fa-solid fa-cart-shopping text-xl md:text-2xl"></i></Link>
        </div>
    )
}

export default Icons