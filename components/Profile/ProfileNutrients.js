import Head from "next/head";
import { IoMdInformationCircleOutline } from "react-icons/io";

const ProfileNutrients = ({ nutrients, setPage }) => {
  return (
    <>
      <Head>
        <title>NutriLab - Profile Diet</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://i.ibb.co/yhHmPr0/orange-slice.png" />
      </Head>

      <>
        <div className="relative w-64 flex items-center justify-start space-x-2 lg:w-2/3">
          <IoMdInformationCircleOutline className="my-2 h-3 w-3 fill-black" />
          <p className="text-left text-[10px] font-bold text-black">
            You cannot edit these values.
          </p>
        </div>
        <p className="mb-4 w-64 text-left text-sm font-medium text-black lg:w-2/3">
          They are generated automatically based on your{" "}
          <button onClick={()=>setPage(2)} className="text-blue-700 underline">Diet Informations.</button>
        </p>
        {/* Calories  */}
        <div className="relative mt-2 mb-1 w-full lg:w-2/3">
          <input
            id="calories"
            className="dark:text-white dark:border-gray-600 dark:focus:border-custom-orange peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-white focus:border-custom-orange focus:outline-none focus:ring-0"
            placeholder=" "
            value={nutrients.kCalories}
            readOnly={true}
          />
          <label
            htmlFor="calories"
            className="dark:text-gray-400 dark:bg-gray-900 peer-focus:dark:text-custom-orange absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform bg-profile2 px-2 text-sm text-white duration-300 hover:cursor-text peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-custom-orange"
          >
            Calories
          </label>
        </div>

        {/* Proteins  */}
        <div className="relative mt-2 mb-1 w-full lg:w-2/3">
          <input
            id="proteins"
            className="dark:text-white dark:border-gray-600 dark:focus:border-custom-orange peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-white focus:border-custom-orange focus:outline-none focus:ring-0"
            placeholder=" "
            value={nutrients.proteins}
            readOnly={true}
          />
          <label
            htmlFor="proteins"
            className="dark:text-gray-400 dark:bg-gray-900 peer-focus:dark:text-custom-orange absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform bg-profile2 px-2 text-sm text-white duration-300 hover:cursor-text peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-custom-orange"
          >
            Proteins
          </label>
        </div>

        {/* Carbs  */}
        <div className="relative mt-2 mb-1 w-full lg:w-2/3">
          <input
            id="carbs"
            className="dark:text-white dark:border-gray-600 dark:focus:border-custom-orange peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-white focus:border-custom-orange focus:outline-none focus:ring-0"
            placeholder=" "
            value={nutrients.carbs}
            readOnly={true}
          />
          <label
            htmlFor="carbs"
            className="dark:text-gray-400 dark:bg-gray-900 peer-focus:dark:text-custom-orange absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform bg-profile2 px-2 text-sm text-white duration-300 hover:cursor-text peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-custom-orange"
          >
            Carbs
          </label>
        </div>

        {/* Fats  */}
        <div className="relative mt-2 mb-1 w-full lg:w-2/3">
          <input
            id="fats"
            className="dark:text-white dark:border-gray-600 dark:focus:border-custom-orange peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-white focus:border-custom-orange focus:outline-none focus:ring-0"
            placeholder=" "
            value={nutrients.fats}
            readOnly={true}
          />
          <label
            htmlFor="fats"
            className="dark:text-gray-400 dark:bg-gray-900 peer-focus:dark:text-custom-orange absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform bg-profile2 px-2 text-sm text-white duration-300 hover:cursor-text peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-custom-orange"
          >
            Fats
          </label>
        </div>

        {/* Fiber  */}
        <div className="relative mt-2 mb-1 w-full lg:w-2/3">
          <input
            id="fiber"
            className="dark:text-white dark:border-gray-600 dark:focus:border-custom-orange peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-white focus:border-custom-orange focus:outline-none focus:ring-0"
            placeholder=" "
            value={nutrients.fiber}
            readOnly={true}
          />
          <label
            htmlFor="fiber"
            className="dark:text-gray-400 dark:bg-gray-900 peer-focus:dark:text-custom-orange absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform bg-profile2 px-2 text-sm text-white duration-300 hover:cursor-text peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-custom-orange"
          >
            Fiber
          </label>
        </div>

        {/* Salt  */}
        <div className="relative mt-2 mb-1 w-full lg:w-2/3">
          <input
            id="salt"
            className="dark:text-white dark:border-gray-600 dark:focus:border-custom-orange peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-white focus:border-custom-orange focus:outline-none focus:ring-0"
            placeholder=" "
            value={nutrients.salt}
            readOnly={true}
          />
          <label
            htmlFor="salt"
            className="dark:text-gray-400 dark:bg-gray-900 peer-focus:dark:text-custom-orange absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform bg-profile2 px-2 text-sm text-white duration-300 hover:cursor-text peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-custom-orange"
          >
            Salt
          </label>
        </div>

        {/* Sugar  */}
        <div className="relative mt-2 mb-1 w-full lg:w-2/3">
          <input
            id="sugar"
            className="dark:text-white dark:border-gray-600 dark:focus:border-custom-orange peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-white focus:border-custom-orange focus:outline-none focus:ring-0"
            placeholder=" "
            value={nutrients.sugar}
            readOnly={true}
          />
          <label
            htmlFor="sugar"
            className="dark:text-gray-400 dark:bg-gray-900 peer-focus:dark:text-custom-orange absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform bg-profile2 px-2 text-sm text-white duration-300 hover:cursor-text peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-custom-orange"
          >
            Sugar
          </label>
        </div>
      </>
    </>
  );
};

export default ProfileNutrients;
