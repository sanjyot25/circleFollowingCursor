import Cursor from "./components/cursor";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [scaling, setScaling] = useState();

  return (
    <div className="App">
      <Cursor scaling={scaling} />
      <section>
        <button
          onMouseEnter={() => setScaling(true)}
          onMouseLeave={() => {
            setScaling(false);
          }}
        >
          read more
        </button>
      </section>
    </div>
  );
}
