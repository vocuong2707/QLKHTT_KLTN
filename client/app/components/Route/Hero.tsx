import Image from "next/image";
import React, { FC } from "react";
import { BiSearch } from "react-icons/bi";
import bannerImage from '../../../public/asstes/bander1.png';

type Props = {};

const Hero: FC<Props> = (props) => {
    return (
        <div className="hero-container flex items-center min-h-screen relative">
            <div className="container flex flex-col lg:flex-row justify-between items-center h-full px-4 lg:px-8 py-16 lg:py-32">
                {/* Phần Hình Ảnh */}
                <div className="image-section w-full lg:w-[40%] flex justify-center items-center overflow-hidden rounded-[500px]  bg-gray-200">
          <Image
            src={bannerImage} // Replace with your hero image
            alt="Hero image"
            width={1200} // Adjust width as needed
            height={800} // Adjust height as needed
            layout="responsive"
            className="object-cover rounded-full"
            priority
          />
        </div>

                {/* Phần Văn Bản */}
                <div className="text-section lg:w-[55%] flex flex-col items-center mt-10 lg:mt-0">
                    <h1 className="dark:text-white text-[#000000c7] text-[40px] pw-3 w-full 1000px:text-[100px] font-[800] font-Josefin py-2 1000px:leading-[85px] 1500px:w-[70%]">
                    Cải thiện trải nghiệm học tập trực tuyến của bạn tốt hơn ngay lập tức
                    </h1>
                    <br />
                    <p className="dark:text-[#edfff4] text-[#000000ac] font-Josefin font-[600] text-[24px] 1500px:!w-[55%] 1100px:!w-[78%]">
                    Chúng tôi có hơn 40k khóa học trực tuyến và hơn 500 nghìn sinh viên đăng ký trực tuyến. Tìm thấy
                    Các khóa học mong muốn của bạn từ họ
                    </p>
                    <br />
                    <br />
                    <div className="1500px:w-[55%] 1100px:w-[78%] w-[90%] h-[60px] right-9 bg-transparent relative flex">
                        <input 
                            type="search"
                            placeholder="Tìm kiếm khóa học..."
                            className="bg-transparent border dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-l-[5px] p-3 w-full h-full outline-none text-[#0000004e] dark:text-[#ffffffe6] text-[20px] font-[500] font-Josefin"
                        />
                        <div className="absolute flex items-center justify-center w-[60px] cursor-pointer h-full right-0 top-0 bg-[#39c1f3] rounded-r-[5px]">
                            <BiSearch className="text-white" size={30} />
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="1500px:w-[55%] 1100px:w-[78%] w-[90%]  flex  items-center">
                        {/* Additional Overlapping Client Images */}
                        <Image
                            src="https://edmy-react.hibootstrap.com/images/banner/client-3.jpg"
                            alt="Additional client image"
                            width={50}
                            height={50}
                            layout="fixed"
                            className="rounded-full ml-[-20px]"
                        />
                        <Image
                            src="https://edmy-react.hibootstrap.com/images/banner/client-1.jpg"
                            alt="Client image 1"
                            width={50}
                            height={50}
                            layout="fixed"
                            className="rounded-full ml-[-20px]"
                        />
                        <Image
                            src="https://edmy-react.hibootstrap.com/images/banner/client-2.jpg"
                            alt="Client image 2"
                            width={50}
                            height={50}
                            layout="fixed"
                            className="rounded-full ml-[-20px]"
                        />
                        {/* Trust Message */}
                        <p className="font-Josefin dark:text-[#edfff4] text-[#00000063] 1000px:pl-3 text-[20px] font-[600]">   
                        Hơn 500K người đã tin tưởng chúng tôi.{" "}
                            <a
                                href="/courses"
                                className="dark:text-[#46e256] text-[crimson]"
                            >
                                Xem các khóa học
                            </a>{" "}
                        </p>
                    </div>
                    <br />
                </div>
            </div>
        </div>
    );
};

export default Hero;
