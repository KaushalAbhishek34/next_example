"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default  function LogInPage(){
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    })

    const [buttonDisabled, setButtonDisabled] = React.useState(false)
    const [loading,setLoading] = React.useState(false);

    const onLogIn = async() =>{
        try {
            setLoading(true)
            const response =await axios.post("/api/users/login", user);
            console.log("Login success", response.data)
            router.push("/profile")
            
        } catch (error: any) {
            console.log("Login failed", error.message)
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        if(user.email.length>0 &&  user.password.length>0 ){
            setButtonDisabled(false)
        }else{
            setButtonDisabled(true)
        }
    }, [user])
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-slate-500">
            <h2 className="text-3xl font-extrabold mb-5 text-orange-300">{loading ? "Processing": "Login"}</h2> 
            <hr />
            <label htmlFor="email">email</label>
            <input 
            className="p-2 border border-gray-300 rounded-xl mb-4 focus:outline-none focus:border-gray-600 "
            id="username"
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
            onClick={onLogIn}
            className="p-2 border  rounded-3xl
            border-black shadow-2xl shadow-slate-400  mb-4 focus:outline-1 font-semibold text-white bg-black ">
                LogIn
            </button>
            <Link href="/signup" > Visit signup page</Link>
        </div>
    )
}