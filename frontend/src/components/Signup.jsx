import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputWithLabel from "./InputWithLabel";
import Header from "./Header";
import UserDataService from "../services/UserDataService"; 

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
            const response = await UserDataService.signup({ name, email, password });
            localStorage.setItem("token", response.data.token);
            alert("Kayıt başarılı!");
            navigate("/login"); 
        } catch (err) {
            console.error(err);
            alert(err.response?.data?.status || "Kayıt başarısız!");
        }
    };

    return (
        <div>
            <Header />
            <h1>Kayıt Ol</h1>
           
            <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
            <p></p>
            <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <p></p>
            <input type="text" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <p></p>          

            <button onClick={handleSignup}>Kayıt Ol</button>

            <p>
                Zaten hesabınız var mı? <Link to="/login">Giriş Yap</Link>
            </p>
        </div>
    );
}

export default Signup;
