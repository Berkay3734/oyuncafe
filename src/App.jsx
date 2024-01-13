import React, { useState } from "react";
import "./App.css";
import BestButton from "./components/BestButton";
import Button from "./components/Button";
import Header from "./components/Header";
import PlayerCard from "./components/PlayerCard";
import Facebook from "./icons/Facebook";
import Left from "./icons/Left";
import PlayWhite from "./icons/Play";
import Reklam from "./icons/Reklam";
import Right from "./icons/Right";

function App() {
  const orange = {
    backgroundColor: "#FF7C04",
  };
  const red = {
    backgroundColor: "#D82842",
  };
  const lightRed = {
    backgroundColor: "#D41431",
  };
  const blue = {
    backgroundColor: "#4051B6",
  };
  const purple = {
    backgroundColor: "#6E37E8",
  };

  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const maxVisibleCards = 6;

  const playerCards = [
    { id: 1, name: "Player 1", skor: "2.3M" },
    { id: 2, name: "Player 2", skor: "2.3M" },
    { id: 3, name: "Player 3", skor: "2.3M" },
    { id: 4, name: "Player 4", skor: "2.3M" },
    { id: 5, name: "Player 5", skor: "2.3M" },
    { id: 6, name: "Player 6", skor: "2.3M" },
    { id: 7, name: "Player 7", skor: "2.3M" },
    { id: 8, name: "Player 8", skor: "2.3M" },
    { id: 9, name: "Player 9", skor: "2.3M" },
    { id: 10, name: "Player 10", skor: "2.3M" },
  ];

  const handleLeftClick = () => {
    setCurrentStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleRightClick = () => {
    setCurrentStartIndex((prevIndex) =>
      Math.min(prevIndex + 1, playerCards.length - maxVisibleCards)
    );
  };

  const visibleCards = playerCards.slice(
    currentStartIndex,
    currentStartIndex + maxVisibleCards
  );

  return (
    <div className="App">
      <Header />
      <div className="middle">
        <div className="left-container">
          <Button name="Misafir Olarak Oyna" style={orange} />
          <Button
            name="Facebook'la Giriş Yap"
            style={blue}
            logo={<Facebook />}
          />
          <Button
            name="Google Play ile Giriş"
            style={red}
            logo={<PlayWhite />}
          />
          <Button name="Giriş Yap" style={purple} page={"/login"} />
          <Button name="Kayıt Ol" style={lightRed} page={"/register"} />
        </div>
        <div className="right-container">
          <div className="users">
            <p style={{ color: "#F5B60F" }}>Oyuncu Sayısı:&nbsp;</p>
            <p>{"123132"}</p>
          </div>
          <div className="reklam">
            <div>
              <Reklam />
            </div>
            <div className="yazi">
              <h1 style={{ color: "#FFE834" }}>Arkadaşlarınla Oyna!</h1>
              <p>Eşsiz Ödüller Seni Bekliyor!</p>
            </div>
            <img
              style={{ width: "25%" }}
              src="https://i.hizliresim.com/n3lwhe2.png"
              alt="reklam"
            />
          </div>
          <div className="best">
            <div className="best-title">
              <BestButton name={"En İyiler"} />
              <BestButton name={"En Aktifler"} />
              <BestButton name={"Yöneticiler"} />
              <BestButton name={"En Yeniler"} />
              <BestButton name={"Oyunlar"} />
            </div>
            <div className="best-player">
              <Left onClick={handleLeftClick} />
              {visibleCards.map((card) => (
                <PlayerCard
                  key={card.id}
                  number={card.id}
                  name={card.name}
                  skor={card.skor}
                />
              ))}
              <Right onClick={handleRightClick} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
