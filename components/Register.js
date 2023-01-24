import Head from "next/head";
import { useRouter } from "next/router";
import { BsGoogle, BsFacebook, BsTwitter } from "react-icons/bs";
import { useState } from "react";
import axios from "axios";

export default function Register({ setLogin, setAuth, setOpen }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    rePass: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    pass: "",
    rePass: "",
  });

  const router = useRouter();
  const handleSubmit = async (e) => {
    console.log(user);
    event.preventDefault();
    user.password === "" && setError({ rePass: "Enter an Password" });
    user.email === "" && setError({ email: "Enter an Email" });
    user.name === "" && setError({ name: "Enter a name" });
    if (user.name !== "" && user.email !== "" && user.password !== "") {
      if (user.password === user.rePass) {
        const data = {
          name: user.name,
          email: user.email,
          password: user.password,
        };
        console.log(data);
        await axios
          .post("/api/register", data, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then(async (response) => {
            console.log(response.data);
            setAuth(response.data);
            setOpen(false);
          })
          .catch((error) => {
            console.log(error);
            setError({ email: "This email already exists" });
          });
      } else {
        setError({ rePass: "Make sure to repeat the password correctly" });
      }
    }
  };

  return (
    <div>
      <Head>
        <title>NutriLab - Register</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="px-8 py-6 text-left bg-white shadow-lg">
          <div className="flex justify-around">
            <button>
              <BsGoogle size="3rem" color="blue" />
            </button>
            <button>
              <BsFacebook size="3rem" color="blue" />
            </button>
            <button>
              <BsTwitter size="3rem" color="blue" />
            </button>
          </div>
          <div className="bg-blue-600 w-full h-1 mt-7 mb-3"></div>
          <h3 className="text-2xl font-bold text-center">Join us</h3>
          <form action="">
            <div className="mt-4">
              <div className="flex flex-row relative">
                <div className=" basis-1/4 flex items-center">
                  <label className="text-center" htmlFor="Name">
                    Name
                  </label>
                </div>
                <input
                  type="text"
                  onFocus={() =>
                    setError({
                      name: "",
                      email: "",
                      pass: "",
                      rePass: "",
                    })
                  }
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  placeholder="Name"
                  className={
                    "basis-3/4 w-max px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" +
                    (error.name && "border-3 border-rose-500")
                  }
                />
                <p className="text-rose-500 absolute left-20 -top-3 sm:-top-4 sm:left-32 text-xs sm:text-sm">
                  {error.name}
                </p>
              </div>
              <div className="mt-4 flex flex-row relative">
                <div className=" basis-1/4 flex items-center">
                  <label className=" text-center" htmlFor="Email">
                    Email
                  </label>
                </div>
                <input
                  type="text"
                  onFocus={() =>
                    setError({
                      name: "",
                      email: "",
                      pass: "",
                      rePass: "",
                    })
                  }
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  placeholder="Email"
                  className={
                    "basis-3/4 w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" +
                    (error.email && "border-3 border-rose-500")
                  }
                />
                <p className="text-rose-500 absolute left-20 -top-3 sm:-top-4 sm:left-32 text-xs sm:text-sm">
                  {error.email}
                </p>
              </div>

              <div className="mt-4 flex flex-row relative">
                <div className=" basis-1/4 flex items-center">
                  <label className=" text-center">Password</label>
                </div>
                <input
                  onFocus={() =>
                    setError({
                      name: "",
                      email: "",
                      pass: "",
                      rePass: "",
                    })
                  }
                  type="password"
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  placeholder="Password"
                  className={
                    " basis-3/4 w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 hover:ring-blue-600" +
                    (error.rePass && "border-3 border-rose-500")
                  }
                />

                <p className="text-rose-500 absolute left-20 -top-3 sm:-top-4 sm:left-32 text-xs sm:text-sm">
                  {error.rePass}
                </p>
              </div>
              <div className="mt-4 flex flex-row">
                <div className=" basis-1/4">
                  <label className=" text-center">Confirm Password</label>
                </div>
                <input
                  type="password"
                  onChange={(e) => setUser({ ...user, rePass: e.target.value })}
                  placeholder="Password"
                  className="basis-3/4 w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              {/* <span className="text-xs text-red-400">
                Password must be same!
              </span> */}
              <div className="flex">
                <button
                  onClick={handleSubmit}
                  className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                >
                  Create Account
                </button>
              </div>
              <div className="mt-6 text-grey-dark">
                Already have an account?
                <button
                  className="text-blue-600 hover:underline"
                  onClick={() => setLogin(true)}
                >
                  Log in
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <Navbar />
      <Hero />
      <PickOne reload={() => router.push("/Loading")} ayoub="ayoub" />
      <Footer /> */}
    </div>
  );
}