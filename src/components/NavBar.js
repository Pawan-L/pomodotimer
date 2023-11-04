import { useEffect, useState } from "react";
import { FaList } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import { IoClose } from 'react-icons/io5';
import { Link } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";
import { useUserAuth } from "./Context";
export default function NavBar(){
    const user=reactLocalStorage.getObject('user')
    const { logOut }=useUserAuth();
    const [links, setLinks]=useState([]);
   useEffect(()=>{
    if(user){
        const links=[
            {name:"Home",link:'/',fun:""},
            {name:user.displayName,link:"",fun:""},
            {name:"LogOut", link:"", fun:logOut}
        ]
        setLinks(links)
    }else{
    const links=[
        {name:"Home" ,link:"/",fun:""},
        {name:"Login", link:"/login",fun:""},
        {name:"SignUP",link:"/sign_up", fun:""},
    ]
    setLinks(links)
}
   },[logOut])
    
    let [open, setOpen]=useState(false);
    return(
        <div className="shadow-md w-full fixed top-0 left-0">
            <div className="md:flex items-center justify-between bg-cyan-400 py-4 md:px-10 px-7">
                <div className="font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-gray-800">
                    <span className="text-3xl text-indigo-600 mr-1 pt-1"><IoIosTimer/></span>
                    Pomodoro Timer
                </div>
                <div onClick={()=>setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
                    {open?<IoClose/>:<FaList/>}
                </div>
                <ul className={`md:flex md:items-center pb-1 absolute font-[Poppins]
                md:static bg-cyan-400 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all
                duration-500 ease-in ${open?'top-10':'top-[-490px]'}`}>
                    {
                        links.map((link)=>
                            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                                <Link to={link.link} onClick={link.fun} className="text-black duration-500">{link.name}</Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}