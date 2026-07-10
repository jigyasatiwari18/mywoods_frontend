import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('mywoods_token');
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="logo">
        <h2>Mywoods</h2>
        <p>Timber & Design</p>
      </div>

      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/woods">Woods</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          {localStorage.getItem('mywoods_token') ? <li><Link to="/cms">CMS</Link></li> : <li><Link to="/login">Login</Link></li>}
        </ul>
      </nav>

      {localStorage.getItem('mywoods_token') ? (
        <button className="btn btn-logout" onClick={handleLogout}>
          Logout
        </button>
      ) : null}
    </header>
  );
}

export default Header;
