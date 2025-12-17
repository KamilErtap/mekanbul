// Gerekli bileşenleri içe aktar
import Header from "./Header"; // Sayfa başlığı bileşeni

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

      <img src="../imgs/ben.jpg" alt="literaly ben"></img>
    </div>
  );
}

// Bileşeni dışa aktar
export default About;
