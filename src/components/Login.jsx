export default function Login() {


    return (
        <>
            <div className="login">

                <header>
                    <h2>Üye Girişi</h2>
                </header>

                <form action="">

                    <input type="text" placeholder="Kullanıcı Adı" />
                    <input type="password" name="" id="" placeholder="Şifre"/>

                </form>

                <div className="loginBtns">
                    <button id="close">KAPAT</button>
                    <button id="login">GİRİŞ</button>
                </div>

            </div>

            <div className="otherBtns">
                <button id="register">Üye Ol</button>
                <button id="forgetPassword">Şifremi Unuttum</button>
            </div>
        </>
    )
}