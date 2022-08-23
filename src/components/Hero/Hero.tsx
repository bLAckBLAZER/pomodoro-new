import HeroImage from "../../assets/images/hero.svg";
import "./Hero.css";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="grid-40-60 flex-1">
      <div className="flex flex-col px-3">
        <div className="hero-title">
          Subtle<span>Clock</span>
        </div>
        <div className="hero-subtitle">Meet your own personal assistant</div>
        <div className="hero-subtitle">
          <span>Pomodoro Tracking App</span>
        </div>
        <div className="h4">
          Manage your daily tasks and workflow in a modern way and boost your
          efficiency without any efforts.
        </div>
        <Link to="/signup">
          <button className="btn btn-primary mg-y-2">Sign Up</button>
        </Link>
        <Link to="/login">Already have an account? Log in!</Link>
      </div>
      <div className="hero-img flex-1">
        <img src={HeroImage} alt="hero img" className="img-res" />
      </div>
    </div>
  );
};
