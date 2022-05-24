import { useQuery } from "@apollo/client";
import axios from "axios";
import { useState } from "react";
import DropdownMenu from "../components/DropdownMenu";
import Loading from "../components/Loading";
import OrderHistoryCard from "../components/OrderHistoryCard";
import { GET_ALL_ORDER } from "../queries/orders";

export default function OrderHistoryPage() {
  // const [orders, setOrders] = useState([]);
  const { loading, error, data } = useQuery(GET_ALL_ORDER, {
    variables: {
      accesstoken: localStorage.accesstoken,
    },
  });

  if (loading) {
    return <Loading />;
  } else if (error) {
    return <p>Error...</p>;
  }

  return (
    <section className="min-h-screen pt-16">
      <DropdownMenu />
      {/* Header */}
      <div className="mb-4 bg-p-dark pb-8 shadow-md">
        <div className="p-4 text-2xl font-semibold text-white">History</div>
      </div>

      {/* Card */}
      {data.getAllOrder
        .filter((e) => e.status !== "unpaid")
        .map((order) => (
          <OrderHistoryCard key={order.id} order={order} />
        ))}
    </section>
  );
}
