import { useState } from "react";
import { Counter } from "./Counter";
import Footer from "./layouts/footer";
import Header from "./layouts/header";
import { CounterContext } from "./context";
function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <CounterContext.Provider value={{ count: count, increment, decrement }}>
      <div className="App">
        <Header />
        <Counter />
        <Footer />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
