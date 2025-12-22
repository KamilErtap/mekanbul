import Header from "./Header";
import InputWithLabel from "./InputWithLabel";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div>
            <Header />
            <h1>Giriş Yap</h1>
            <InputWithLabel label="Email" type="email" />
            <InputWithLabel label="Şifre" type="password" />
            <button>Giriş Yap</button>
            <p>Hesabınız yok mu? Kayıt olun.</p> <Link to="/signup">Kayıt Ol</Link>
        </div>
    );
}

export default Login;