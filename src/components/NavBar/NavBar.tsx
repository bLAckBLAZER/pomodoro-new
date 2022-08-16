import "../../styles/navbar.css";
import { Link, useNavigate } from "react-router-dom";
// import { useTheme } from "../../contexts/ThemeContext";
// import { getTheme } from "../../utils/getTheme";
// import { useAuth, useTasks } from "../../contexts";
// import { userLogout } from "../../utils/authenticationCalls";

type NavBarProps = {
  title: string;
  logo: string;
};

export const NavBar = ({ title, logo }: NavBarProps) => {
  // const { theme, setTheme } = useTheme();

  // const {
  //   authState: { token },
  //   dispatchAuth,
  // } = useAuth();

  // const { dispatchTasks } = useTasks();

  const navigate = useNavigate();

  const token = "temp-value";
  const theme = "dark";

  return (
    <nav className={`navbar fixed}`}>
      <Link to="/">
        <div className="flex align-ctr justify-ctr">
          <div className="nav-logo">
            <img src={logo} alt="" />
          </div>
          <div className="nav-heading">{title}</div>
        </div>
      </Link>
      <ul className="nav-actions">
        <li className="nav-action-item">
          {token ? (
            <button
              className="btn btn-primary"
              // onClick={() => userLogout(dispatchAuth, dispatchTasks, navigate)}
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="btn btn-primary">Login</button>
            </Link>
          )}
        </li>
        <li className="nav-action-item">
          <i
            className={`far ${theme === "dark" ? "fa-sun" : "fa-moon"} fa-2x`}
            // onClick={() => setTheme(theme === "dark" ? "theme" : "dark")}
          ></i>
        </li>
      </ul>
    </nav>
  );
};
