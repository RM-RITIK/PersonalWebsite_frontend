import http from "../http-common"

class ExperienceDataService {
    getAll() {
        return http.get("/experience/get-experience");
    }
    addNewExperience(data) {
        return http.post("/experience/add-experience");
    }
}

export default new ExperienceDataService();