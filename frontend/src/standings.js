import { useState, useEffect } from "react";

const logoMap = {
  "Desire 1": "logo-desire-1.png",
  "Moonlight": "logo-moonlight.png",
  "Strawbie Cows": "logo-strawbie-cows.png",
  "MEGA Rawr!!": "logo-mega-rawr.png",
  "Impact": "logo-impact.png",
  "PF Changs": "logo-pf-changs.png"
};



export default function Standings() {

  const [teams, setTeams] = useState([{}])

  useEffect(() => {
    fetch("/get_teams").then(
      res => res.json()
    ).then(
      teams => {
        setTeams(teams)
      }
    )
  }, [])

	return (
    <div className="standings">
      <h1> Standings </h1>
      <div className="ranking">
        {Object.keys(teams).map((team, i) => (
            <a className="rank" key={i}>
              <div className="ordinal">
                {i+1}
              </div>
              <div className="team">
                <div className="team-logo">
                  <img src={logoMap[teams[team].name]} alt="logo" />
                </div>
                <div className="team-name">
                  {teams[team].name}
                </div>
              </div> 
              <div className="record">
                  {teams[team].win}W-{teams[team].loss}L
              </div>
            </a>
          ))
        }
      </div>
    </div>
  );
}