import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import "./styles/index.css";
import { NavBar, Footer } from "./components";
import Logo from "./assets/images/clock_logo.png";
import { Redirect } from "./router";
import { Homepage } from "./pages";
import { getTheme } from "./utils/getTheme";
import { useTheme } from "./contexts/ThemeContext";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={`wrapper justify-between ${getTheme(theme)}`}>
      <NavBar title="Subtle Clock" logo={Logo} />
      <Routes>
        <Route element={<Redirect />}>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> */}
        </Route>
        {/* <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pomodoro" element={<Pomodoro />} />
        </Route>
        <Route
          path="*"
          element={
            <PageNotFound
              errorMsg="Oops! Looks like you have lost your way. The page you're looking for
does not exist.
"
              gotoMsg="Go to Homepage"
              gotoPath="/"
            />
          }
        /> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
