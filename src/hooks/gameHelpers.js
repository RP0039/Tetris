export const Stage_WIDTH = 12;
export const Stage_HEIGHT = 20;

export const createStage = () => 
    Array.from(Array(Stage_HEIGHT), () => 
      new Array(Stage_WIDTH).fill([0, 'clear'])
    );