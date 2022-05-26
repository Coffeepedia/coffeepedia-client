import HeaderNav from "../components/HeaderNav";
import MenuCard from "../components/MenuCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@apollo/client";
import { GET_ITEMS } from "../queries/items";
import ViewCart from "../components/ViewCart";
import DropdownMenu from "../components/DropdownMenu";
import Loading from "../components/Loading";

export default function HomePage() {
  const categoriesUrl = "https://cfpd-service-orders.herokuapp.com/categories";
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
    return <Loading />;
  } else if (Object.keys(categories.error).length || error) {
    return <p>Error...</p>;
  }

  return (
    <div className="h-full min-h-screen w-screen max-w-[620px]">
      <div
        className="container-sm h-full bg-[#EFEAD8]"
        style={{ position: "relative" }}
      >
        {/* <HeaderNav /> */}
        <DropdownMenu />
        <div className="mb-6 border-b border-black bg-s-light pt-24 pb-2">
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
      <ViewCart />
    </div>
  );
}
