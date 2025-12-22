import { Link } from "react-router-dom";
import InputWithLabel from "./InputWithLabel";
import Header from "./Header";

function Signup() {
    return (
        <div>
            <Header />
            <h1>Kayıt Ol</h1>
            <InputWithLabel label="Kullanıcı Adı" type="text" />
            <InputWithLabel label="Email" type="email" />
            <InputWithLabel label="Şifre" type="password" />
            <button>Kayıt Ol</button>
            <p>Zaten hesabınız var mı? Giriş yapın.</p> <Link to="/login">Giriş Yap</Link>
        </div>
    );
}

export default Signup;