import HeaderNav from "../components/HeaderNav";
import MenuCard from "../components/MenuCard";
import search from "../assets/search.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@apollo/client";
import { GET_ITEMS } from "../queries/items";

export default function HomePage() {
  const categoriesUrl = "http://localhost:4003/categories";
  const [categories, setCategories] = useState({
    loading: false,
    error: {},
    data: [],
  });
  const [selectedCategoryId, setSelectedCategoryId] = useState(-1);
  const { loading, error, data } = useQuery(GET_ITEMS);
  const [filteredItems, setFilteredItems] = useState([]);

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
  }, []);

  useEffect(() => {
    if (!loading && data.getAllItem.length) {
      setFilteredItems(data.getAllItem);
    }
  }, [loading]);

  useEffect(() => {
    if (!loading) {
      if (selectedCategoryId === -1) {
        setFilteredItems(data.getAllItem);
      } else {
        const filter = data.getAllItem.filter(
          (item) => item.CategoryId === selectedCategoryId
        );
        setFilteredItems(filter);
      }
    }
  }, [selectedCategoryId]);

  const categorySelectorStyle = (id) => {
    if (id === selectedCategoryId) {
      return "";
    }
    return "text-gray-500";
  };

  if (categories.loading || loading) {
    return <p>Loading...</p>;
  } else if (Object.keys(categories.error).length || error) {
    return <p>Error...</p>;
  }

  return (
    <div className="h-full min-h-screen w-screen">
      <div
        className="container-sm h-full bg-[#EFEAD8]"
        style={{ position: "relative" }}
      >
        <HeaderNav />
        <div className="sticky top-0 mb-6 border-b border-black bg-s-light pb-2">
          <div className="px-4">
            <p className="mb-2 text-2xl font-[700]">Menu</p>
          </div>
          <div className="flex w-screen flex-row justify-between overflow-x-auto px-4">
            <p
              onClick={() => setSelectedCategoryId(-1)}
              className={
                "mb-2 mr-4 shrink-0 cursor-pointer text-base font-[500] " +
                categorySelectorStyle(-1)
              }
            >
              All Item
            </p>
            {categories.data.map((category) => (
              <p
                key={category.id}
                onClick={() => setSelectedCategoryId(category.id)}
                className={`mb-2 mr-4 shrink-0 cursor-pointer text-base font-[500] ${categorySelectorStyle(
                  category.id
                )}`}
              >
                {category.name}
              </p>
            ))}
          </div>
        </div>

        <div className="mb-[55px] grid grid-cols-2 justify-items-stretch gap-x-12 gap-y-6 px-4 pb-10">
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div>
        <div
          className="flex h-[65px] w-screen max-w-[620px] items-center justify-end bg-[#D0C9C0] px-4"
          style={{ position: "fixed", bottom: 0 }}
        >
          <button className="flex h-[40px] flex-row items-center justify-end space-x-4 rounded-[20px] bg-primary px-4 font-semibold hover:bg-[#33534B]">
            <div className="text-white">View cart (4)</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 fill-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
