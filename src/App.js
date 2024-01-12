import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import Facebook from "./icons/Facebook";
import PlayWhite from "./icons/Play";
import PlayIcon from "./icons/PlayIcon";
import Reklam from "./icons/Reklam";

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
          <Button name="Giriş Yap" style={purple} />
          <Button name="Kayıt Ol" style={lightRed} />
        </div>
        <div className="right-container">
          <div className="users">
            <p style={{ color: "#F5B60F" }}>Oyuncu Sayısı:&nbsp;</p>
            <p>{"123132"}</p>
          </div>
          <div className="reklam">
            <Reklam />
            <img
              style={{ position: "absolute", right: "5%", top: "25%" }}
              src="https://i.hizliresim.com/n3lwhe2.png"
              alt="reklam"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
