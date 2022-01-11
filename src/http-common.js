import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:1337/api",
  //baseURL: "https://stark-lowlands-42577.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});