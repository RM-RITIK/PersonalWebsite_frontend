import http from "../http-common"

class ServicesProvidedDataService {
    getAll() {
        return http.get("/services/get-service")
    }
}

export default new ServicesProvidedDataService();