import http from "../http-common";

class ContactDataService {
    saveContact(data) {
        return http.post("/contact/save-contact", data);
    }
}

export default new ContactDataService();