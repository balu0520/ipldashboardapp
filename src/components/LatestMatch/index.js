// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatDetails

  return (
    <div className="latest-match-container">
      <div className="latest-match-details">
        <h1 className="competing-team-heading">{competingTeam}</h1>
        <p className="date-para">{date}</p>
        <p className="venue-para">{venue}</p>
        <p className="result-para">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="competing-team-icon"
      />
      <div className="latest-match-details-1">
        <p className="innings-para">First Innings</p>
        <p className="innings">{firstInnings}</p>
        <p className="innings-para">Second Innings</p>
        <p className="innings">{secondInnings}</p>
        <p className="man-of-match-para">Man Of The Match</p>
        <p className="man-of-match">{manOfTheMatch}</p>
        <p className="umpires-para">Umpires</p>
        <p className="umpires">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
