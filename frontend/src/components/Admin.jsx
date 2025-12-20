// Gerekli bileşenleri içe aktar
import Header from "./Header"; // Sayfa başlığı bileşeni
import InputWithLabel from "./InputWithLabel";

// Hakkında sayfası bileşeni - Uygulama hakkında bilgi gösterir
function Admin() {
  return (
    <div>
      {/* Sayfa başlığı ve slogan */}
      <Header
        headerText="Admin Paneli"
        motto="Yönetim işlemlerinizi buradan yapabilirsiniz"
      />
      {/* Admin sayfası içeriği */}
      <InputWithLabel
        id = "e-mail"
        label= "E-posta: "
        type= "text"
        isFocused        
      />
      <InputWithLabel
        id = "password"
        label= "Şifre: "
        type= "password"
        isFocused        
      />
    </div>
  );
}

// Bileşeni dışa aktar
export default Admin;