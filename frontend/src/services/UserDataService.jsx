import http from "./http-common";

class UserDataService {
  // Yeni kullanıcı kaydı oluşturma
  // data: { name, email, password }
  signup(data) {
   
    return http.post("/signup", data);
  }
}
  export default new UserDataService();