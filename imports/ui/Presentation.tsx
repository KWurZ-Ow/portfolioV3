import React, { useState } from "react";
import { Grid, Image } from "@mantine/core";

export function Presentation() {
  let anniv: any = new Date("November 11, 2001");
  return (
    <div className="page">
      <Grid justify="space-around" align="center">
        <Grid.Col span={4}>
          <Image
            src="/portrait.png"
            alt="Portrait de Marius Proton"
            height="95vh"
            fit="contain"
          />
        </Grid.Col>
        <Grid.Col span={8}>
          <div>
            <h1>Marius Proton</h1>
            <h2>Bienvenue sur mon portfolio !</h2>
            <p>
              Hey ! Je m'appelle Marius, j'ai{" "}
              {new Date(Date.now() - anniv).getFullYear() - 1970} ans et je suis
              développeur applications web en alternance. <br />
              J'étudie à l'école des{" "}
              <a
                href="https://www.gobelins.fr/"
                target="_blank"
                rel="noreferrer"
              >
                Gobelins
              </a>{" "}
              où je suis le bachelor <i>"Développeur web et applications"</i>.{" "}
              <br /> Je travaille en alternance chez{" "}
              <a href="https://ellistat.com/" target="_blank" rel="noreferrer">
                Ellistat
              </a>{" "}
              en tant que développeur JavaScript fullstack
            </p>
            down
          </div>
        </Grid.Col>
      </Grid>
    </div>
  );
}
