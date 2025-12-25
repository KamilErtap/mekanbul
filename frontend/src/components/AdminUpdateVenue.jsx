import { useState, useEffect } from "react";
import VenueDataService from "../services/VenueDataService";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function AdminUpdateVenue() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const venue = useSelector((state) => state.data);

  const [form, setForm] = useState(null);

  // Venue çek
  useEffect(() => {
    dispatch({ type: "FETCH_INIT" });

    VenueDataService.getVenue(id)
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch(() => {
        dispatch({ type: "FETCH_FAILURE" });
      });
  }, [id, dispatch]);

  // Venue geldikten sonra formu doldur
  useEffect(() => {
    if (venue) {
      setForm({
        name: venue.name || "",
        address: venue.address || "",
        foodanddrink: venue.foodanddrink || [],
        lat: venue.coordinates?.[0] || null,
        long: venue.coordinates?.[1] || null,
        days1: venue.hours?.[0]?.days || "",
        open1: venue.hours?.[0]?.open || "",
        close1: venue.hours?.[0]?.close || "",
        isClosed1: venue.hours?.[0]?.isClosed || false,
        days2: venue.hours?.[1]?.days || "",
        open2: venue.hours?.[1]?.open || "",
        close2: venue.hours?.[1]?.close || "",
        isClosed2: venue.hours?.[1]?.isClosed || false,
      });
    }
  }, [venue]);

  if (!form) {
    return <div>Yükleniyor...</div>;
  }

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
      await VenueDataService.updateVenue(id, form);
      alert("Venue güncellendi 🔥");
      navigate(-1); 
    } catch (err) {
      console.error(err);
      alert("Bir şey ters gitti...");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} />
      <input name="address" value={form.address} onChange={handleChange} />
      <input name="foodanddrink" value={form.foodanddrink} onChange={handleChange} />
      <input name="lat" value={form.lat} onChange={handleChange} />
      <input name="long" value={form.long} onChange={handleChange} />

      <input name="days1" value={form.days1} onChange={handleChange} />
      <input name="open1" value={form.open1} onChange={handleChange} />
      <input name="close1" value={form.close1} onChange={handleChange} />
      <label>
        Kapalı mı?
        <input
          type="checkbox"
          name="isClosed1"
          checked={form.isClosed1}
          onChange={handleChange}
        />
      </label>

      <input name="days2" value={form.days2} onChange={handleChange} />
      <input name="open2" value={form.open2} onChange={handleChange} />
      <input name="close2" value={form.close2} onChange={handleChange} />
      <label>
        Kapalı mı?
        <input
          type="checkbox"
          name="isClosed2"
          checked={form.isClosed2}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Venue Güncelle</button>
    </form>
  );
}

export default AdminUpdateVenue;
