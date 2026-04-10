import React from "react";

import { createStage } from "../hooks/gameHelpers";
import { StyledTetrisWrapper, StyledTetris } from "./style/StyledTetris.js";

// components
import Stage from "./Stage.jsx";
import Display from "./Display.jsx";
import StartButton from "./Startbutton.jsx";

const Tetris = () => {

  return (
    <StyledTetrisWrapper>
      <StyledTetris>
      <Stage stage={createStage()} />
      <aside>
        <div>
        <Display text="Score" />
        <Display text="Rows" />
        <Display text="Level" />
        </div>
        <StartButton />
      </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;