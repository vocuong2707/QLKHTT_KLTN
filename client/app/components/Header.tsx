'use client'; // Đảm bảo chính xác

import React, {FC, useState, useEffect} from "react";
import NavItems from "../Utils/NavItems";
import { ThemeSwitcher } from "../Utils/ThemeSwitcher";
import { HiOutlineMenuAlt3, HiOutlineUserCircle } from "react-icons/hi";
import CustomModal from "../Utils/CustomModal";
import Login from "../components/Auth/Login";
import SignUp from "../components/Auth/SignUp";
import  Verification from "../components/Auth/Verification";
import { useSelector } from "react-redux";
import avatar from "../../public/asstes/avatar.jpg";
import Image from 'next/image';
import { useSession } from "next-auth/react";
import { useSocialAuthMutation } from "@/redux/features/auth/authApi";
import toast from "react-hot-toast";

type Props = {
    open : boolean;
    setOpen:(open : boolean) => void;
    activeItem : number;
    route: string;
    setRoute: (route :string) => void;

}

const Header:FC<Props> = ({activeItem, setOpen, route, open, setRoute}) => {
    const[active, setActive] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const[openSideabr, setOpenSideabr] = useState(false);
    const {user} = useSelector((state:any) => state.auth);
    const {data} = useSession();
    const [socialAuth, {isSuccess,error}] = useSocialAuthMutation();

    useEffect(() => {
        if(!user){
            if(data){
                socialAuth({email:data?.user?.email,
                    name:data?.user?.name,
                    avatar:data?.user?.image
                })
            }
        }if(isSuccess){
            toast.success("Login Successfully");
        }
    },[data,user])

    

    useEffect(() => {
        const handleScroll = () => {
            setActive(window.scrollY > 75);
        };

        const handleResize = () => {
            setIsMobile(window.innerWidth < 800); // Thay đổi kích thước màn hình
        };

        if (typeof window !== "undefined") {
            window.addEventListener("scroll", handleScroll);
            window.addEventListener("resize", handleResize);
            handleResize(); // Đảm bảo kích thước đúng khi mount

            // Dọn dẹp listener khi component unmount
            return () => {
                window.removeEventListener("scroll", handleScroll);
                window.removeEventListener("resize", handleResize);
            };
        }
    }, []);

    const handleClose = (e:any) => {
        if(e.target.id === "screen"){
            setOpenSideabr(false)
        }
    }
    console.log(user)

    return(
        <div className="w-full relative">
            <div className={`${active ? "dark:bg-opacity-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black fixed top-0 left-0 w-full h-[80px] z-[80] border-b  dark:border-[#ffffff1c] shadow-xl transition duration-500" :
                 "w-full border-b dark:border-[#ffffff1c] h-[80px] z-[80px] dark:shadow"  }`}>
            <div className="w-[95%] 800px:w-[92%] m-auto py-2 h-full">
                <div className="w-full h-[80px] flex items-center justify-between p-3">
                    <div>
                        <a href="/"
                        className={`text-[25px] font-Poppins font-[500] text-black dark:text-white`}>
                            Học Trực Tuyến
                        </a>
                    </div>
                    <div className="flex items-center">
                        <NavItems 
                            activeItem={activeItem} // Truyền activeItem chính xác
                            isMobile={false} // Truyền giá trị isMobile
                        />
                        <ThemeSwitcher />
                        {/* only for mobile */}
                        <div className="md:hidden">
                        <HiOutlineMenuAlt3
                            size={25}
                            className="cursor-pointer dark:text-white text-black"
                            onClick={() => setOpenSideabr(true)}
                         />
                         </div>
                    { 
                    user ? (
                         <a href={"/profile"}>
                        <Image 
                            src={user.avatar ? user.avatar.url : avatar}
                            alt=""
                            height={30}
                            width={30}
                            className="w-[30px] h-[30px] rounded-full cursor-pointer"
                            style={{border: activeItem == 5 ? "2px solid #ffc107" : "" }}
                            />
                        </a>
                     ) : (
                        <HiOutlineUserCircle
                            size={25}
                            className="cursor-pointer hidden md:block dark:text-white text-black"
                            onClick={() => {
                            setRoute("Login");
                            // setOpen(true);
                        }}
                    />
                    )
                    }

                    
                    </div>
                </div>
            </div>
            {/* mobile sidebar*/}
            {
                openSideabr && (
                    <div className="fixed w-full h-screen top-0 left-0 z-[99999] dark:bg-[unset] bg-[#00000024]"
                    onClick={handleClose}
                    id="screen"
                    >
                    <div className="w-[70%] fixed z-[999999999] h-screen bg-white dark:bg-slate-900 dark:bg-opacity-90 top-0 right-0 ">
                        <NavItems activeItem={activeItem} isMobile={true} />
                        <HiOutlineUserCircle
                            size={25}
                            className="cursor-pointer dark:text-white text-black"
                            onClick={() => setOpen(true)}
                         />
                         <br />
                         <br />
                         <p className="text-[16px] px-2 pl-5 text-black dark:text-white">    
                            Đại Học Công Nghiệp IUH
                         </p>
                        </div>
                    </div>
                )
            }
            </div>
            {
                route === "Login" && (
                    <>
                    {
                        open && (
                            <CustomModal
                                open = {open}
                                setOpen={setOpen}
                                setRoute={setRoute}
                                activeItem={activeItem}
                                component={Login}
                             />
                        )
                    }
                    </>
                )
            }
            {
                route === "Sign-Up" && (
                    <>
                    {
                        open && (
                            <CustomModal
                                open = {open}
                                setOpen={setOpen}
                                setRoute={setRoute}
                                activeItem={activeItem}
                                component={SignUp}
                             />
                        )
                    }
                    </>
                )
            }
             {
                route === "Verification" && (
                    <>
                    {
                        open && (
                            <CustomModal
                                open = {open}
                                setOpen={setOpen}
                                setRoute={setRoute}
                                activeItem={activeItem}
                                component={Verification}
                             />
                        )
                    }
                    </>
                )
            }
        </div>

    );
};

export default Header;