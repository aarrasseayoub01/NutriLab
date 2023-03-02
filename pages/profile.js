import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

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
  const [profile, setProfile] = useState();

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await axios.get("/api/profile");
      setProfile(res.data);
    };
    fetchProfile();
  }, []);
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
        <div className="col-span-3 flex min-h-screen flex-col items-center justify-start border-r-4 border-custom-orange bg-[#4B4B4B]">
          {profile ? (
            <div className="sticky top-0 left-0 flex w-full items-center justify-center space-x-6 bg-[#191919] py-4">
              <Image
                width={100}
                height={100}
                priority
                className="h-20 w-20 rounded-full object-cover object-center"
                src={(profile && profile.image) || "/user.png"}
                alt="Profile"
              />
              <div className="flex flex-col items-start justify-center">
                <p className="font-logo text-xl font-semibold text-white">
                  ZAAM
                </p>
                <p className="font-logo text-sm text-white">
                  Your personal account
                </p>
              </div>
            </div>
          ) : (
            <div class="sticky top-0 left-0 flex w-full items-center justify-center space-x-6 bg-[#191919] py-4">
              <div className="h-20 w-20 animate-pulse rounded-full bg-gray-200"></div>
              <div class="flex animate-pulse flex-col items-start justify-center">
                <div class="dark:bg-gray-700 mb-4 h-5 w-40 rounded-full bg-gray-200"></div>
                <div class="dark:bg-gray-700 mb-2.5 h-3 w-40 max-w-[480px] rounded-full bg-gray-200"></div>
              </div>
              <span class="sr-only">Loading...</span>
            </div>
          )}
          <div className="sticky top-28 left-0 flex w-full flex-col items-center justify-start space-y-2 py-8">
            <div
              className="group flex h-9 w-10/12 space-x-2"
              onClick={() => setPage(1)}
            >
              <div
                className={
                  "h-5/6 w-2 origin-bottom self-center border-r-4 border-custom-orange transition ease-[cubic-bezier(1,-0.4,1,.65)] " +
                  (page === 1
                    ? "-translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0")
                }
              ></div>
              <div
                className="
                                    flex h-full w-full
                                    cursor-pointer items-center
                                    justify-start rounded-lg
                                    hover:bg-[#635953]
                                    "
                    >
                        <BiUserCircle className="h-6 w-6 fill-[#C8C8C8] mx-4" />
                        <p className="text-sm font-logo text-[#C8C8C8]">Profile page</p>
                    </div>
                </div>
                <div className="flex h-9 w-10/12 space-x-2 group" onClick={()=>setPage(2)}>
                    <div className={"self-center border-r-4 border-custom-orange h-5/6 w-2 transition origin-center ease-[cubic-bezier(1,-0.4,1,.65)] "+(page===2 ? 'scale-y-100' : 'scale-y-0')}></div>
                    <a 
                        href="#dietInformations" 
                        className="
                                    flex justify-start items-center
                                    h-full w-full
                                    cursor-pointer hover:bg-[#635953]
                                    rounded-lg
                                    "
                    >
                        <IoMdInformationCircleOutline className="h-6 w-6 fill-[#C8C8C8] mx-4" />
                        <p className="text-sm font-logo text-[#C8C8C8]">Diet informations</p>
                    </a>
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

            <div className="my-16 flex items-center justify-center">
              <Image
                width={500}
                height={500}
                className="h-64 w-64 rounded-full object-cover object-center"
                src={(profile && profile.image) || "/user.png"}
                alt="Profile"
              />
            </div>
                {page === 3 && <ProfilePassword />}
            </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
