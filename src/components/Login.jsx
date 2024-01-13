import React from "react";
import "../css/Auth.css";
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="login">
        <header>
          <h2>Üye Girişi</h2>
        </header>

        <form action="">
          <input type="text" placeholder="Kullanıcı Adı" />
          <input type="password" name="" id="" placeholder="Şifre" />
        </form>

        <div className="loginBtns">
          <button id="close" onClick={() => navigate("/")}>
            KAPAT
          </button>
          <button id="login">GİRİŞ</button>
        </div>
      </div>

      <div className="otherBtns">
        <button id="register" onClick={() => navigate("/register")}>
          Üye Ol
        </button>
        <button id="forgetPassword">Şifremi Unuttum</button>
      </div>
    </div>
  );
}

export default Login;
