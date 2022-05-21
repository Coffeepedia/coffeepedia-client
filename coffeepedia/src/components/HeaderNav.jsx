export default function HeaderNav() {
  return (
    <nav className="rounded border-gray-200 py-2.5 dark:bg-gray-800">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="ml-3 inline-flex items-center rounded-lg text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <img
            src="https://cdn-icons.flaticon.com/png/512/6015/premium/6015685.png?token=exp=1653058734~hmac=bde51d841c889f124731244e4937d089"
            alt=""
            className="h-[30px]"
          />
        </button>
        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
            <li>
              <a
                href="/"
                className="block rounded bg-blue-700 py-2 pr-4 pl-3 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="mr-2 rounded-full bg-white p-3 drop-shadow-lg hover:bg-gray-300">
          <button className="flex items-center ">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2169/2169842.png"
              alt="Coffeepedia Logo"
              className="h-[27px]"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
