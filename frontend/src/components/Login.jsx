import Header from "./Header";
import InputWithLabel from "./InputWithLabel";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserDataService from "../services/UserDataService"; 
import {jwtDecode} from "jwt-decode";

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
                const token = response.data.token;
                const user = jwtDecode(token);

                localStorage.setItem("token", token);
                alert("Giriş başarılı!");
                console.log("Giriş yapan kullanıcı:", user.role);
                if (user.role === "admin") {
                    navigate("/admin"); 
                }else { 
                navigate("/");
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
            <p></p>
            <input type="text" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} /> 
            <p></p>
            <button onClick={handleLogin}>Giriş Yap</button>
            <p></p>
            <p>Hesabınız yok mu? Kayıt olun.</p> <Link to="/signup">Kayıt Ol</Link>
        </div>
    );
}

export default Login;