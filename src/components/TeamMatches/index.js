// Write your code here
import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    teamBanner: '',
    latestMatch: [],
    matchesRecent: [],
    isLoading: true,
    id: 'RCB',
  }

  componentDidMount() {
    this.getMatchDetails()
  }

  getLatestMatchData = matchData => ({
    umpires: matchData.umpires,
    result: matchData.result,
    manOfTheMatch: matchData.man_of_the_match,
    id: matchData.id,
    date: matchData.date,
    venue: matchData.venue,
    competingTeam: matchData.competing_team,
    competingTeamLogo: matchData.competing_team_logo,
    firstInnings: matchData.first_innings,
    secondInnings: matchData.second_innings,
    matchStatus: matchData.match_status,
  })

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const bgId = id
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = response.json()
    console.log(data)
    console.log(data.team_banner_url)
    const teamBannerUrl = data.team_banner_url
    const latestMatchDetails = data.latest_match_details
    const recentMatchDetails = data.recent_matches.map(eachData => ({
      umpires: eachData.umpires,
      result: eachData.result,
      manOfTheMatch: eachData.man_of_the_match,
      id: eachData.id,
      date: eachData.date,
      venue: eachData.venue,
      competingTeam: eachData.competing_team,
      competingTeamLogo: eachData.competing_team_logo,
      firstInnings: eachData.first_innings,
      secondInnings: eachData.second_innings,
      matchStatus: eachData.match_status,
    }))
    const respData = this.getLatestMatchData(latestMatchDetails)
    console.log(respData)
    this.setState({
      teamBanner: teamBannerUrl,
      latestMatch: respData,
      matchesRecent: recentMatchDetails,
      isLoading: false,
      id: bgId,
    })
  }

  render() {
    const {teamBanner, latestMatch, matchesRecent, isLoading, id} = this.state

    return (
      <div className={`team-container ${id}`}>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="team-match-container">
            <img src={teamBanner} alt="team banner" className="team-banner" />
            <p className="team-match-para">latest matches</p>
            <LatestMatch key={latestMatch.id} latestMatDetails={latestMatch} />
            <ul className="recent-matches-list">
              {matchesRecent.map(eachRecent => (
                <MatchCard key={eachRecent.id} recentMatDetails={eachRecent} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
