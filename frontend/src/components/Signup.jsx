import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputWithLabel from "./InputWithLabel";
import Header from "./Header";
import UserDataService from "../services/UserDataService"; // Axios service
import qs from "qs";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async () => {
        if (!name || !email || !password) {
            alert("Tüm alanlar gerekli!");
            return;
        }

        try {
            const response = await UserDataService.signup(qs.stringify({ name, email, password }));
            // Token localStorage’a kaydedilebilir
            localStorage.setItem("token", response.data.token);
            alert("Kayıt başarılı!");
            navigate("/"); // Ana sayfaya yönlendir
        } catch (err) {
            console.error(err);
            alert(err.response?.data?.status || "Kayıt başarısız!");
        }
    };

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
