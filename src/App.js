import React from "react";
import Random from "./components/Random/Random";
import Total from "./components/Total/Total";

import Controls from "./components/Controls/Controls";
import { SideCount } from "./components/SideCount";
import "./styles/app.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <SideCount />
        <Random />
      </header>
      <Total />
      <Controls />
    </div>
  );
}

export default App;
