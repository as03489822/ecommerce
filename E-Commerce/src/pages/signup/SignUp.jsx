// import axios from "axios"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
 function SignUp(){

    let navigate = useNavigate();
    const [form, setForm] = useState({
        username:'',
        email:'',
        password:''
    })

    const handleOnChange = (e)=>{
        setForm((preValu)=>{
            return{...preValu, [e.target.name] : e.target.value}
        })
        setError('')
    }
    
    let [error , setError] = useState('');
    let [success , setSuccess] = useState('');
    const handleCreateAccount = async(e)=>{
        console.log(
            'click'
        )
        try{
            e.preventDefault();
            console.log(form)
            const response = await axios.post(`https://ecommerce-alpha-ten-44.vercel.app/signup`, form ,{withCredentials:true});
            setSuccess(response.data.message)
            setForm({
                username:'',
                email:'',
                password:''
            })
            navigate("/")
        }catch(err){
            setError(err.response.data.message)
        }
    }
    let navigateToLogin = ()=>{
        navigate('/Login')
    }

  return (
    <div className="mb-[130px] h-[70vh] flex flex-col justify-center items-center">
        {success? (<p className={`text-center w-[80%] py-1 rounded-full mt-1 text-[14px] bg-[#b8fcbb] pl-2 text-[#014705] font-semibold `}>{success}</p>) : null}
        <h1 className="text-[24px] md:text-[40px] font-bold">Sign Up</h1>
        <form onSubmit={handleCreateAccount} className="w-[300px]" >
            <div className="flex gap-1 flex-col mt-4">
                <label htmlFor="username"> Username</label>
                <input className=" bg-slate-100 py-2 pl-2 rounded-full" type="text" placeholder="username" onChange={handleOnChange} value={form.username} name="username" required />
            </div>
            <div className="flex gap-1  flex-col mt-4" >
                <label htmlFor="email">Email</label>
                <input className="bg-slate-100 py-2 pl-2 rounded-full" type="email" placeholder="email" onChange={handleOnChange} value={form.email} name="email" required />
                <p className="rounded-full mt-1 text-[14px] bg-[#fcd2d2] pl-2 text-red font-semibold">{error}</p>
            </div>
            <div className="flex gap-1 flex-col mt-4">
                <label htmlFor="password">Password</label>
                <input className="bg-slate-100 py-2 pl-2 rounded-full" type="Password" placeholder="password" onChange={handleOnChange} value={form.password} name="password" required />
            </div>
            <button type="submit" className="mt-4 bg-black text-white py-2 px-4 rounded-full">Create Account</button>
        </form>
        <div className="my-5"><span className=" text-12px text-[gray]">Already have  account?</span><span onClick={navigateToLogin} className=" ml-2 cursor-pointer underline font-bold">Login</span></div>
    </div>
  )
}

export default SignUp
