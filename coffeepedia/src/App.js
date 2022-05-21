
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

function App() {
  return (
    <div className="App bg-gray-200 flex justify-center">
      <div className="w-[620px]">
        <Routes>
          <Route path="/" element={<OnboardingPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/articles" element={<ArticlePage />}>
            <Route path="" element={<ArticleFeed />} />
            <Route path=":id" element={<ArticleDetailPage />} />
          </Route>
          
        </Routes>
      </div>
    </div>
  );
}

export default App;
