import { Style } from "@/app/style/stylelogin";
import CoursePlayer from "@/app/Utils/CoursePlayer";
import Ratings from "@/app/Utils/Ratings";
import Link from "next/link";
import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useSelector } from "react-redux";
import { format } from "timeago.js";
import CourseContainetList from "../Course/CourseContainetList"

type Props = {
  data: any;
};

const CourseDetails = ({ data }: Props) => {
  const { user } = useSelector((state: any) => state.auth);
  const discountPercentenge =
    ((data?.estimatedPrice - data?.price) / data?.estimatedPrice) * 100;

  const discountPercentengePrice = discountPercentenge.toFixed(0);

  const isPurchased =
    user && user?.courses?.find((item: any) => item._id === data._id);

  const handleOrder = (e: any) => {
    console.log("ggg");
  };

  return (
    <div>
      <div className="w-[90%]  md:w-[90%]  m-auto py-5">
        <div className="w-full flex flex-col-reverse md:flex-row">
          <div className="w-full md:w-[65%] md:pr-5">
            <h1 className="text-[25px] font-Poppins font-[600] text-black dark:text-white">
              {data.name}
            </h1>
            <div className="flex items-center justify-between pt-3">
              <div className="flex items-center">
                <Ratings rating={data.ratings} />
                <h5 className="text-black dark:text-white">
                  {data.reviews?.length} đánh giá
                </h5>
              </div>
              <h5 className="text-black dark:text-white">
                {data.purchased} Học Viên
              </h5>
            </div>
            <br />
            <h1 className="text-[25px] font-Poppins font-[600] text-black dark:text-white">
              bạn sẽ học được gì từ khóa học này
            </h1>
            <div>
              {data?.benefits?.map((item: any, index: number) => (
                <div
                  className="w-full flex 800px:items-center py-2"
                  key={index}
                >
                  <div className="w-[15px] mr-1">
                    <IoMdCheckmarkCircleOutline size={20} />
                  </div>
                  <p className="pl-2">{item.title}</p>
                </div>
              ))}
              <br />
              <br />
            </div>
            <h1 className="text-[25px] font-Poppins font-600 text-black dark:text-white ">
              những điều kiện tiên quyết để bắt đầu khóa học này là gì
            </h1>
            {data?.benefits?.map((item: any, index: number) => (
              <div className="w-full flex 800px:items-center py-2" key={index}>
                <div className="w-[15px] mr-1">
                  <IoMdCheckmarkCircleOutline size={20} />
                </div>
                <p className="pl-2">{item.title}</p>
              </div>
            ))}
            <br />
            <br />
            <div>
              <h1 className="text-[25px] font-Poppins font-[600] text-black dark:text-white">
                Tổng quan khóa học
              </h1>
              {/* CourseContainetList */}
              <CourseContainetList  data ={data?.courseData} isDemo={true} />
            </div>
            <br />
            <br />
            <div className="w-full">
              <h1 className="text-[25px] font-Poppins font-[600] text-black dark:text-white">
                Chi tiết khóa học
              </h1>
              <p className="text-[18px] mt-[20px] whitespace-pre-line w-full overflow-hidden text-black dark:text-white">
                {data?.description}
              </p>
            </div>
            <br />
            <br />
            <div className="w-full">
              <div className="800px:flex items-center">
                <Ratings rating={data?.ratings} />
                <div className="mb-2 800px:md-[unset]" />
                <h5 className="text-[25px] font-Poppins font-[600] text-black dark:text-white">
                  {Number.isInteger(data?.ratings)
                    ? data?.ratings.toFixed(1)
                    : data?.ratings.toFixe(2)}{" "}
                  Đánh giá khóa học ° {data?.reviews?.length} Đánh giá
                </h5>
              </div>
              <br />
              {(data?.reviews && [...data.reviews].reverse()).map(
                (item: any, index: number) => (
                  <div className="w-full pb-4" key={index}>
                    <div className="flex">
                      <div className="w-[50px] h-[50px]">
                        <div className="w-[50px] h-[50px] bg-slate-600 rounded-full flex items-center justify-center cursor-pointer">
                          <h1 className="uppercase text-[18px] text-black dark:text-white">
                            {item.user.name.slice(0, 2)}
                          </h1>
                        </div>
                      </div>

                      <div className="hidden 800px:block pl-2">
                        <div className="flex items-center">
                          <h5 className="text-[18px] pr-2 text-black dark:text-white">
                            {item.user.name}
                          </h5>
                          <Ratings rating={item.rating} />
                        </div>
                        <p className="text-black dark:text-white">
                          {item.comment}
                        </p>
                        <small className="text-[#000000d1] dark:text-[#ffffff83]">
                          {format(item.createdAt)}
                        </small>
                      </div>

                      <div className="pl-2 flex 800px:hidden items-center">
                        <h5 className="text-[18px] pr-2 text-black dark:text-white">
                          {item.user.name}
                        </h5>
                        <Ratings rating={item.rating} />
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="w-full md:w-[35%] relative">
            <div className="sticky top-[100px] left-0 z-50 w-50px">
              <CoursePlayer videoUrl={data?.demoUrl} title={data?.title} />
              <div className="flex items-center">
                <h3 className="pt-5 text-[25px] text-black dark:text-white">
                  {data.price === 0 ? "free" : data.price + "$"}
                </h3>
                <h5 className="pl-3 text-[20px] mt-2 line-through opacity-80 text-black dark:text-[#fff]">
                  {data.estimatedPrice}$
                </h5>
                <h4 className="pl-5 pt-4 text-[22px] text-black dark:text-white">
                  {discountPercentengePrice}% Off
                </h4>
              </div>
              <div className="flex items-center">
                {isPurchased ? (
                  <Link
                    className={`${Style.button} !w-[180px] my-3 font-Poppins cursor-pointer !bg-[crimson]`}
                    href={`/course-access/${data._id}`}
                  >
                    Vào khóa học
                  </Link>
                ) : (
                  <div
                    className={`${Style.button} !w-[180px] my-3 font-Poppins cursor-pointer !bg-[crimson]`}
                    onClick={handleOrder}
                  >
                    Mua ngay {data.price}$
                  </div>
                )}
              </div>
              <br />
              <p className='pb-1 text-black dark:text-white'>. mã nguồn bao gồm</p>
                    <p className='pb-1 text-black dark:text-white'>. truy cập trọn đời</p>
                    <p className='pb-1 text-black dark:text-white'>. giấy chứng nhận hoàn thành</p>
                    <p className='pb-3 md:pb-1 text-black dark:text-white'>. Hỗ trợ cao cấp</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;