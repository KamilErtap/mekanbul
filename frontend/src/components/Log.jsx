// Gerekli bileşenleri içe aktar
import Header from "./Header"; // Sayfa başlığı bileşeni
import InputWithLabel from "./InputWithLabel";
import axios from "axios"; // HTTP istekleri için axios kütüphanesi
import { useState } from "react";

// Hakkında sayfası bileşeni - Uygulama hakkında bilgi gösterir
function Log() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
        const response = await axios.post("https://mekanbul-beryl.vercel.app/api/signup", {
          email,
          password
        });
        localStorage.setItem("token", response.data.token);
    } catch (error) {
      
    }
  }

  const handleLogin = async () => {
    try {
        const response = await axios.post("https://mekanbul-beryl.vercel.app/api/login", {
          email,
          password
        });
        localStorage.setItem("token", response.data.token);
    } catch (error) {
      
    }
  }

  return (
    <div>
      {/* Sayfa başlığı ve slogan */}
      <Header
        headerText="Log Paneli"
        motto="Giriş işlemlerinizi buradan yapabilirsiniz"
      />
      {/* Admin sayfası içeriği */}
      <InputWithLabel
        id = "e-mail"
        label= "E-posta: "
        type= "text"
        value={email}
        isFocused   
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputWithLabel
        id = "password"
        label= "Şifre: "
        type= "password"
        value={password}
        isFocused    
        onChange={(e) => setPassword(e.target.value)}    
      />
      <button onClick={handleLogin}>Giriş Yap</button> <button onClick={handleSignup}>Kayıt Ol</button>
    </div>
  );
}

// Bileşeni dışa aktar
export default Log;