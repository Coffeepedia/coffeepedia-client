export default function MenuCard({ item }) {
  return (
    <div className="h-[325px] w-[187px] justify-self-center">
      <div className="flex h-[296px] w-[187px] flex-col items-center rounded-[15px] bg-[#9FC088] p-2 shadow-lg">
        <p className="text-2xl font-semibold text-white">45K</p>
        <div className="flex h-48 flex-col justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1046/1046887.png"
            alt=""
            className="items-center"
          />
        </div>
        <p className="text-l font-semibold text-white">Chocolate Caramel</p>
      </div>
      <div className="focus:bg mt-[-27px] ml-[37%] flex h-[51px] w-[51px] items-center justify-center rounded-full bg-white p-3 shadow-lg hover:bg-[#557B83] focus:bg-[#689099] focus:outline-none">
        <img
          src="https://cdn-icons-png.flaticon.com/128/2169/2169842.png"
          alt="Coffeepedia Logo"
          className="h-[27px]"
        />
      </div>
    </div>
  );
}
