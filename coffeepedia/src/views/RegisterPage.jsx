import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSmall from "../components/LoadingSmall";
import { REGISTER_USER } from "../queries/users";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
    username: "",
    phoneNumber: "",
    address: "",
  });

  const [registerUser, { loading, error }] = useMutation(REGISTER_USER, {
    onCompleted: (data) => {
      if (!error) {
        navigate("/login");
      }
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser({ variables: data });
  };

  return (
    <>
      {/* Header */}
      <header className="bg-p-dark">
        <div className="items-center flex w-full px-6 py-2">
          {/* Back button */}
          <button onClick={() => navigate(-1)} className="basis-1/3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="left-0 h-8 w-8 fill-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <h1 className="basis-1/3 text-center text-2xl font-semibold text-white">
            Register
          </h1>
        </div>
      </header>

      {/* Register */}
      <section className="flex h-screen flex-col bg-[#EFEAD8] px-6 pt-10">
        <h1 className="mb-14 text-3xl font-semibold text-p-dark">
          Join Coffeepedia!
        </h1>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="relative z-0 mb-8">
            <input
              type="email"
              id="email"
              className="autofill:bg-[#EFAD8] peer block w-full appearance-none border-0 border-b-2 border-grey-300 bg-transparent py-2.5 px-0 text-grey-900 focus:border-primary focus:outline-none focus:ring-0 dark:border-grey-600 dark:text-white dark:focus:border-primary"
              placeholder=" "
              name="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <label
              htmlFor="email"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-grey-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary dark:text-grey-400 peer-focus:dark:text-primary"
            >
              Email
            </label>
          </div>

          {/* Password */}
          <div className="relative z-0 mb-12">
            <input
              type="password"
              id="password"
              className="peer block w-full appearance-none border-0 border-b-2 border-grey-300 bg-transparent py-2.5 px-0 text-grey-900 focus:border-primary focus:outline-none focus:ring-0 dark:border-grey-600 dark:text-white dark:focus:border-primary"
              placeholder=" "
              name="password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            <label
              htmlFor="password"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-grey-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary dark:text-grey-400 peer-focus:dark:text-primary"
            >
              Password
            </label>
          </div>

          {/* Username */}
          <div className="relative z-0 mb-8">
            <input
              type="text"
              id="username"
              className="autofill:bg-[#EFAD8] peer block w-full appearance-none border-0 border-b-2 border-grey-300 bg-transparent py-2.5 px-0 text-grey-900 focus:border-primary focus:outline-none focus:ring-0 dark:border-grey-600 dark:text-white dark:focus:border-primary"
              placeholder=" "
              name="username"
              value={data.username}
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
            <label
              htmlFor="username"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-grey-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary dark:text-grey-400 peer-focus:dark:text-primary"
            >
              Username
            </label>
          </div>

          {/* Phone Number */}
          <div className="relative z-0 mb-8">
            <input
              type="text"
              id="phoneNumber"
              className="autofill:bg-[#EFAD8] peer block w-full appearance-none border-0 border-b-2 border-grey-300 bg-transparent py-2.5 px-0 text-grey-900 focus:border-primary focus:outline-none focus:ring-0 dark:border-grey-600 dark:text-white dark:focus:border-primary"
              placeholder=" "
              name="phoneNumber"
              value={data.phoneNumber}
              onChange={(e) =>
                setData({ ...data, phoneNumber: e.target.value })
              }
            />
            <label
              htmlFor="phoneNumber"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-grey-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary dark:text-grey-400 peer-focus:dark:text-primary"
            >
              Phone Number
            </label>
          </div>

          {/* Address */}
          <div className="relative z-0 mb-8">
            <input
              type="text"
              id="address"
              className="autofill:bg-[#EFAD8] peer block w-full appearance-none border-0 border-b-2 border-grey-300 bg-transparent py-2.5 px-0 text-grey-900 focus:border-primary focus:outline-none focus:ring-0 dark:border-grey-600 dark:text-white dark:focus:border-primary"
              placeholder=" "
              name="address"
              value={data.address}
              onChange={(e) => setData({ ...data, address: e.target.value })}
            />
            <label
              htmlFor="address"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-grey-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary dark:text-grey-400 peer-focus:dark:text-primary"
            >
              Address
            </label>
          </div>

          <div className="mb-8 cursor-pointer text-right text-sm font-bold text-p-dark">
            Forgot password?
          </div>

          {loading ? (
            <button className="mb-2 w-full cursor-pointer rounded-3xl bg-p-dark py-2 text-white">
              <LoadingSmall />
            </button>
          ) : (
            <input
              onClick={handleSubmit}
              type="submit"
              value="Register"
              className="mb-2 w-full cursor-pointer rounded-3xl bg-p-dark py-2 text-white"
            />
          )}

          <div className="text-center text-sm">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="cursor-pointer font-bold text-p-dark"
            >
              Login
            </span>
          </div>
        </form>
      </section>
    </>
  );
}
