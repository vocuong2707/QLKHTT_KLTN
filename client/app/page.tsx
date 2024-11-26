'use client'

import React, { FC, useState } from 'react'
import Heading from './Utils/Heading'
import Header from "./components/Header"
import Hero from './Route/Hero'

interface Props {}

const Page:FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login")

    return ( 
        <div>
        <Heading
        title="Học Trực Tuyến"
        description="nền tảng để học sinh học tập và nhận sự trợ giúp từ giáo viên" 
        keyword="Lập trình, MERN, Redux, Học máy"
      />

      <Header
         open={open}
         setOpen={setOpen} // Đảm bảo setOpen được truyền vào
         activeItem={activeItem}
         setRoute={setRoute}
         route={route}
      />
      <Hero />
        </div>
    )
}

export default Page