import http from "../http-common"

class SkillDataService {
    getAll() {
        return http.get("/skill/get-skill");
    }
    addNewSkill(data) {
        return http.post("/skill/add-skill", data)
    }
}

export default new SkillDataService();