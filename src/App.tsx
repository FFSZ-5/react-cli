import "./App.scss";

import Demo from "./components/demo";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("lfsz", 789);
  }, []);
  return (
    <>
      <Demo />
    </>
  );
}

export default App;
