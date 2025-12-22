    import { Link, useNavigate } from "react-router-dom";
    import { useState } from "react";
    import InputWithLabel from "./InputWithLabel";
    import Header from "./Header";
    import axios from "axios";
    

    function Signup() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async () => {
    const dataFrame = { name, email, password };

    try {
        await axios.post(
            "http://localhost:3000/api/signup",
            dataFrame, // -> "name=...&email=...&password=..."
            {
                headers: {
                    "Content-Type": "application/json",
                    
                },
            }
        );
            console.log("Kayıt başarılı");
            alert("Kayıt başarılı! Giriş sayfasına yönlendiriliyorsunuz.");
        } catch (error) {
            console.log("Kayıt başarısız", error);
            alert("Kayıt başarısız! Lütfen bilgilerinizi kontrol edin.");
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
