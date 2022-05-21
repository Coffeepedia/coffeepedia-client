import { useNavigate } from "react-router-dom";

import imgArticle from "../assets/svg/articles_onboarding.svg";
import imgRadar from "../assets/svg/radar_onboarding.svg";
import imgOrder from "../assets/svg/order_onboarding.svg";

export default function OnboardingPage() {
  const navigate = useNavigate();

  const color = {
    darkslategray: "#1f3933",
    warm: "#EFEAD8",
    gainsboro: "#e7e3e0",
    darkolivegreen: "#445a37",
    saddlebrown: "#55321c",
  };
  const carouselItems = [
    {
      img: imgArticle,
      headerText: "All information about coffee in your fingertips!",
    },
    {
      img: imgRadar,
      headerText: "All information about coffee in your fingertips!",
    },
    {
      img: imgOrder,
      headerText: "All information about coffee in your fingertips!",
    },
  ];

  return (
    <section className="flex h-screen flex-col items-center bg-[#EFEAD8] pt-20">
      {/* Carousel */}
      <ul className="flex snap-x snap-mandatory gap-20 overflow-x-auto before:w-[30vw] before:shrink-0 after:w-[30vw] after:shrink-0 md:gap-32">
        {carouselItems.map((item, idx) => (
          <li key={idx} className="shrink-0 snap-center">
            <div className="max-w-80">
              <img src={item.img} alt="News onboarding" className="w-80" />
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-20 flex w-screen max-w-[620px] justify-between gap-x-8 px-4">
        <button
          onClick={() => navigate("/register")}
          className="basis-1/2 rounded-3xl border-2 border-p-dark bg-p-dark py-2 font-semibold text-white"
        >
          Register
        </button>
        <button
          onClick={() => navigate("/login")}
          className="basis-1/2 rounded-3xl border-2 border-p-dark bg-white py-2 font-semibold text-p-dark"
        >
          Login
        </button>
      </div>
    </section>
  );
}
