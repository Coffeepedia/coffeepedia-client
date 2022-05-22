import HeaderNav from "../components/HeaderNav";
import MenuCard from "../components/MenuCard";
import search from "../assets/search.png";

export default function HomePage() {
  return (
    <>
      <div
        className="container-sm h-full bg-[#EFEAD8] p-2"
        style={{ position: "relative" }}
      >
        <HeaderNav />
        <div className="px-6">
          <p className="mb-2 text-2xl font-[700]">Menu</p>
        </div>
        <div className="flex flex-row justify-between px-6">
          <p className="mb-2 mr-2 text-xl font-[500]">Cold Coffee</p>
          <p className="mb-2 mr-2 text-xl font-[500] text-gray-400">
            Hot Coffee
          </p>
          <p className="mb-2 mr-2 text-xl font-[500] text-gray-400">
            Frappuccino
          </p>
          <p className="mb-2 mr-2 text-xl font-[500] text-gray-400">Affogato</p>
        </div>

        <MenuCard />
      </div>
      <div>
        <div
          className="flex h-[65px] w-screen max-w-[620px] items-center justify-center bg-[#D0C9C0]"
          style={{ position: "fixed", bottom: 0 }}
        >
          <button className="flex h-[40px] w-[62%] flex-row items-center justify-between rounded-[20px] bg-[#1F3933] px-4 hover:bg-[#33534B]">
            <div className="text-white">
              For item availability, choose a store
            </div>
            <div>
              <img
                src={search}
                alt=""
                className="h-[20px] text-white"
                style={{ color: "white" }}
              />
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
