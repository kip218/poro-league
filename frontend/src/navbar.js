export default function Navbar() {
	return (
	  <nav className="shift">
      <div className="logo">
        <a href="/">
          <img src="poro_logo.png" alt="logo" />
          Poro League
        </a>
      </div>
      <ul>
        <li>
          <a href="/about"> About </a>
        </li>
        <li>
          <a href="/standings"> Standings </a>
        </li>
        <li>
          <a href="/schedule"> Schedule </a>
        </li>
      </ul>
	  </nav>
  );
}