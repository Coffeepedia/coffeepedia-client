export default function HeaderNav() {
  return (
    <nav class="rounded border-gray-200 py-2.5 dark:bg-gray-800">
      <div class="container mx-auto flex flex-row items-center justify-between px-4">
        <button
          type="button"
          class="ml-3 rounded-lg text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <img
            src="https://cdn-icons.flaticon.com/png/512/6015/premium/6015685.png?token=exp=1653058734~hmac=bde51d841c889f124731244e4937d089"
            alt=""
            className="h-[30px]"
          />
        </button>

        <div className="mr-2 rounded-full bg-white p-3 drop-shadow-lg hover:bg-gray-300">
          <button class="flex items-center ">
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
