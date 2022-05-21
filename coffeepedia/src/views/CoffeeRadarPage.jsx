import leftarrow from "../assets/leftarrow.png";

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
        <div className="flex flex-col mb-[60px]">
          <div></div>
        </div>
      </div>
    </>
  );
}
