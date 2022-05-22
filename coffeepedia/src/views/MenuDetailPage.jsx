import leftarrow from "../assets/leftarrow.png";

export default function MenuDetailPage() {
  return (
    <div className="flex h-full flex-col justify-items-stretch">
      <div className="flex h-[525px] w-full flex-col justify-items-stretch bg-[#1F3933] p-4 shadow-lg ">
        <img src={leftarrow} alt="" className="h-6 w-6" />
        <div className="flex flex-row items-center justify-between p-2">
          <div>
            <p className="my-1 text-lg font-medium text-white">Cold Coffee</p>
            <p className="text-3xl text-white">Cappuccino</p>
          </div>
          <div>
            <p className="text-6xl font-semibold text-white">35K</p>
          </div>
        </div>
        <div className="ml-[27%] justify-self-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1046/1046887.png"
            alt=""
            className="h-72 w-64 p-2"
          />
        </div>
      </div>
      <div className="mt-[-40px]  h-[500px] rounded-[40px] bg-[#EFEAD8] shadow-lg">
        <div className="flex flex-col items-center">
          <div class="mt-[-46px] flex h-[92px] w-[92px] flex-row items-center justify-center rounded-full bg-white p-3 shadow-lg hover:bg-[#557B83]">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2169/2169842.png"
              alt="Coffeepedia Logo"
              className="h-[50px]"
            />
          </div>
        </div>
        <div className="flex flex-col items-start p-5">
          <div>
            <div>Size</div>
          </div>
          <div>Test</div>
        </div>
      </div>
    </div>
  );
}
