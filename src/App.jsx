import "./App.css";
import DaisyNav from "./components/DaisyNav/DaisyNav";
import LineChart from "./components/LineChart/LineChart";
import NavBar from "./components/NavBar/NavBar";
import PriceOptions from "./components/PriceOpitons/PriceOptions";
import Phones from "./components/Phones/Phones";
import "./index.css";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
      {/* <DaisyNav></DaisyNav> */}
    </>
  );
}

export default App;
