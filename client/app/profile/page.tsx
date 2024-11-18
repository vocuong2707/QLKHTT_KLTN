'use client'
import React, {FC, useState} from 'react';
import Protected from '../hooks/useProtected';
import Header from '../components/Header';
import Heading from '../Utils/Heading';
import Profile from "../components/profile/profile"
import { useSelector } from 'react-redux';


type Props ={}

const Page:FC<Props> = (props) => {
    const [open, setOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(5);
    const [route, setRoute] = useState("Login");
    const {user} = useSelector((state:any) => state.auth);

    return (
       <div>
            <Protected>
             <Heading 
                    title={`${user?.name} profile`}
                     description="nền tảng để học sinh học tập và nhận sự trợ giúp từ giáo viên" 
                    keyword="Lập trình, MERN, Redux, Học máy"
                />
            <Header
                    open={open}
                    setOpen={setOpen} // Đảm bảo setOpen được truyền vào
                    activeItem={activeItem}
                    setRoute={setRoute}
                    route={route} // Sửa lại để đảm bảo route được truyền vào
                />
            <Profile user={user} />
            </Protected>
       </div>
    );
}



export default Page;
