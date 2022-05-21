import leftarrow from "../assets/leftarrow.png";
import search from "../assets/search(2).png";
import map from "../assets/map.png";

export default function OrderPage() {
  return (
    <>
      <div className="container-sm h-full bg-[#EFEAD8]">
        <div className="bg-[#1F3933] h-[80px] p-4">
          <div className="grid grid-cols-10 mb-4 mt-3">
            <img src={leftarrow} alt="" className="h-6 w-6" />
            <p className="col-span-9 text-white font-semibold text-2xl mt-[-6px]">
              Store
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full h-full">
          <div className="p-4">
            <div className="bg-white rounded-[30px] p-2 shadow-lg grid grid-cols-8 gap-4">
              <input
                className="w-full px-4 focus:ring focus:ring-white col-span-7"
                type=""
                placeholder="Search"
              />
              <img className="h-6 w-6 cursor-pointer" src={search} alt="" />
            </div>
          </div>
          <div>
            <img className="w-full h-[500px]" src={map} alt="" />
          </div>
          <div className="mb-[60px]">
            <div className="grid items-stretch justify-items-stretch grid-cols-4 w-full h-[120px] bg-gray-200 p-4 px-6">
              <div className="self-center col-span-3">
                <p className="font-semibold text-lg">Hazel Cafe</p>
                <p>Jalan Ciffest Cikupa, Tangerang</p>
                <p>1,4 Kilometers away</p>
              </div>
              <div className="justify-self-end self-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png"
                  alt=""
                  className="h-6 w-6"
                />
              </div>
            </div>
            <div className="grid items-stretch justify-items-stretch grid-cols-4 w-full h-[120px] bg-white p-4 px-6">
              <div className="self-center col-span-3">
                <p className="font-semibold text-lg">Hazel Cafe</p>
                <p>Jalan Ciffest Cikupa, Tangerang</p>
                <p>1,4 Kilometers away</p>
              </div>
              <div className="justify-self-end self-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png"
                  alt=""
                  className="h-6 w-6"
                />
              </div>
            </div>
            <div className="grid items-stretch justify-items-stretch grid-cols-4 w-full h-[120px] bg-white p-4 px-6">
              <div className="self-center col-span-3">
                <p className="font-semibold text-lg">Hazel Cafe</p>
                <p>Jalan Ciffest Cikupa, Tangerang</p>
                <p>1,4 Kilometers away</p>
              </div>
              <div className="justify-self-end self-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png"
                  alt=""
                  className="h-6 w-6"
                />
              </div>
            </div>
            <div className="grid items-stretch justify-items-stretch grid-cols-4 w-full h-[120px] bg-white p-4 px-6">
              <div className="self-center col-span-3">
                <p className="font-semibold text-lg">Hazel Cafe</p>
                <p>Jalan Ciffest Cikupa, Tangerang</p>
                <p>1,4 Kilometers away</p>
              </div>
              <div className="justify-self-end self-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png"
                  alt=""
                  className="h-6 w-6"
                />
              </div>
            </div>
            <div className="grid items-stretch justify-items-stretch grid-cols-4 w-full h-[120px] bg-white p-4 px-6">
              <div className="self-center col-span-3">
                <p className="font-semibold text-lg">Hazel Cafe</p>
                <p>Jalan Ciffest Cikupa, Tangerang</p>
                <p>1,4 Kilometers away</p>
              </div>
              <div className="justify-self-end self-center">
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
