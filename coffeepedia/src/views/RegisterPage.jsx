export default function RegisterPage() {
  return (
    <section className="flex h-screen flex-col bg-[#EFEAD8] px-6 pt-2">
      {/* Header */}
      <header className="mb-10 flex w-full">
        {/* Back button */}
        <button className="basis-1/3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="left-0 h-8 w-8 fill-p-dark"
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
        <h1 className="basis-1/3 text-center text-2xl font-semibold text-p-dark">
          Register
        </h1>
      </header>

      <h1 className="mb-14 text-3xl font-semibold text-p-dark">
        Join Coffeepedia!
      </h1>

      <form>
        {/* Email */}
        <div class="relative mb-8">
          <input
            id="email"
            name="email"
            type="text"
            class="peer h-10 w-full border-b-2 border-grey-300 bg-[#EFEAD8] text-grey-900 placeholder-transparent focus:border-b-2 focus:border-p-dark focus:outline-none"
            placeholder="john@doe.com"
            autoComplete="off"
          />
          <label
            for="email"
            class="absolute left-0 -top-3.5 text-sm text-grey-700 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-grey-500 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-grey-600"
          >
            Email address
          </label>
        </div>

        {/* Password */}
        <div class="relative mb-12">
          <input
            id="password"
            type="password"
            name="password"
            class="peer h-10 w-full border-b-2 border-grey-300 bg-[#EFEAD8] text-grey-900 placeholder-transparent focus:border-b-2 focus:border-p-dark focus:outline-none"
            placeholder="Password"
          />
          <label
            for="password"
            class="absolute left-0 -top-3.5 text-sm text-grey-700 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-grey-500 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-grey-600"
          >
            Password
          </label>
        </div>

        {/* Username */}
        <div class="relative mb-8">
          <input
            id="username"
            type="username"
            name="username"
            class="peer h-10 w-full border-b-2 border-grey-300 bg-[#EFEAD8] text-grey-900 placeholder-transparent focus:border-b-2 focus:border-p-dark focus:outline-none"
            placeholder="Username"
          />
          <label
            for="username"
            class="absolute left-0 -top-3.5 text-sm text-grey-700 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-grey-500 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-grey-600"
          >
            Username
          </label>
        </div>

        {/* Phone Number */}
        <div class="relative mb-8">
          <input
            id="phoneNumber"
            type="phoneNumber"
            name="phoneNumber"
            class="peer h-10 w-full border-b-2 border-grey-300 bg-[#EFEAD8] text-grey-900 placeholder-transparent focus:border-b-2 focus:border-p-dark focus:outline-none"
            placeholder="Phone Number"
          />
          <label
            for="phoneNumber"
            class="absolute left-0 -top-3.5 text-sm text-grey-700 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-grey-500 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-grey-600"
          >
            Phone Number
          </label>
        </div>

        {/* address */}
        <div class="relative mb-8">
          <input
            id="address"
            type="address"
            name="address"
            class="peer h-10 w-full border-b-2 border-grey-300 bg-[#EFEAD8] text-grey-900 placeholder-transparent focus:border-b-2 focus:border-p-dark focus:outline-none"
            placeholder="Address"
          />
          <label
            for="address"
            class="absolute left-0 -top-3.5 text-sm text-grey-700 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-grey-500 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-grey-600"
          >
            Address
          </label>
        </div>

        <div className="mb-8 cursor-pointer text-right text-sm font-bold text-p-dark">
          Forgot password?
        </div>

        <input
          type="submit"
          value="Register"
          className="mb-2 w-full cursor-pointer rounded-3xl bg-p-dark py-2 text-white"
        />
        <div className="text-center text-sm">
          Already have an account?{" "}
          <span className="cursor-pointer font-bold text-p-dark">Login</span>
        </div>
      </form>
    </section>
  );
}
