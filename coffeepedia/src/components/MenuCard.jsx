import { useNavigate } from "react-router-dom";
import formatPrice from "../utils/formatPrice";

export default function MenuCard({ item }) {
  const navigate = useNavigate();
  const createOrder = (ItemId) => {};
  return (
    <div className={"justify-self-center "}>
      <div className="flex min-h-[252px] flex-col rounded-xl bg-white shadow-lg">
        {/* Image */}
        <div className="flex flex-col justify-center">
          <img
            src={item.imageUrl}
            alt=""
            className="cursor-pointer items-center rounded-t-xl object-cover"
            onClick={() => navigate(`/detail/${item.id}`)}
          />
        </div>

        {/* Description */}
        <div className="flex grow flex-col justify-between p-2">
          <p className="text-sm font-bold text-gray-800">{item.name}</p>
          <p className="text-xs font-semibold text-gray-500">
            {formatPrice(item.price)}
          </p>
        </div>
      </div>
      {/* <div className="focus:bg flex h-[51px] w-[51px] items-center justify-center rounded-full bg-white p-3 shadow-lg hover:bg-[#557B83] focus:bg-[#689099] focus:outline-none">
        <img
          src="https://cdn-icons-png.flaticon.com/128/2169/2169842.png"
          alt="Coffeepedia Logo"
          className="h-[27px]"
        />
      </div> */}
    </div>
  );
}
