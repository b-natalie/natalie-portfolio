import { useState, useEffect } from "react";
import './App.css';
import AboutMe from "./components/AboutMe";
import HomeHeader from "./components/HomeHeader";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div className="App">
      <HomeHeader />
      <AboutMe />
    </div>
  );
}

export default App;
