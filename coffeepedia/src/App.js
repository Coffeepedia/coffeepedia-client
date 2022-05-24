import MenuPage from "./views/MenuPage";
import OrderPage from "./views/OrderPage";
import CoffeeRadarPage from "./views/CoffeeRadarPage";
import { Routes, Route } from "react-router-dom";
import ArticlePage from "./views/ArticlePage";
import ArticleDetailPage from "./views/ArticleDetailPage";
import ArticleFeed from "./components/ArticleFeed";

import LoginPage from "./views/LoginPage";
import OnboardingPage from "./views/OnboardingPage";
import RegisterPage from "./views/RegisterPage";
import MenuDetailPage from "./views/MenuDetailPage";
import CoffeeShopDetailPage from "./views/CoffeeShopDetailPage";
import OrderTrackingPage from "./views/OrderTrackingPage";
import OrderHistoryPage from "./views/OrderHistoryPage";

function App() {
  return (
    <div className="App flex justify-center bg-gray-200">
      <div className="h-full w-[620px]">
        <Routes>
          <Route path="/" element={<OnboardingPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/articles" element={<ArticlePage />}>
            <Route path="" element={<ArticleFeed />} />
            <Route path=":id" element={<ArticleDetailPage />} />
          </Route>
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/radar" element={<CoffeeRadarPage />} />
          <Route path="/detail/:id" element={<MenuDetailPage />} />
          <Route path="/coffeeshops/:id" element={<CoffeeShopDetailPage />} />
          <Route path="/order/:id" element={<OrderTrackingPage />} />
          <Route path="/order/history" element={<OrderHistoryPage />} />
          <Route
            path="*"
            element={
              <p className="cursor-default py-20 text-center text-2xl">
                There's nothing here: <span className="underline">404!</span>
              </p>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
