export default function Pricing({ priceLevel }) {
  let priceLevelIndicator = "";
  for (let i = 0; i < priceLevel; i++) {
    priceLevelIndicator += "$";
  }

  return (
    <div className="font-bold tracking-tighter text-gray-700">
      {priceLevelIndicator}
    </div>
  );
}
