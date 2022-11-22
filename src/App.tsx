import Header from "@/common/header";
import Footer from "@/common/footer";
import RoutesFunction from "@/pages/routers/routes";
import { RecoilRoot } from "recoil";
import "@/assets/styles/reset.css";
import "./App.css";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Header />
        <RoutesFunction />
        <Footer />
      </div>
    </RecoilRoot>
  );
}

export default App;
