import "./App.css";
import Answer from "./Components/Answer/Answer";
import Todos from "./Components/Todos/Todos";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Header from "./Components/Header/Header";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <Header></Header>
      <Todos></Todos>
      <Answer></Answer>
    </div>
  );
}

export default App;
