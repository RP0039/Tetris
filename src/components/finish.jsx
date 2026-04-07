import '/finish.css'
import { score } from '/board.jsx'

const Finish = () => {
  return (
    <div className="finish">
      <h2>Game Over</h2>
      <p>{score} points!</p>
      <p>Thanks for playing!</p>
    </div>
  )
}

export default Finish