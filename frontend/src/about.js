import {Link } from "react-router-dom";

export default function About() {
	return (
    <div className="about">
      <h1> About Us</h1>
      <p>
        Poro League is a community that aims to provide a semi-competitive environment for new and casual players.
        <br></br>
        <br></br>
        Want to know more?
        <br></br>
        Check out the Poro League Rulebook!
      </p>
      <Link to="https://docs.google.com/document/d/1GlOf0dMONJtWYeNQDhO9tbgM9GxjdSpyRkBvTk_4sfo">
        <button> Poro League Rulebook </button>
      </Link>
    </div>
  );
}