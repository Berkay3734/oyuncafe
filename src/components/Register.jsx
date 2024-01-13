import React from "react";
import "../css/Auth.css";
import { useNavigate } from "react-router";

function Register() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="register">
        <header>
          <h2>Hesabını Oluştur!</h2>
          <button>
            <img src="./img/closeicon.png" alt="" />
          </button>
        </header>

        <form action="">
          <label htmlFor="">
            Kullanıcı Adı <p>kontrol et</p>
          </label>
          <input type="text" />

          <label htmlFor="">E-posta</label>
          <input type="text" />

          <label htmlFor="">Şifre</label>
          <input id="" type="password" />

          <div className="gender">
            <label htmlFor="">Cinsiyet</label>

            <div className="choises">
              <div className="choise">
                <input type="radio" name="gender" id="male" />
                <span>Erkek</span>
              </div>

              <div className="choise">
                <input type="radio" name="gender" id="female" />
                <span>Kadın</span>
              </div>
            </div>
          </div>
          <button>Hesabımı oluştur</button>
          <p onClick={() => navigate("/login")}>Giriş Yap</p>
        </form>
      </div>
    </div>
  );
}

export default Register;
