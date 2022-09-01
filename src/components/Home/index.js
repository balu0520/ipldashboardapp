// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {isLoading: true, teamLists: []}

  componentDidMount() {
    this.getTeamLists()
  }

  getTeamLists = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const resData = data.teams
    const formattedData = resData.map(eachData => ({
      name: eachData.name,
      id: eachData.id,
      teamImageUrl: eachData.team_image_url,
    }))
    this.setState({teamLists: formattedData, isLoading: false})
  }

  render() {
    const {isLoading, teamLists} = this.state
    return (
      <div className="bg-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="container">
            <div className="home-heading">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="ipl-logo"
              />
              <h1 className="dashboard-heading">IPL Dashboard</h1>
            </div>
            <ul className="teams-list">
              {teamLists.map(eachTeam => (
                <TeamCard key={eachTeam.id} teamDetails={eachTeam} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
