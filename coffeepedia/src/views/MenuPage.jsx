import HeaderNav from "../components/HeaderNav";
import MenuCard from "../components/MenuCard";
import search from "../assets/search.png";

export default function HomePage() {
  return (
    <>
      <div
        className="container-sm p-2 h-full bg-[#EFEAD8]"
        style={{ position: "relative" }}
      >
        <HeaderNav />
        <div className="px-6">
          <p className="text-2xl font-[700] mb-2">Menu</p>
        </div>
        <div className="px-6 flex flex-row justify-between">
          <p className="text-xl font-[500] mb-2 mr-2">Cold Coffee</p>
          <p className="text-xl font-[500] mb-2 mr-2 text-gray-400">
            Hot Coffee
          </p>
          <p className="text-xl font-[500] mb-2 mr-2 text-gray-400">
            Frappuccino
          </p>
          <p className="text-xl font-[500] mb-2 mr-2 text-gray-400">Affogato</p>
        </div>

        <MenuCard />
      </div>
      <div>
        <div
          className="bg-[#D0C9C0] flex justify-center items-center w-full h-[65px]"
          style={{ position: "fixed", bottom: 0 }}
        >
          <button className="flex flex-row justify-between items-center w-[62%] h-[40px] rounded-[20px] bg-[#1F3933] hover:bg-[#33534B] px-4">
            <div className="text-white">
              For item availability, choose a store
            </div>
            <div>
              <img
                src={search}
                alt=""
                className="text-white h-[20px]"
                style={{ color: "white" }}
              />
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
