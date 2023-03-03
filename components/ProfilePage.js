import { useFormik } from "formik";
import Head from "next/head";

const ProfilePage = ({profileData, submitProfile, requestState}) => {
  const validate = values => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Required';
    } else if (values.name.length < 3) {
      errors.name = 'Must be 3 characters or more';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  }

  const formik = useFormik({
    initialValues: {
      name: profileData.name,
      email: profileData.email,
    },
    validate,
    onSubmit: (values) => {
      submitProfile(values);
    },
  });

  return (
    <>
      <Head>
        <title>NutriLab - Profile Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://i.ibb.co/yhHmPr0/orange-slice.png" />
      </Head>
      <>
        <div className="relative mt-2 w-full md:w-2/3">
          <input
            type="text"
            id="name"
            className={`
                        peer block w-full 
                        appearance-none rounded-lg border-2 border-gray-300 bg-transparent 
                        px-2.5 pb-2.5 pt-4 
                        text-sm text-white 
                        focus:border-custom-orange focus:outline-none focus:ring-0 
                        dark:border-gray-600 dark:text-white dark:focus:border-custom-orange `+
                        (formik.errors.name && 'border-red-500 focus:border-red-500')}
            placeholder=" "
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <label
            htmlFor="name"
            className={`
                        absolute top-2 left-1 z-10 
                        origin-[0] -translate-y-4 scale-75 transform bg-[#4B4B4B]
                        px-2 text-sm 
                        text-white duration-300 hover:cursor-text 
                        peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 
                        peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-custom-orange 
                        dark:bg-gray-900 dark:text-gray-400 
                        peer-focus:dark:text-blue-500 `+ 
                      (formik.errors.name && 'text-red-500 peer-focus:text-red-500')}
          >
            name
          </label>
        </div>
        <div className="w-full md:w-2/3 mb-3 mt-1">
          <p className='text-xs text-red-500'>{formik.errors.name}</p>
        </div>
        <div className="relative mt-2 w-full md:w-2/3">
          <input
            type="email"
            id="email"
            className={`
                        peer block w-full 
                        appearance-none rounded-lg border-2 border-gray-300 bg-transparent 
                        px-2.5 pb-2.5 pt-4 
                        text-sm text-white 
                        focus:border-custom-orange focus:outline-none focus:ring-0 
                        dark:border-gray-600 dark:text-white dark:focus:border-custom-orange `+
                      (formik.errors.email && 'border-red-500 focus:border-red-500')}
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <label
            htmlFor="email"
            className={`
                        absolute top-2 left-1 z-10 
                        origin-[0] -translate-y-4 scale-75 transform 
                        bg-[#4B4B4B] px-2 
                        text-sm text-white 
                        duration-300 hover:cursor-text 
                        peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 
                        peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-custom-orange 
                        dark:bg-gray-900 dark:text-gray-400 
                        peer-focus:dark:text-blue-500 `+
                      (formik.errors.email && 'text-red-500 peer-focus:text-red-500')}
          >
            E-mail
          </label>
        </div>
        <div className="w-full md:w-2/3 mb-3 mt-1">
          <p className='text-xs text-red-500'>{formik.errors.email}</p>
        </div>

        {requestState[0] === 0
        && <div className="w-full md:w-2/3 flex items-center max-w-xs p-4 text-gray-500 bg-red-500 rounded-lg shadow dark:text-gray-400 dark:bg-gray-800">
            <div className="ml-3 text-sm font-normal text-black">{requestState[1]}</div>
        </div>}
        {requestState[0] === 1
        && <div className="w-full md:w-2/3 flex items-center max-w-xs p-4 text-gray-500 bg-green-500 rounded-lg shadow dark:text-gray-400 dark:bg-gray-800">
            <div className="ml-3 text-sm font-normal text-black">{requestState[1]}</div>
        </div>}

        {/* Submit Button  */}
        <div className="my-4 w-full md:w-2/3">
          <button
            onClick={formik.handleSubmit}
            type="button"
            className={`
                        mr-2 mb-2 rounded-lg border-2 border-[#4B4B4B] 
                        bg-custom-orange px-5 py-2.5 
                        text-sm font-medium text-[#4B4B4B] transition 
                        hover:border-gray-800 hover:text-gray-800 
                        focus:bg-gradient1 focus:border-black focus:text-black
                        dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 `+
                        ((formik.errors.email || formik.errors.name) && 'cursor-not-allowed')}
            disabled={formik.errors.email || formik.errors.name}
          >
            Edit
          </button>
        </div>
      </>
    </>
  );
};

export default ProfilePage;
