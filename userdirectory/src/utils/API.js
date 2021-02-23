import axios from "axios";

export default {
    getUsers: () => {
        return axios.get("https://randomuser.me/api/?results=280&nat=us");
    }
};