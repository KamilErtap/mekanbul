import http from "./http-common";

class UserDataService {
  // Yeni kullanıcı kaydı oluşturma
  // data: { name, email, password }
  signup(name, email, password) {
    return http.post("/signup", {
        name,
        email,
        password,
    });
  }
}

  export default new UserDataService();