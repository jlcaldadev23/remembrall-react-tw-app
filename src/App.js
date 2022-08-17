// Dependencies
import React from "react";

import { Header, SearchBar, SideBar, Window } from "./components";

// Styles
import "./tailwind.output.css";

const App = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <SideBar />
      <SearchBar />
      <Window />
    </div>
  );
};

export default App;
