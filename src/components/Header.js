import React from "react";
import Menu from "./Menu";
import PlayIcon from "../icons/PlayIcon";
import BackIcon from "../icons/BackIcon";
import NextIcon from "../icons/NextIcon";
import PauseIcon from "../icons/PauseIcon";
import Facebook from "../icons/Facebook";
import Twitter from "../icons/Twitter";
import Instagram from "../icons/Instagram";

function Header() {
  const [play, setPlay] = React.useState(true);
  return (
    <div className="headerContainer">
      <div className="headerMenu">
        <Menu name="Anasayfa" />
        <Menu name="Blog" />
        <Menu name="Salon Kirala" />
        <Menu name="İletişim" />
      </div>
      <div className="headerRadio">
        <div className="radio">
          {play ? (
            <PlayIcon click={() => setPlay(!play)} />
          ) : (
            <PauseIcon click={() => setPlay(!play)} />
          )}
          <BackIcon />
          <NextIcon />
          <div className="radio-frekans-container">
            <div className="radio-frekans">
              <p>Frekans</p>
              <img
                src="https://i.hizliresim.com/o03ezmf.png"
                alt="radio ismi"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="headerMedia">
        <div className="media">
          <Facebook onclick={""} />
          <Twitter onclick={""} />
          <Instagram onclick={""} />
          <Facebook onclick={""} />
          <Twitter onclick={""} />
        </div>
      </div>
    </div>
  );
}

export default Header;
