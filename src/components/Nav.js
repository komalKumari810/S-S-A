
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Nav = () => {

  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <body>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
          <Link className="navbar-brand" to="/"><b>SSA</b></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              
              <li className="nav-item"><Link className="nav-link" aria-current="page" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/elearning">ELeraning</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/courses">Courses</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/news">News</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              {isAuthenticated && ( <li><p>{user.name}</p></li>)}
              {
                isAuthenticated ? (
                  <li><button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button></li>
                ) : (
                  <li><button onClick={() => loginWithRedirect()}>Log In</button></li>
                )
              }
            </ul>
          </div>
        </div>
      </nav>
    </body>
  );
};

export default Nav;
