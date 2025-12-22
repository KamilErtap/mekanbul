import { Link } from "react-router-dom";
import InputWithLabel from "./InputWithLabel";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
    const navigate = useNavigate(); 

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSignup = async () => {
        try {
            const response = await axios.post("/api/signup", {
                name,
                email,
                password,
            });

            const token = response.data.token;
            localStorage.setItem("token", token);
            navigate("/");
        } catch (error) {
            console.error("Kayıt işlemi başarısız:", error);
            alert("Kayıt işlemi başarısız oldu. Lütfen tekrar deneyin.");
        }
        
    }

    return (
        <div>
            <Header />
            <h1>Kayıt Ol</h1>
            <InputWithLabel label="Kullanıcı Adı" type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <InputWithLabel label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <InputWithLabel label="Şifre" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignup}>Kayıt Ol</button>
            <p>Zaten hesabınız var mı? Giriş yapın.</p> <Link to="/login">Giriş Yap</Link>
        </div>
    );
}

export default Signup;