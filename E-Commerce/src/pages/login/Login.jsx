import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";

function Login( ) {
    let navigate = useNavigate();
    const [form, setForm] = useState({
      email:'',
      password:''
  })
  let[error , setError] = useState('');
  let [type , setType] = useState('');
  const handleOnChange = (e)=>{
      setForm((preValu)=>{
          return{...preValu, [e.target.name] : e.target.value}
      })
      setError('')
      setType('')
  }
 

  const handleLogin = async(e)=>{
    try{
        e.preventDefault();
        const response = await axios.post(`http://localhost:8080/login`, form , {withCredentials: true});   
        localStorage.setItem('token', response.data.token);
        // setToken(token)
        setForm({
            email:'',
            password:''
        })
        navigate(-1)
    }catch(err){
        setError(err.response.data.message)
        setType(err.response.data.type)
        console.log(type)
    }
    }

    let navigateToSignup = ()=>{
        navigate('/signup')
    }

    return(
    <div className="mb-[130px] h-[70vh] flex flex-col justify-center items-center">
        <h1 className="text-[24px] md:text-[40px] font-bold">Login</h1>
        <form onSubmit={handleLogin} className="w-[300px]" >
            <div className="flex gap-1  flex-col mt-4" >
                <label htmlFor="email">Email</label>
                <input className="bg-slate-100 py-2 pl-2 rounded-full" type="email" placeholder="email" onChange={handleOnChange} value={form.email} name="email" required />
                <p className="rounded-full mt-1 text-[14px] bg-[#fcd2d2] pl-2 text-red font-semibold">{type === 'email'? error :null}</p>
            </div>
            <div className="flex gap-1 flex-col mt-4">
                <label htmlFor="password">Password</label>
                <input className="bg-slate-100 py-2 pl-2 rounded-full" type="Password" placeholder="password" onChange={handleOnChange} value={form.password} name="password" required />
                <p className="rounded-full mt-1 text-[14px] bg-[#fcd2d2] pl-2 text-red font-semibold">{type === 'password'? error :null}</p>
            </div>
            <button type="submit" className="mt-4 bg-black text-white py-2 px-4 rounded-full">Log In</button>
        </form>
        <div className="my-5"><span className=" text-12px text-[gray]">Don&apos;t have an account?</span><span onClick={navigateToSignup} className=" ml-2 cursor-pointer underline font-bold">Sign Up</span></div>
    </div>
    )
}

export default Login