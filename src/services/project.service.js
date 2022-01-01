import http from "../http-common";

class ProjectDataService {
    getAll() {
        return http.get("/project/get-project");
    }
}

export default new ProjectDataService();