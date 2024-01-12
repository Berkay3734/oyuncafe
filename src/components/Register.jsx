export default function Register() {

    return (
        <>
            <div className="register">

                <header>
                    <h2>Hesabını Oluştur!</h2>
                    <button><img src="./img/closeicon.png" alt="" /></button>
                </header>

                <form action="">

                    <label htmlFor="">Kullanıcı Adı  <a >kontrol et</a> </label>
                    <input type="text" />

                    <label htmlFor="">E-posta</label>
                    <input type="text" />

                    <label htmlFor="">Şifre</label>
                    <input id="" type="password" />

                    <div className="gender">
                        <label htmlFor="">Cinsiyet</label>

                        <div className="choises">

                            <div className="choise">
                                <input type="radio" name="gender" id="male" /> <span>Erkek</span>
                            </div>

                            <div className="choise">
                                <input type="radio" name="gender" id="female" /> <span>Kadın</span>
                            </div>

                        </div>
                    </div>

                    <button>Hesabımı oluştur</button>

                </form>

            </div>
        </>
    )
}

