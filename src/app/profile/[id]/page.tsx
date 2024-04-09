export default function UserProfile({params}: any){
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-slate-500">
            <h1>Profile</h1>
            <hr />
            <p className="text-4xl ">Profile Page
            <span className="p-2 ml-4 rounded-2xl bg-orange-400 font-extrabold text-black">{params.id}</span>
            </p>
        </div>
    )
}