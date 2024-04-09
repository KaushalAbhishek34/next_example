"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProfilePage(){
    const router = useRouter()
    const logout = async () => {
        try {
           await axios.get('/api/users/logout')
           router.push('/login')
        } catch (error: any) {
            console.log(error.message)
        }
    }

    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <p>Profile Page</p>
            <hr />
            <button 
            onClick={logout}
            className="bg-blue-500 rounded-xl py-1 px-2 mt-4  hover:bg-blue-700 hover:px-4 font-bold">Logout</button>
        </div>
    )
}