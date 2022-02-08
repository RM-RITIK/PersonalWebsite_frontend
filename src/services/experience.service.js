import http from "../http-common"

class ExperienceDataService {
    getAll() {
        return http.get("/experience/get-experience");
    }
    addNewExperience(data) {
        return http.post("/experience/add-experience", data);
    }
}

export default new ExperienceDataService();