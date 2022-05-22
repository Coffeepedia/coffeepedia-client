import leftarrow from "../assets/leftarrow.png";
import search from "../assets/search(2).png";
import map from "../assets/map.png";

export default function OrderPage() {
  return (
    <>
      <div className="container-sm h-full bg-[#EFEAD8]">
        <div className="h-[80px] bg-[#1F3933] p-4">
          <div className="mb-4 mt-3 grid grid-cols-10">
            <img src={leftarrow} alt="" className="h-6 w-6" />
            <p className="col-span-9 mt-[-6px] text-2xl font-semibold text-white">
              Store
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="p-4">
            <div className="grid grid-cols-8 gap-4 rounded-[30px] bg-white p-2 shadow-lg">
              <input
                className="col-span-7 w-full px-4 focus:ring focus:ring-white"
                type=""
                placeholder="Search"
              />
              <img className="h-6 w-6 cursor-pointer" src={search} alt="" />
            </div>
          </div>
          <div>
            <img className="h-[500px] w-full" src={map} alt="" />
          </div>
          <div className="flex h-full w-full flex-col">
            <div className="grid h-[120px] w-full grid-cols-4 items-stretch justify-items-stretch bg-gray-200 p-4 px-6">
              <div className="col-span-3 self-center">
                <p className="text-lg font-semibold">Hazel Cafe</p>
                <p>Jalan Ciffest Cikupa, Tangerang</p>
                <p>1,4 Kilometers away</p>
              </div>
              <div className="self-center justify-self-end">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png"
                  alt=""
                  className="h-6 w-6"
                />
              </div>
            </div>
            <div className="grid h-[120px] w-full grid-cols-4 items-stretch justify-items-stretch bg-white p-4 px-6">
              <div className="col-span-3 self-center">
                <p className="text-lg font-semibold">Hazel Cafe</p>
                <p>Jalan Ciffest Cikupa, Tangerang</p>
                <p>1,4 Kilometers away</p>
              </div>
              <div className="self-center justify-self-end">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png"
                  alt=""
                  className="h-6 w-6"
                />
              </div>
            </div>
            <div className="grid h-[120px] w-full grid-cols-4 items-stretch justify-items-stretch bg-white p-4 px-6">
              <div className="col-span-3 self-center">
                <p className="text-lg font-semibold">Hazel Cafe</p>
                <p>Jalan Ciffest Cikupa, Tangerang</p>
                <p>1,4 Kilometers away</p>
              </div>
              <div className="self-center justify-self-end">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png"
                  alt=""
                  className="h-6 w-6"
                />
              </div>
            </div>
            <div className="grid h-[120px] w-full grid-cols-4 items-stretch justify-items-stretch bg-white p-4 px-6">
              <div className="col-span-3 self-center">
                <p className="text-lg font-semibold">Hazel Cafe</p>
                <p>Jalan Ciffest Cikupa, Tangerang</p>
                <p>1,4 Kilometers away</p>
              </div>
              <div className="self-center justify-self-end">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png"
                  alt=""
                  className="h-6 w-6"
                />
              </div>
            </div>
            <div className="grid h-[120px] w-full grid-cols-4 items-stretch justify-items-stretch bg-white p-4 px-6">
              <div className="col-span-3 self-center">
                <p className="text-lg font-semibold">Hazel Cafe</p>
                <p>Jalan Ciffest Cikupa, Tangerang</p>
                <p>1,4 Kilometers away</p>
              </div>
              <div className="self-center justify-self-end">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png"
                  alt=""
                  className="h-6 w-6 hover:bg-red-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
