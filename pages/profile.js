import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

import { BiUserCircle } from "react-icons/bi";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdPassword } from "react-icons/md";

import Navbar from "../components/Navbar";
import ProfileDiet from "../components/Profile/ProfileDiet";
import ProfilePage from "../components/Profile/ProfilePage";
import ProfilePassword from "../components/Profile/ProfilePassword";
import { User_data } from "../context/context";

const Profile = () => {
  const { user, setUser } = useContext(User_data);
  const [page, setPage] = useState(1);
  const [profile, setProfile] = useState();
  const [render, setRender] = useState(false);
  const [requestState, setRequestState] = useState({
    profile: [2, ""],
    diet: [2, ""],
    password: [2, ""],
  });

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await axios.get("/api/profile");
      setProfile(res.data);
    };
    fetchProfile();
    setRender(false);
  }, [render]);

  const submitProfile = async (profileData) => {
    await axios
      .put("api/profile", { type: "profile", data: profileData })
      .then((response) => {
        setRender(true);
        setRequestState({
          ...requestState,
          profile: [1, response.data.message],
        });
      })
      .catch((err) => {
        setRequestState({
          ...requestState,
          profile: [0, err.response.data.message],
        });
      });
  };

  const submitDiet = async (dietData) => {
    await axios
      .put("api/profile", { type: "diet", data: dietData })
      .then((response) => {
        setRender(true);
        setRequestState({ ...requestState, diet: [1, response.data.message] });
      })
      .catch((err) => {
        setRequestState({
          ...requestState,
          diet: [0, err.response.data.message],
        });
      });
  };

  const submitPassword = async (passwordData) => {
    await axios
      .put("api/profile", { type: "password", data: passwordData })
      .then((response) => {
        setRender(true);
        setRequestState({
          ...requestState,
          password: [1, response.data.message],
        });
      })
      .catch((err) => {
        setRequestState({
          ...requestState,
          password: [0, err.response.data.message],
        });
      });
  };

  setTimeout(() => {
    setRequestState({
      profile: [2, ""],
      diet: [2, ""],
      password: [2, ""],
    });
  }, 3000);
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
      <div className="flex flex-col-reverse md:grid md:grid-cols-12">
        <div className="col-span-3 flex flex-col items-center justify-start border-t-4 border-custom-orange bg-profile2 md:min-h-screen md:border-r-4 md:border-t-0">
          {profile ? (
            <div className="sticky top-[68px] left-0 hidden w-full flex-col items-center justify-center space-x-6 bg-profile1 py-4 md:flex lg:flex-row">
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
                  {profile.name}
                </p>
                <p className="font-logo text-sm text-white">
                  Your personal account
                </p>
              </div>
            </div>
          ) : (
            <div className="sticky top-[68px] left-0 hidden w-full flex-col items-center justify-center space-x-6 bg-profile1 py-4 md:flex md:flex-row">
              <div className="h-20 w-20 animate-pulse rounded-full bg-gray-200"></div>
              <div className="flex animate-pulse flex-col items-start justify-center">
                <div className="dark:bg-gray-700 mb-4 h-5 w-40 rounded-full bg-gray-200"></div>
                <div className="dark:bg-gray-700 mb-2.5 h-3 w-40 max-w-[480px] rounded-full bg-gray-200"></div>
              </div>
              <span className="sr-only">Loading...</span>
            </div>
          )}
          <div className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-start bg-profile1 md:sticky md:top-[228px] md:flex-col md:bg-transparent md:py-8 lg:top-[180px] space-y-2 lg:space-y-0">
            <div
              className="group flex h-full w-10/12 flex-col-reverse md:h-9 md:flex-row md:space-x-2"
              onClick={() => setPage(1)}
            >
              <div
                className={
                  "hidden md:block self-center border-custom-orange transition duration-200 ease-in-out md:h-5/6 md:w-2 md:origin-bottom md:border-r-4 md:border-b-0 " +
                  (page === 1
                    ? "translate-x-0 md:translate-x-0 md:translate-y-0 lg:translate-y-0"
                    : page === 2
                      ? "translate-x-1/3 md:translate-x-0 md:translate-y-[44px] lg:translate-y-[36px]"
                      : page === 3
                        ? "translate-x-full md:translate-x-0 md:translate-y-[88px] lg:translate-y-[72px]"
                        : " ")
                }
              ></div>
              <div
                className={`
                            flex h-full w-full cursor-pointer flex-col
                            items-center justify-start
                            rounded-lg hover:bg-profilehover
                            md:flex-row
                          ` +
                          (page === 1 && 'bg-profilehover md:bg-transparent')}
              >
                <BiUserCircle className="mx-2 lg:mx-4 h-6 w-6 fill-[#C8C8C8]" />
                <p className="hidden font-logo text-sm text-[#C8C8C8] xs:block">
                  Profile page
                </p>
                <p className="block font-logo text-sm text-[#C8C8C8] xs:hidden">
                  Profile
                </p>
              </div>
            </div>
            <div
              className="group flex h-full w-10/12 flex-col-reverse md:h-9 md:flex-row md:space-x-2"
              onClick={() => setPage(2)}
            >
              <div className="h-2 w-5/6 md:h-5/6 md:w-2"></div>
              <a
                href="#dietInformations"
                className={`
                            flex h-full w-full cursor-pointer flex-col
                            items-center justify-start
                            rounded-lg hover:bg-profilehover
                            md:flex-row
                          ` +
                          (page === 2 && 'bg-profilehover md:bg-transparent')}
              >
                <IoMdInformationCircleOutline className="mx-2 lg:mx-4 h-6 w-6 fill-[#C8C8C8]" />
                <p className="hidden font-logo text-sm text-[#C8C8C8] xs:block">
                  Diet informations
                </p>
                <p className="block font-logo text-sm text-[#C8C8C8] xs:hidden">
                  Diet
                </p>
              </a>
            </div>
            <div
              className="group flex h-full w-10/12 flex-col-reverse md:h-9 md:flex-row md:space-x-2"
              onClick={() => setPage(3)}
            >
              <div className="h-2 w-5/6 md:h-5/6 md:w-2"></div>
              <div
                className={`
                            flex h-full w-full cursor-pointer flex-col
                            items-center justify-start
                            rounded-lg hover:bg-profilehover
                            md:flex-row
                          ` +
                          (page === 3 && 'bg-profilehover md:bg-transparent')}
              >
                <MdPassword className="mx-2 lg:mx-4 h-6 w-6 fill-[#C8C8C8]" />
                <p className="hidden font-logo text-sm text-[#C8C8C8] xs:block">
                  Change password
                </p>
                <p className="block font-logo text-sm text-[#C8C8C8] xs:hidden">
                  Password
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-9 col-start-4 mb-16 flex h-full w-full flex-col items-center justify-start bg-profile2">
          <div className="flex flex-col items-center justify-start md:w-1/2">
            <div className="my-16 flex items-center justify-center">
              <Image
                width={500}
                height={500}
                className="h-64 w-64 rounded-full object-cover object-center"
                src={(profile && profile.image) || "/user.png"}
                alt="Profile"
              />
            </div>
            {profile ? (
              <>
                {page === 1 && (
                  <ProfilePage
                    profileData={{
                      email: profile.email,
                      name: profile.name,
                    }}
                    submitProfile={submitProfile}
                    requestState={requestState.profile}
                  />
                )}
                {page === 2 && (
                  <ProfileDiet
                    dietData={{
                      age: profile.age,
                      sex: profile.sex,
                      height: profile.height,
                      weight: profile.weight,
                      activity: profile.activity,
                      plan: profile.plan,
                    }}
                    submitDiet={submitDiet}
                    requestState={requestState.diet}
                  />
                )}
                {page === 3 && (
                  <ProfilePassword
                    submitPassword={submitPassword}
                    requestState={requestState.password}
                  />
                )}
              </>
            ) : (
              <div className="flex animate-pulse flex-col items-start justify-center">
                <div className="dark:bg-gray-700 my-2 h-12 w-[280px] rounded-lg bg-gray-200"></div>
                <div className="dark:bg-gray-700 my-2 h-12 w-[280px] rounded-lg bg-gray-200"></div>
                <div className="dark:bg-gray-700 my-6 h-12 w-[69px] rounded-lg bg-gray-200"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
