'use client'
import React, { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import avatarIcon from "../../../public/asstes/avatar.jpg";
import { AiOutlineCamera } from 'react-icons/ai';
import { Style } from "../../style/stylelogin";
import { useUpdateAvatarMutation } from '@/redux/features/user/userApi';
import { useLoadUserQuery } from '@/redux/features/api/apiSlice';

type Props = {
    avatar: string | null;
    user: any;
};

const ProfileInfo: FC<Props> = ({ avatar, user }) => {
    const [name, setName] = useState(user && user.name);
    // const [updatedAvatar, setUpdatedAvatar] = useState(avatar);  // Thêm state để lưu avatar mới
    const [updateAvatar, { isSuccess, error }] = useUpdateAvatarMutation();
    const [loadUser, setLoadUser] = useState(false);

    // Khởi tạo query để load user
    const {} = useLoadUserQuery(undefined, { skip: loadUser ? false : true });

    // Handler cho việc tải ảnh lên
    const imageHandler = async (e: any) => {
        const fileReader = new FileReader();

        fileReader.onload = () => {
            const avatar = fileReader.result ; // Ép kiểu về string hoặc null
            if (fileReader.readyState === 2) {
                // const avatar = fileReader.result as string | null; // Ép kiểu về string hoặc null
                // Cập nhật avatar mới trong state
                // setUpdatedAvatar(avatar);
                updateAvatar(avatar,);
            }
        };
        fileReader.readAsDataURL(e.target.files[0]);
    };

    useEffect(() => {
        // Sau khi avatar được cập nhật thành công, gọi lại API để tải lại thông tin người dùng
        if (isSuccess) {
            setLoadUser(true); // Gọi lại API để tải lại thông tin người dùng mới, bao gồm avatar
        }
        if (error) {
            console.log(error); // Log lỗi nếu có
        }
    }, [isSuccess, error]);

    const handlerSubmit = async (e: any) => {
        e.preventDefault();
        console.log('Submit');
    };

    return (
        <>
            <div className="w-full flex justify-center">
                <div className="relative">
                    <Image
                        // src={updatedAvatar || user.avatar?.url || avatar || avatarIcon} // Dùng state updatedAvatar nếu có
                        src={user.avatar || avatar ?  user.avatar?.url || avatar : avatarIcon} // Dùng state updatedAvatar nếu có
                        alt="Avatar"
                        width={120}
                        height={120}
                        className="w-[120px] h-[120px] cursor-pointer border-[3px] border-[#37a39a] rounded-full"
                    />
                    <input
                        type="file"
                        name="avatar"
                        id="avatar"
                        className="hidden"
                        onChange={imageHandler}
                        accept="image/png, image/jpg, image/jpeg, image/webp"
                    />
                    <label htmlFor="avatar">
                        <div className="w-[30px] h-[30px] bg-slate-900 rounded-full absolute bottom-2 right-2 flex items-center justify-center cursor-pointer">
                            <AiOutlineCamera size={20} className="z-1" />
                        </div>
                    </label>
                </div>
            </div>

            <br />
            <br />
            <div className="w-full pl-6 800px:pl-20">
                <form onSubmit={handlerSubmit}>
                    <div className="800px:w-[50%] w-full m-auto block pb-4 ml-auto">
                        {/* Full Name Input */}
                        <div className="w-full mb-4">
                            <label className="block text-lg font-semibold pb-2 text-gray-700 dark:text-white">
                                Full Name
                            </label>
                            <input
                                type="text"
                                className={`${Style.input} !w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-[#37a39a] transition duration-200`}
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        {/* Email Address Input */}
                        <div className="w-full mb-6">
                            <label className="block text-lg font-semibold pb-2 text-gray-700 dark:text-white">
                                Email Address
                            </label>
                            <input
                                type="text"
                                readOnly
                                className={`${Style.input} !w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-[#37a39a] transition duration-200`}
                                required
                                value={user?.email}
                            />
                        </div>

                        {/* Submit Button */}
                        <input
                            type="submit"
                            className="w-full h-[40px] border border-[#37a39a] text-center dark:text-white text-black bg-[#37a39a] hover:bg-[#2e8b7d] rounded-[3px] mt-6 cursor-pointer transition-all duration-300"
                            required
                            value="Update"
                        />
                    </div>
                </form>
            </div>
        </>
    );
};

export default ProfileInfo;
