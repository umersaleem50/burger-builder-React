import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://burger-builder-react-9edf4-default-rtdb.asia-southeast1.firebasedatabase.app/",
});

export default instance;
