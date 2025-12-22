import Header from "./Header"; // Sayfa başlığı bileşeni

function User() {
  return (
    <div>
        <Header />
      <div>
        <button>Giriş Yap</button> <button>Kayıt Ol</button>
      </div>
    </div>
  );
}

// Bileşeni dışa aktar
export default User;
