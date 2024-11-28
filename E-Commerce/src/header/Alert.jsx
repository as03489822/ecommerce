
function Alert(){
    let alertDel = (event) =>{
        event.target.parentElement.classList.add("hidden")
    }
    return (
        <div className=" sm:flex sm:justify-center text-center bg-black text-white h-9">
            <p className=" leading-8 text-xs satoshi">Sign up and get 20% of your first order <a href="" className="underline">Sign Up Now</a></p>
            <strong className="hidden sm:block cursor-pointer pl-40 text-2xl leading-8  " onClick={alertDel}>&times;</strong>
        </div>
    )
}

export default Alert