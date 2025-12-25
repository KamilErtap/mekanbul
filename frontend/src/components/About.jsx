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
        Ben yaptim sayılır.
      </p>

      <img src={benFoto} width={200} height={200} alt="literly me"></img>
    </div>
  );
}

// Bileşeni dışa aktar
export default About;
