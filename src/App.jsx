import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Module from "./page/Module";
import Contact from "./page/Contact";
import Kuadrat from "./page/Kuadrat";
import Linear from "./page/Linear";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="module/:id" Component={Module} />
        <Route path="operator/kuadrat" Component={Kuadrat} />
        <Route path="operator/linear" Component={Linear} />
        <Route path="contact" Component={Contact} />
      </Routes>
    </>
  );
};

export default App;
