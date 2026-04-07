import '/scores.css'
import { score } from '/board.jsx'

const Scores = () => {
  return (
    <div className="scores">
      <h2>High Scores</h2>
        {score && score.map((points) => (
        <p>{points}</p>
        ))}
    </div>
  )
}

export default Scores