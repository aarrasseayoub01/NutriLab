import Head from "next/head";
import { useContext, useEffect, useState } from "react";

import Navbar from "/components/Navbar";
import axios from "axios";
import { User_data } from "/context/context";
import AddDailyFood from "../components/AddDailyFood";
import YourInfo from "../components/YourInfo";

const Food = ({ food }) => {
  const [eatenFoodList, setEatenFoodList] = useState([]);
  const [isAlgorithmEnabled, setIsAlgorithmEnabled] = useState(false);

  const { user, setUser } = useContext(User_data);

  // Next is SSR, so we should ... , Force a render with useEffect

  const [localNutris, setLocalNutris] = useState({});
  const [localInfos, setLocalInfos] = useState({});
  useEffect(() => {
    setLocalNutris(JSON.parse(window.localStorage.getItem("nutris")));
    setLocalInfos(JSON.parse(window.localStorage.getItem("dietInfos")));
  }, []);

  //Handle API changes
  const [algoData, setAlgoData] = useState({});

  const laboTable1 = eatenFoodList.map((food) => {
    return (
      <tr
        key={food.name}
        class="dark:bg-gray-800 dark:border-gray-700 border-b bg-white"
      >
        <th
          scope="row"
          class="dark:text-white truncate whitespace-nowrap px-6 py-4 font-bold text-gray-900 hover:whitespace-normal sm:whitespace-normal"
        >
          {food.name}
        </th>
        <td class="truncate whitespace-normal px-3 py-4 text-lg font-black underline">
          {food.size}g
        </td>
      </tr>
    );
  });

  const laboTable2 =
    Object.keys(algoData).length !== 0 &&
    Object.keys(algoData).map((food) => {
      return (
        <tr
          key={food.name}
          class="dark:bg-gray-800 dark:border-gray-700 border-b bg-white"
        >
          <th
            scope="row"
            class="dark:text-white truncate whitespace-normal px-6 py-4 font-bold text-gray-900 sm:whitespace-normal"
          >
            {food.slice(1).split("_").join(" ")}
          </th>
          <td className="truncate whitespace-nowrap px-3 py-4 text-lg font-black underline">
            {(Math.round(100 * algoData[food] * 100) / 100).toFixed(2)}g
          </td>
        </tr>
      );
    });

  const laboTable3 =
    Object.keys(algoData).length !== 0 &&
    Object.keys(algoData).map((food) => {
      return (
        <tr
          key={food.name}
          class="dark:bg-gray-800 dark:border-gray-700 border-b bg-white"
        >
          <th
            scope="row"
            class="dark:text-white truncate whitespace-nowrap px-6  py-4 font-bold text-green-500 hover:whitespace-normal sm:whitespace-normal"
          >
            {food.slice(1).split("_").join(" ")}
          </th>
          <td class="truncate whitespace-normal px-3 py-4 text-lg font-black text-green-500 underline">
            +{(Math.round(100 * algoData[food] * 100) / 100).toFixed(2)}g
          </td>
        </tr>
      );
    });

  function sumObjectsByKey(object1, object2) {
    const sum = {
      Calories:
        object1.Calories + (object2.Calories * parseInt(object2.size)) / 100,
      Protein:
        object1.Protein + (object2.Protein * parseInt(object2.size)) / 100,
      Carbs: object1.Carbs + (object2.Carbs * parseInt(object2.size)) / 100,
      Fat: object1.Fat + (object2.Fat * parseInt(object2.size)) / 100,
      Fiber: object1.Fiber + (object2.Fiber * parseInt(object2.size)) / 100,
      Salt: object1.Salt + (object2.Salt * parseInt(object2.size)) / 100,
      Sugar: object1.Sugar + (object2.Sugar * parseInt(object2.size)) / 100,
    };
    return sum;
  }
  const sumNutrients = () => {
    var nutrients = {
      Calories: 0,
      Protein: 0,
      Carbs: 0,
      Fat: 0,
      Fiber: 0,
      Salt: 0,
      Sugar: 0,
    };
    for (let i = 0; i < eatenFoodList.length; i++) {
      nutrients = sumObjectsByKey(nutrients, eatenFoodList[i]);
    }
    return nutrients;
  };

  // ---------------------------------------------------------------------------------------------------------------

  return (
    <div>
      <Head>
        <title>NutriLab - Food</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://i.ibb.co/yhHmPr0/orange-slice.png" />
      </Head>
      <Navbar User={user} />
      <AddDailyFood
        food={food}
        eatenFoodList={eatenFoodList}
        setEatenFoodList={setEatenFoodList}
        setAlgoData={setAlgoData}
        setIsAlgorithmEnabled={setIsAlgorithmEnabled}
        sumNutrients={sumNutrients}
      />
      <YourInfo localInfos={localInfos} localNutris={localNutris} />
      {/* Food Algorithm  */}
      <div
        id="algorithm"
        className="
                        col-span-8 mb-16 flex w-full
                        flex-col items-center justify-center
                        rounded border-2 border-custom-orange
                        sm:col-span-6 sm:col-start-2"
      >
        <h3 className="| my-16 w-full text-center font-title text-3xl xs:text-4xl sm:text-5xl">
          Your Labo
        </h3>
        <div className="mb-4 flex w-full items-stretch justify-between xl:w-3/4">
          <div className="mx-2 flex h-96 w-full flex-1 flex-col items-center justify-start border-2 border-custom-orange">
            <p className="my-4 font-paragraph text-xl font-bold text-black">
              Previous Diet
            </p>

            <div className="w-full border-b-2 border-custom-orange"></div>

            <table class="dark:text-white w-full text-left font-logo text-sm text-black">
              <tbody>{laboTable1}</tbody>
            </table>
          </div>
          {/* {isAlgorithmEnabled && ( */}
          <div
            className="mx-2 flex w-full flex-1 flex-col items-center justify-start border-2 border-custom-orange
              
              "
          >
            <div className="w-full bg-gradient-to-r from-gradient1 to-gradient2 text-center">
              <p className="my-4 font-paragraph text-xl font-bold text-white">
                Changes Made
              </p>
            </div>

            <div className="w-full border-b-2 border-custom-orange"></div>

            {isAlgorithmEnabled && (
              <table class="dark:text-white w-full text-left font-logo text-sm text-black">
                <tbody>{laboTable2}</tbody>
              </table>
            )}
          </div>
          <div className="mx-2 flex w-full flex-1 flex-col items-center justify-start border-2 border-custom-orange">
            <div className="w-full bg-gradient-to-r from-gradient1 to-gradient2 text-center">
              <p className="my-4 font-paragraph text-xl font-bold text-white">
                New Diet
              </p>
            </div>

            <div className="w-full border-b-2 border-custom-orange"></div>
            {isAlgorithmEnabled && (
              <table class="dark:text-white w-full text-left font-logo text-sm text-black">
                <tbody>{laboTable1}</tbody>
                <tbody>{laboTable3}</tbody>
              </table>
            )}
          </div>
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default Food;

export const getStaticProps = async () => {
  const url =
    process.env.VERCEL_ENV === "production"
      ? "https://nutrilab.vercel.app/api/food"
      : "http://localhost:3000/api/food";
  const res = await axios.get(url);
  const food = await res.data;

  return {
    props: {
      food,
    },
  };
};
