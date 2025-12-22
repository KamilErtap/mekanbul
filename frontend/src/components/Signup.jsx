    import { Link, useNavigate } from "react-router-dom";
    import InputWithLabel from "./InputWithLabel";
    import Header from "./Header";

    function Signup() {
     
    return (
        <div>
        <Header />
        <h1>Kayıt Ol</h1>

        <InputWithLabel
            label="Kullanıcı Adı"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />

        <InputWithLabel
            label="Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />

        <InputWithLabel
            label="Şifre"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleSignup}>Kayıt Ol</button>

        <p>
            Zaten hesabınız var mı? <Link to="/login">Giriş Yap</Link>
        </p>
        </div>
    );
    }

    export default Signup;
