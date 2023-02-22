import { useState, useEffect } from "react";

export default function Standings() {

  const [teams, setTeams] = useState([{}])

  // function getData() {
  //   axios({
  //     method: "GET",
  //     url:"/get_teams"
  //   })
  //   .then((response) => {
  //     const res = response.data
  //     setTeams(({
  //       team1: res.team1}))
  //   })
  // }

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
      <h1> Poro League Standings </h1>
      <table>
        <tr>
          <th> Place </th>
          <th> Team </th>
          <th> Score </th>
        </tr>
        {
          Object.keys(teams).map((team, i) => (
            <tr key={i}> 
              <th> {i+1} </th>
              <th> {teams[team].name} </th>
              <th> {teams[team].win}W-{teams[team].loss}L </th>
            </tr>
          ))
        }
      </table>
    </div>
  );
}