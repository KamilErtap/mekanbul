import Header from "./Header"; // Sayfa başlığı bileşeni
import {useNavigate} from 'react-router-dom'; // Yönlendirme için

function User() {
    const nav = useNavigate();
    
  return (
    <div>
        <Header />
      <div >
        <button onClick={() => nav('/login')}>Giriş Yap</button> <button onClick={() => nav('/register')}>Kayıt Ol</button>
      </div>
    </div>
  );
}

// Bileşeni dışa aktar
export default User;
