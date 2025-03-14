import Footer from "./components/layouts/footer";
import Navbar from "./components/layouts/navbar";
import Caring from "./screens/caring";
import Client from "./screens/client";
import HelpingLocal from "./screens/helpingLocal";
import Home from "./screens/home";
import HowDesign from "./screens/howDesign";
import LearnMore from "./screens/learnMore";
import Testla from "./screens/tesla";

function App() {
  return (
    <div>
      <Navbar />
      <div className="max-w-[90%] lg:max-w-[70%] mx-auto">
        <Home />
        <Client />
        <LearnMore />
      </div>
      <HelpingLocal />
      <div className="max-w-[90%] lg:max-w-[70%] mx-auto">
        <HowDesign />
      </div>
      <Testla />
      <div className="max-w-[90%] lg:max-w-[70%] mx-auto">
        <Caring />
      </div>
      <Footer />
    </div>
  );
}

export default App;
