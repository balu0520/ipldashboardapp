// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails

  return (
    <li className="team-item">
      <Link to={`/team-matches/${id}`} className="item-link">
        <img src={teamImageUrl} alt={name} className="team-logo" />
        <h1 className="team-item-heading">{name}</h1>
      </Link>
    </li>
  )
}

export default TeamCard
