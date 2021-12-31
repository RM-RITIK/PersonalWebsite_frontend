import http from "../http-common";

class BlogDataService {
    getAll() {
        return http.get("/articles/get-article");
    }
    getArticleById(id) {
        return http.get(`/articles/get-article?articleId=${id}`);
    }
    createNewArticle(data) {
        return http.post("/articles/create-article", data);
    }
}

export default new BlogDataService();