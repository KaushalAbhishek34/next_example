"use client";
import Link from "next/link";
import React, {  useEffect } from "react";
import { useRouter } from "next/navigation";
import  axios from "axios";
import toast from "react-hot-toast";

export default  function SignUpPage(){
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false)
    const [loading,setLoading] = React.useState(false);

    const onSignup = async() =>{
        try {
           const response = await axios.post("/api/users/signup", user)
           console.log('signup success ', response.data)
           router.push("/login")
            
        } catch (error: any) {
            console.log("error is :-", error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if(user.email.length>0 &&  user.password.length>0 && user.username.length>0){
            setButtonDisabled(false)
        }else{
            setButtonDisabled(true)
        }
        },[user])
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-slate-500">
            <h2 className="text-3xl font-extrabold mb-5 text-orange-300">Signup</h2> 
            <hr />
            
            <label htmlFor="username">username</label>
            <input 
            className="p-2 border border-gray-300 rounded-xl mb-4 focus:outline-none focus:border-gray-600 "
            id="username"
            type="text"
            value={user.username} 
            onChange={(e) => setUser({...user, username: e.target.value})}
            placeholder="User Name"
            />
            <label htmlFor="email">email</label>
            <input 
            className="p-2 border border-gray-300 rounded-xl mb-4 focus:outline-none focus:border-gray-600 "
            id="email"
            type="text"
            value={user.email} 
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="Email"
            />
            <label htmlFor="password">Password</label>
            <input 
            className="p-2 border border-gray-300 rounded-xl mb-4 focus:outline-none focus:border-gray-600 "
            id="password"
            type="password"
            value={user.password} 
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="password"
            />
            <button 
            onClick={onSignup}
            className="p-2 border  rounded-3xl
            border-black shadow-2xl shadow-slate-400  mb-4 focus:outline-1 font-semibold text-white bg-black ">
                {buttonDisabled ? "No signup" : "Signup"}
            </button>
            <Link href="/login" > Visit login page</Link>
        </div>
    )
}