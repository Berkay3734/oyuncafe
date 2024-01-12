import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import Facebook from "./icons/Facebook";

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
          <Button name="Google Play ile Giriş" style={red} />
          <Button name="Giriş Yap" style={purple} />
          <Button name="Kayıt Ol" style={lightRed} />
        </div>
      </div>
    </div>
  );
}

export default App;
