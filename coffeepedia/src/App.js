import LoginPage from "./views/LoginPage";
import OnboardingPage from "./views/OnboardingPage";
import RegisterPage from "./views/RegisterPage";

function App() {
  return (
    <div className="App bg-gray-200 flex justify-center">
      <div className="w-[620px]">
        {/* <OnboardingPage /> */}
        {/* <LoginPage /> */}
        <RegisterPage />
      </div>
    </div>
  );
}

export default App;
