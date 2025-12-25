import { useState } from "react";
import axios from "axios";
import VenueDataService from "../services/VenueDataService";

function AdminAddVenue() {
  const [form, setForm] = useState({
    name: "",
    address: "",
    foodanddrink: "",
    lat: "",
    long: "",
    days1: "",
    open1: "",
    close1: "",
    isClosed1: false,
    days2: "",
    open2: "",
    close2: "",
    isClosed2: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await 
      VenueDataService.addVenue(form, localStorage.getItem("token"));
      alert("Venue eklendi 🔥");
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert("Bir şey ters gitti...");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <p></p>
      <input name="address" placeholder="Address" onChange={handleChange} />
      <p></p>
      <input name="foodanddrink" placeholder="Food/Drink" onChange={handleChange} />
      <p></p>
      <input name="lat" placeholder="Lat" onChange={handleChange} />
      <p></p>
      <input name="long" placeholder="Long" onChange={handleChange} />
      <p></p>

      <input name="days1" placeholder="Days 1" onChange={handleChange} />
      <p></p>
      <input name="open1" placeholder="Open 1" onChange={handleChange} />
      <p></p>
      <input name="close1" placeholder="Close 1" onChange={handleChange} />
      <p></p>
      <label>
        Kapalı mı?
        <input type="checkbox" name="isClosed1" onChange={handleChange} />
      </label>
      <p></p>
      <input name="days2" placeholder="Days 2" onChange={handleChange} />
      <p></p>
      <input name="open2" placeholder="Open 2" onChange={handleChange} />
      <p></p>
      <input name="close2" placeholder="Close 2" onChange={handleChange} />
      <p></p>
      <label>
        Kapalı mı?
        <input type="checkbox" name="isClosed2" onChange={handleChange} />
      </label>
      <p></p>
      <button type="submit">Venue Ekle</button>
    </form>
  );
}

export default AdminAddVenue;
