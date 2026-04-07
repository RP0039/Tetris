import './App.css'


const Game = () => {
  return (
    <div className="game">
      <h1>Tetris</h1>
      <button onClick={() => {
        alert('Playing Tetris!')
      }}>
        Play
      </button>
      <button onClick={() => {
        alert('Viewing scores!')
      }}>
        Scores
      </button>
      <button onClick={() => {
        alert('Viewing credits!')
      }}>
        Credits
      </button>
    </div>
  )
} 

export default Game
