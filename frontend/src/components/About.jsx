// Gerekli bileşenleri içe aktar
import Header from "./Header"; // Sayfa başlığı bileşeni
import benFoto from "../imgs/ben.jpg";

// Hakkında sayfası bileşeni - Uygulama hakkında bilgi gösterir
function About() {
  return (
    <div>
      {/* Sayfa başlığı ve slogan */}
      <Header
        headerText="Mekanbul"
        motto="ReactJS Single Page Application (SPA)"
      />
      <p>
        Ben yaptim
      </p>

      <img src={benFoto} alt="literaly ben" width={50} height={50}></img>
    </div>
  );
}

// Bileşeni dışa aktar
export default About;
