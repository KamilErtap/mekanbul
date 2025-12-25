import { jwtDecode } from "jwt-decode";
import VenueDataService from "../services/VenueDataService";
import AdminUpdateVenue from "./AdminUpdateVenue";

function IsAdmin({id}) {
    const token = localStorage.getItem("token");
        const user = jwtDecode(token);
        if (user.role !== "admin") {
          return (<></>);
        }
        return (
        <div>
        <button onClick={() =>VenueDataService.deleteVenue(id).then(() => window.location.reload())}>Mekan Sil</button>
        <AdminUpdateVenue />
        </div>
        );
    
  };

export default IsAdmin;