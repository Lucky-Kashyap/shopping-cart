import { useState } from "react";
import "./App.css";
import { Header } from "./components";
import AllRoutes from "./routes/AllRoutes";

function App() {
  const [shopCount, setShopCount] = useState(0);
  return (
    <div className="App">
      <Header shopCount={shopCount} setShopCount={setShopCount} />
      <AllRoutes shopCount={shopCount} setShopCount={setShopCount} />
    </div>
  );
}

export default App;
