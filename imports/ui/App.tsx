import React, { useState } from "react";
import { MesCreations } from "./MesCreations";
import { Menu } from "./Menu";
import { Presentation } from "./Presentation";
import { Competences } from "./Competences";
import { MesExperiences } from "./MesExperiences";
import { useIntersection } from '@mantine/hooks';

export const App = () => {
  const [active, setActive] = useState(0);
  return <>
    <div className="nav">
      <Menu active={active} setActive={setActive} />
    </div>
    <div className="pages">
      <Presentation />
      <MesExperiences />
      <Competences />
      <MesCreations />
    </div>
  </>
};
