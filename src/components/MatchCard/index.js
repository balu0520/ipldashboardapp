// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatDetails} = props
  const {
    result,
    competingTeam,
    competingTeamLogo,
    matchStatus,
  } = recentMatDetails
  const clr = matchStatus === 'WIN' ? 'win-clr' : 'lost-clr'

  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-img"
      />
      <h1 className="competing-team-heading">{competingTeam}</h1>
      <p className={`match-result ${clr}`}>{result}</p>
      <p className={`match-status ${clr}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
