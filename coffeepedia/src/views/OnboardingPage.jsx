import { useNavigate } from "react-router-dom";

import imgArticle from "../assets/svg/articles_onboarding.svg";
import imgRadar from "../assets/svg/radar_onboarding.svg";
import imgOrder from "../assets/svg/order_onboarding.svg";
import logo from "../assets/Skyline.png";

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
    <div className="flex h-screen w-screen max-w-[620px] flex-col items-center gap-y-16 bg-[#1f3933]">
      {/* Carousel */}
      <div className=" flex w-full flex-col items-center justify-center gap-y-2 text-center">
        <img src={logo} alt="" className="w-[120%]" />
      </div>

      <div className="flex h-56 w-[80%] max-w-[620px] flex-col gap-y-4 p-10">
        <button
          onClick={() => navigate("/radar")}
          className="basis-1/2 rounded-[40px] bg-[#5F7161] py-2 font-semibold text-white hover:bg-primary "
        >
          Coffee Radar
        </button>
        <button
          onClick={() => navigate("/login")}
          className="basis-1/2 rounded-[40px] bg-white py-2 font-semibold text-p-dark hover:bg-primary hover:text-white "
        >
          Login
        </button>
      </div>
    </div>
  );
}
