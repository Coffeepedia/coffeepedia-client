import HeaderNav from "../components/HeaderNav";
import MenuCard from "../components/MenuCard";
import search from "../assets/search.png";
import { useEffect, useState } from "react";
import axios from "axios";

export default function HomePage() {
  const categoriesUrl = "http://localhost:4003/categories";
  const [categories, setCategories] = useState({
    loading: false,
    error: {},
    data: [],
  });
  const [selectedCategoryId, setSelectedCategoryId] = useState(-1);

  useEffect(() => {
    (async () => {
      setCategories({ ...categories, loading: true });
      try {
        const { data } = await axios.get(categoriesUrl);
        setCategories({ loading: false, error: {}, data: data });
      } catch (error) {
        setCategories({
          ...categories,
          loading: false,
          error: error.response.data,
        });
      }
    })();
    console.log(categories.data);
  }, []);

  if (categories.loading) {
    return <p>Loading...</p>;
  } else if (Object.keys(categories.error).length) {
    return <p>Error...</p>;
  }

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
        <div className="flex w-screen flex-row justify-between overflow-x-auto px-6">
          <p className="mb-2 mr-2 shrink-0 text-base font-[500]">All Item</p>
          {categories.data.map((category) => (
            <p
              key={category.id}
              className="mb-2 mr-2 shrink-0 cursor-pointer text-base font-[500] text-gray-500"
            >
              {category.name}
            </p>
          ))}
        </div>

        <div class="mb-[55px] grid grid-cols-2 justify-items-stretch gap-4 p-2">
          <MenuCard />
        </div>
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
