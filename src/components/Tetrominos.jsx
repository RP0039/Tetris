export const TETROMINOS = {
    0: { shape: [[0]], color: '0, 0, 0' },
    I: {
        shape: [
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0]
        ],
        color: '80, 227, 230',
    },
    J: {
        shape: [
            [0, 0, 0, 0],
            [0, 0, 0, 'J'],
            [0, 'J', 'J', 'J'],
        ],
        color: '23, 222, 55',
    },  
    L: {
        shape: [
            [0, 0, 0, 0],
            ['L', 0, 0, 0],
            ['L', 'L', 'L', 0]
        ],
        color: '56, 78, 101',
    },  
    T: {
        shape: [
            [0, 0, 0],
            ['T', 'T', 'T'],
            [0, 'T', 0]
        ],
        color: '236, 178, 01',
    },  
    Z: {
        shape: [
            ['Z', 'Z', 0],
            [0, 'Z', 'Z'],
            [0, 0, 0]
        ],
        color: '126, 78, 61',
    },  
    S: {
        shape: [
            [0,'S', 'S'],
            ['S', 'S',0],
            [0, 0, 0]
        ],
        color: '126, 48, 41',
    },  
    H: {
        shape: [
            ['H', 'H'],
            ['H', 'H']
        ],
        color: '255, 218, 161',
    },  

}

export const randomTetromino = () => {
    const tetrominos = 'IJLTSZH';
    const randTetromino = 
        tetrominos[Math.floor(Math.random() * tetrominos.length)];
    return TETROMINOS[randTetromino];
}