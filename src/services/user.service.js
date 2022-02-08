import http from "../http-common";
import authHeader from "./auth-header";

class UserDataService {
    login(data) {
        return http.post("/user/login", data)
        .then(response => {
            console.log(response.data.response.data);
            if(response.data.response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data.response.data));
            }
            return response.data.response.data;
        });
    }

    logout() {
        localStorage.removeItem("user");
    }

    isUserAdmin() {
        console.log(authHeader());
        return http.post("/user/is-admin",{ headers: authHeader() });
    }

}

export default new UserDataService();