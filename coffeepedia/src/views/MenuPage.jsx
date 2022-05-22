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
    if (!loading) {
      setFilteredItems(data.getAllItem);
    }
  }, []);

  useEffect(() => {
    if (selectedCategoryId !== -1) {
      const filter = data.getAllItem.filter(
        (item) => item.CategoryId === selectedCategoryId
      );
      setFilteredItems(filter);
    } else {
      setFilteredItems(data.getAllItem);
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
        className="container-sm h-full bg-[#EFEAD8] p-2"
        style={{ position: "relative" }}
      >
        <HeaderNav />
        <div className="px-6">
          <p className="mb-2 text-2xl font-[700]">Menu</p>
        </div>
        <div className="flex w-screen flex-row justify-between overflow-x-auto px-6">
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

        <div className="mb-[55px] grid grid-cols-2 justify-items-stretch gap-4 p-2">
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
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
    </div>
  );
}
