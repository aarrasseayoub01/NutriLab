import axios from "axios";
import dayjs from "dayjs";
import Head from "next/head";
import Chart from "../Chart";
import { useState, useEffect } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

const ProfileHistory = () => {
  const [foodHistory, setFoodHistory] = useState([]);
  const yesterday = dayjs().add(-1, "days");
  const today = dayjs();
  const tomorrow = dayjs().add(1, "days");

  const [previousDate, setPreviousDate] = useState(yesterday);
  const [date, setDate] = useState(today);
  const [nextDate, setNextDate] = useState(tomorrow);
  const previousDay = () => {
    setPreviousDate((prevDate) => {
      const newDate = prevDate.add(-1, "day");
      return newDate;
    });
    setDate((prevDate) => {
      const newDate = prevDate.add(-1, "day");
      return newDate;
    });
    setNextDate((prevDate) => {
      const newDate = prevDate.add(-1, "day");
      return newDate;
    });
  };
  const nextDay = () => {
    setPreviousDate((prevDate) => {
      const newDate = prevDate.add(1, "day");
      return newDate;
    });
    setDate((prevDate) => {
      const newDate = prevDate.add(1, "day");
      return newDate;
    });
    setNextDate((prevDate) => {
      const newDate = prevDate.add(1, "day");
      return newDate;
    });
  };
  // useEffect(() => {
  //   async function getHistory() {
  //     const foodHistoryData = await axios.get("/api/foodList");
  //     setFoodHistory(foodHistoryData);
  //   }
  //   getHistory();
  // }, []);
  return (
    <>
      <Head>
        <title>NutriLab - Profile History</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://i.ibb.co/yhHmPr0/orange-slice.png" />
      </Head>

      <>
        <Chart />
        <div className="relative mt-2 mb-1 flex w-full items-center justify-center lg:w-2/3">
          <button>
            <IoIosArrowDropleftCircle
              className="mx-1 h-6 w-6 fill-white lg:mx-2"
              onClick={previousDay}
            />
          </button>
          <div className="mx-1 flex h-16 w-14 flex-col items-center justify-center rounded-md border-2 border-black bg-white font-logo text-black lg:mx-2">
            <p className="text-xl font-bold">{previousDate.format("DD")}</p>
            <p className="text-md font-medium">{previousDate.format("MMM")}</p>
          </div>
          <div className="mx-1 flex h-24 w-20 flex-col items-center justify-center rounded-md border-2 border-black bg-white font-logo text-black lg:mx-2">
            <p className="text-2xl font-bold">{date.format("DD")}</p>
            <p className="text-lg font-medium">{date.format("MMM")}</p>
            <p className="font- text-sm">{date.format("YYYY")}</p>
          </div>
          <div className="mx-1 flex h-16 w-14 flex-col items-center justify-center rounded-md border-2 border-black bg-white font-logo text-black lg:mx-2">
            <p className="text-xl font-bold">{nextDate.format("DD")}</p>
            <p className="text-md font-medium">{nextDate.format("MMM")}</p>
          </div>
          <button>
            <IoIosArrowDroprightCircle
              className="mx-1 h-6 w-6 fill-white lg:mx-2"
              onClick={nextDay}
            />
          </button>
        </div>
      </>
    </>
  );
};

export default ProfileHistory;
