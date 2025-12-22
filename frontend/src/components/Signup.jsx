import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import Header from "./Header";
import UserDataService from "../services/UserDataService";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const response = await UserDataService.signup(
        name,
        email,
        password
      );

      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Kayıt işlemi başarısız oldu");
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
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <InputWithLabel
        label="Şifre"
        type="password"
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
