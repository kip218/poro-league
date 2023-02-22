import { useState, useEffect } from "react";

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
                <div className="team-name">
                  {teams[team].name}
                </div>
                <div className="record">
                  {teams[team].win}W-{teams[team].loss}L
                </div>
              </div> 
            </a>
          ))
        }
      </div>
    </div>
  );
}