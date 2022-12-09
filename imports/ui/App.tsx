import React from "react";
import { Hello } from "./Hello";
import { Menu } from "./Menu";

export const App = () => (
  <div className="main">
    <Menu />
    <div className="pages">
      <Hello />
    </div>
  </div>
);
