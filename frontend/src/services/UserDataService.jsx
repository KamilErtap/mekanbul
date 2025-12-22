import http from "./http-common";

class UserDataService {
  // Yeni kullanıcı kaydı oluşturma
  // data: { name, email, password }
  signup(name, email, password) {
    const formData = new URLSearchParams();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    return http.post("/signup", formData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
  }
}
  export default new UserDataService();