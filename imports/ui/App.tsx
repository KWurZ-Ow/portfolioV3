import React from "react";
import { Creations } from "./Creations";
import { Hello } from "./Hello";
import { Menu } from "./Menu";
import { Login } from "./Login"

export const App = () => (
  <>
    <div className="nav">
      <Menu />
    </div>
    <div className="pages">
      <Hello />
      <Creations />
    </div>
  </>
);
