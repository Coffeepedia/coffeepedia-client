import leftarrow from "../assets/leftarrow.png";

export default function OrderPage() {
  return (
    <>
      <div className="container-sm h-screen bg-[#EFEAD8]">
        <div className="h-[165px] bg-[#1F3933] p-4">
          <div className="mb-4 grid grid-cols-10">
            <img src={leftarrow} alt="" className="h-6 w-6" />
            <p className="col-span-9 mt-[-6px] text-2xl font-semibold text-white">
              Your Order
            </p>
          </div>
          <p className="mb-2 text-lg text-white">Pickup Store</p>
          <select
            id="countries"
            className="text-m w-full rounded-lg bg-[#1F3933] p-2.5 font-medium text-white"
          >
            <option selected>Citraraya Tangerang - 1 km</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div className="mb-[60px] flex flex-col">
          <div className="h-[175px] w-full p-4">
            <div className="h-full w-full rounded-2xl bg-white">
              <div className="grid grid-cols-3 gap-4 p-3">
                <div className="...">
                  <img
                    src="https://globalassets.starbucks.com/assets/ff03ead58dde47c485049baa5f736793.jpg?impolicy=1by1_wide_topcrop_630"
                    alt=""
                    className="h-[120px] rounded-2xl"
                  />
                </div>
                <div className="... col-span-2">
                  <p className="text-2xl font-bold">Cappuccino</p>
                  <p className="font-semibold">Grande</p>
                  <p className="font-semibold">IDR 35000</p>
                  <div className="bg-cyan mt-2 flex flex-row items-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
                      alt=""
                      className="h-4 w-4"
                    />
                    <p className="mx-2">1</p>
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
                      alt=""
                      className="h-4 w-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[175px] w-full p-4">
            <div className="h-full w-full rounded-2xl bg-white">
              <div className="grid grid-cols-3 gap-4 p-3">
                <div className="...">
                  <img
                    src="https://globalassets.starbucks.com/assets/ff03ead58dde47c485049baa5f736793.jpg?impolicy=1by1_wide_topcrop_630"
                    alt=""
                    className="h-[120px] rounded-2xl"
                  />
                </div>
                <div className="... col-span-2">
                  <p className="text-2xl font-bold">Cappuccino</p>
                  <p className="font-semibold">Grande</p>
                  <p className="font-semibold">IDR 35000</p>
                  <div className="bg-cyan mt-2 flex flex-row items-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
                      alt=""
                      className="h-4 w-4"
                    />
                    <p className="mx-2">1</p>
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
                      alt=""
                      className="h-4 w-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[175px] w-full p-4">
            <div className="h-full w-full rounded-2xl bg-white">
              <div className="grid grid-cols-3 gap-4 p-3">
                <div>
                  <img
                    src="https://globalassets.starbucks.com/assets/ff03ead58dde47c485049baa5f736793.jpg?impolicy=1by1_wide_topcrop_630"
                    alt=""
                    className="h-[120px] rounded-2xl"
                  />
                </div>
                <div className="col-span-2">
                  <p className="text-2xl font-bold">Cappuccino</p>
                  <p className="font-semibold">Grande</p>
                  <p className="font-semibold">IDR 35000</p>
                  <div className="bg-cyan mt-2 flex flex-row items-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
                      alt=""
                      className="h-4 w-4"
                    />
                    <p className="mx-2">1</p>
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
                      alt=""
                      className="h-4 w-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ">
          <div
            className="h-[100px] w-screen max-w-[620px] p-4 "
            style={{ position: "fixed", bottom: 0 }}
          >
            <div className="h-full w-full rounded-[30px] bg-white">
              <div className="flex flex-row items-center justify-end gap-x-10 p-4">
                <div class="basis-1/3 text-2xl font-bold">IDR 105000</div>
                <div class="basis-1/3">
                  <button className="h-10 w-[115px] rounded-[30px] bg-[#1F3933] text-lg font-semibold text-white">
                    Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
