// Gerekli bileşenleri içe aktar
import InputWithLabel from "./InputWithLabel"; // Arama kutusu bileşeni
import VenueList from "./VenueList"; // Mekan listesi bileşeni
import Header from "./Header"; // Başlık bileşeni
import React, { useState } from "react"; // React ve state hook'u
import venuesData from "../data/venues.json"; // Mekan verileri (JSON dosyasından)
import { useSelector, useDispatch } from "react-redux";
import VenueDataService from "../services/VenueDataService";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import AdminAddVenue from "./AdminAddVenue";

// Ana sayfa bileşeni
const Admin = () => {

  const INACTIVITY_LIMIT = 10; 
  const [countdown, setCountdown] = useState(INACTIVITY_LIMIT);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const venues = useSelector((state) => state.data);
  const isLoading = useSelector((state => state.isLoading));
  const isError = useSelector((state) => state.isError);
  const isSuccess = useSelector((state) => state.isSuccess);
  const [coordinate, setCoordinate] = React.useState({ lat: 1, long: 1 });

  // Mekan verileri JSON dosyasından alınır (normalde API'den gelecek)
  // Bu sayede veriler tek bir yerde tutulur ve değişiklikler kolaylaşır
  //const venues = venuesData;
  
  // Arama metni için state tanımla
  const [searchVenue, setSearchVenue] = useState("");
  
  // Arama kutusuna yazıldığında çalışan fonksiyon
  const search = (event) => {
    setSearchVenue(event.target.value);
  };
  // Bileşen yüklendiğinde çalışacak (şu an boş)
  // Boş dizi [] = Bu effect sadece bileşen ilk yüklendiğinde 1 kez çalışır
  // Eğer dizi içinde değişken olsaydı, o değişken her değiştiğinde tekrar çalışırdı
  React.useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setCoordinate({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      });
    }
  }, []);

  React.useEffect(() => {
    dispatch({type: "FETCH_INIT"});
    VenueDataService.getAllVenues()
    .then((response) => {
      dispatch({type: "FETCH_SUCCESS", payload: response.data});
    }).catch(() => {
      dispatch({ type: "FETCH_FAILURE"})
    });
  }, [coordinate.lat, coordinate.long]);

  React.useEffect(() => {
  let interval;
  let timeout;

  const resetTimer = () => {
    setCountdown(INACTIVITY_LIMIT);

    if (timeout) clearTimeout(timeout);
    if (interval) clearInterval(interval);

    
    interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    
    timeout = setTimeout(() => {
      navigate("/login");
    }, INACTIVITY_LIMIT * 1000);
  };

  
  resetTimer();

  
  window.addEventListener("mousemove", resetTimer);
  window.addEventListener("keydown", resetTimer);
  window.addEventListener("click", resetTimer);

  return () => {
    clearTimeout(timeout);
    clearInterval(interval);
    window.removeEventListener("mousemove", resetTimer);
    window.removeEventListener("keydown", resetTimer);
    window.removeEventListener("click", resetTimer);
  };
}, [navigate]);


  // Mekanları arama metnine göre filtrele
  // Mekan adı, arama metnini içeriyorsa listede göster
  const filteredVenues = Array.isArray(venues) ? venues.filter(
    (venue) => 
      
      venue.name.toLowerCase().includes(searchVenue.toLowerCase()) ||
      venue.address.toLowerCase().includes(searchVenue.toLowerCase())
  ) : [];
  
    const token = localStorage.getItem("token");
    const user = jwtDecode(token);
    if (user.role !== "admin") {
      navigate("/login"); 
      return;
    }
  
  return (
    <div>
      {/* Sayfa başlığı ve slogan */}
      <Header
        headerText="Mekanbul Admin Paneli"
        motto={countdown > 0 ? `Otomatik çıkış için kalan süre: ${countdown} saniye` : "Otomatik çıkış yapıldı."}
      />
      
      {/* Arama kutusu */}
      <InputWithLabel
        id="arama"
        label="Mekan Ara:"
        type="text"
        isFocused
        onInputChange={search}
        value={searchVenue}
      />
      
      <hr />
      
      {/* Mekan listesi */}
      <div className="row">
      {isError ? (
        <p>
          <strong>Birşeyler ters gitti...</strong>
        </p>
      ) : isLoading ? (
        <p>
          <strong>Mekanlar yükleniyor...</strong>
        </p>
      ) : (
        isSuccess && (
          <div className="row">
          <p></p>
          <AdminAddVenue />
          <p></p>
          {/* Filtrelenmiş mekanları listele */}
          <VenueList venues={filteredVenues} />
          </div>
          
        )
      )}
      </div>    
    </div>
  );
};

// Bileşeni dışa aktar
export default Admin;
