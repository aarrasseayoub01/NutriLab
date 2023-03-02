import Head from "next/head";
import Image from 'next/image';
import { useContext, useState } from "react";

import { BiUserCircle } from "react-icons/bi";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdPassword } from "react-icons/md";

import Navbar from "../components/Navbar";
import ProfileDiet from "../components/ProfileDiet";
import ProfilePage from "../components/ProfilePage";
import ProfilePassword from "../components/ProfilePassword";
import { User_data } from "../context/context";

const Profile = () => {
    const { user, setUser } = useContext(User_data);
    const [page, setPage] = useState(1);
  return (
    <>
      <Head>
        <title>NutriLab - Profile Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://i.ibb.co/yhHmPr0/orange-slice.png" />
      </Head>

      {/* <Navbar /> */}
      <Navbar User={user} />

      {/* Profile Page  */}
      <div className="grid grid-cols-12">
        <div className="col-span-3 flex flex-col justify-start items-center min-h-screen bg-[#4B4B4B] border-r-4 border-custom-orange">
            <div className="flex justify-center items-center bg-[#191919] h-32 w-full space-x-6">
                <Image 
                    width={100}
                    height={100}
                    className="rounded-full w-20 h-20 object-center object-cover"
                    src="/test.png"
                />
                <div className="flex flex-col justify-center items-start">
                    <p className="text-xl text-white font-semibold font-logo">
                        ZAAM Oussama
                    </p>
                    <p className="text-sm text-white font-logo">
                        Your personal account
                    </p>
                </div>
            </div>
            <div className="flex flex-col justify-start items-center h-full w-full space-y-2 py-8">
                <div className="flex h-9 w-10/12 space-x-2 group" onClick={()=>setPage(1)}>
                    <div className={"self-center border-r-4 border-custom-orange h-5/6 w-2 transition origin-bottom ease-[cubic-bezier(1,-0.4,1,.65)] "+(page===1 ? '-translate-y-0 opacity-100' : 'translate-y-10 opacity-0')}></div>
                    <div className="
                                    flex justify-start items-center
                                    h-full w-full
                                    cursor-pointer hover:bg-[#635953]
                                    rounded-lg
                                    "
                    >
                        <BiUserCircle className="h-6 w-6 fill-[#C8C8C8] mx-4" />
                        <p className="text-sm font-logo text-[#C8C8C8]">Profile page</p>
                    </div>
                </div>
                <div className="flex h-9 w-10/12 space-x-2 group" onClick={()=>setPage(2)}>
                <div className={"self-center border-r-4 border-custom-orange h-5/6 w-2 transition origin-center ease-[cubic-bezier(1,-0.4,1,.65)] "+(page===2 ? 'scale-y-100' : 'scale-y-0')}></div>
                    <div className="
                                    flex justify-start items-center
                                    h-full w-full
                                    cursor-pointer hover:bg-[#635953]
                                    rounded-lg
                                    "
                    >
                        <IoMdInformationCircleOutline className="h-6 w-6 fill-[#C8C8C8] mx-4" />
                        <p className="text-sm font-logo text-[#C8C8C8]">Diet informations</p>
                    </div>
                </div>
                <div className="flex h-9 w-10/12 space-x-2 group" onClick={()=>setPage(3)}>
                <div className={"self-center border-r-4 border-custom-orange h-5/6 w-2 transition duration-100 origin-top ease-[cubic-bezier(1,0,1,0)] "+(page===3 ? '-translate-y-0 opacity-100' : '-translate-y-10 opacity-0')}></div>
                    <div className="
                                    flex justify-start items-center
                                    h-full w-full
                                    cursor-pointer hover:bg-[#635953]
                                    rounded-lg
                                    "
                    >
                        <MdPassword className="h-6 w-6 fill-[#C8C8C8] mx-4" />
                        <p className="text-sm font-logo text-[#C8C8C8]">Change password</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-start-4 col-span-9 flex flex-col justify-start items-center bg-[#4B4B4B] w-full h-full">
            {page === 1 && <ProfilePage />}
            {page === 2 && <ProfileDiet />}
            {page === 3 && <ProfilePassword />}
        </div>
      </div>
    </>
  );
};

export default Profile;
