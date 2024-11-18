'use client'

import React, { FC } from 'react'
import Image from 'next/image';
import avatarDefault from "../../../public/asstes/avatar.jpg";
import { RiLockPasswordLine } from 'react-icons/ri';
import { SiCoursera } from 'react-icons/si';
import { AiOutlineLogout } from 'react-icons/ai';

type Props = {
    user : any;
    active : number;
    avatar: string | null;
    setActive: (active : number) => void;
    logOutHandler: any;
}

const SideBarProfile:FC<Props> = ({user, active,avatar,setActive,logOutHandler}) => {

    return ( 
        <div className='w-full'>
            <div className={`w-full flex items-center px-3 py-4 cursor-pointer
             ${active === 1 ? "dark:bg-slate-800 bg-white " : "bg-transparent" } `}
             onClick={() => setActive(1)}
             >
                <Image
                    src={user.avatar || avatar ? user.avatar.url || avatar: avatarDefault}
                    alt=""
                    width={20}
                    height={20}
                    className="w-[25px] h-[25px] 800px:w-[30px] 800px:h-[30px]  cursor-pointer rounded-full"
                 />
                 <h5 className="pl-2 hidden md:block font-Poppins dark:text-white text-black">
                        My Account
                 </h5>

            </div>
            <div className={`w-full flex items-center px-3 py-4 cursor-pointer
             ${active === 2 ? "dark:bg-slate-800 bg-white " : "bg-transparent" } `}
             onClick={() => setActive(2)}
             >
            
             <RiLockPasswordLine size={20} fill="#fff" />

             <h5 className="pl-2 hidden md:block font-Poppins dark:text-white text-black">
                    Change Password
             </h5>

            </div>

            <div className={`w-full flex items-center px-3 py-4 cursor-pointer
             ${active === 3 ? "dark:bg-slate-800 bg-white " : "bg-transparent" } `}
             onClick={() => setActive(3)}
             >
            
             <SiCoursera size={20} fill="#fff" />

             <h5 className="pl-2 hidden md:block font-Poppins dark:text-white text-black">
                    Enrolled Courses
             </h5>

            </div>

            
            <div className={`w-full flex items-center px-3 py-4 cursor-pointer
             ${active === 4 ? "dark:bg-slate-800 bg-white " : "bg-transparent" } `}
             onClick={() => logOutHandler()}
             >
            
             <AiOutlineLogout size={20} fill="#fff" />

             <h5 className="pl-2 hidden md:block font-Poppins dark:text-white text-black">
                    Log Out
             </h5>

            </div>
        </div>

    )
}

export default SideBarProfile