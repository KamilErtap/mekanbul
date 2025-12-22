import Header from "./Header";
import InputWithLabel from "./InputWithLabel";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
            if (!email || !password) {
                alert("Tüm alanlar gerekli!");
                return;
            }
    
            try {
                const response = await UserDataService.login({ email, password });
                // Token localStorage’a kaydedilebilir
                localStorage.setItem("token", response.data.token);
                alert("Giriş başarılı!");
                navigate("/"); // Ana sayfaya yönlendir
                if (response.data.user.role === "admin") {
                    navigate("/admin"); // Admin paneline yönlendir
                }
            } catch (err) {
                console.error(err);
                alert(err.response?.data?.status || "Giriş başarısız!");
            }
        };

    return (
        <div>
            <Header />
            <h1>Giriş Yap</h1>
            <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />   
            <button onClick={handleLogin}>Giriş Yap</button>
            <p>Hesabınız yok mu? Kayıt olun.</p> <Link to="/signup">Kayıt Ol</Link>
        </div>
    );
}

export default Login;