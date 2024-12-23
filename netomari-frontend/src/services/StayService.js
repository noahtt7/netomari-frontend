import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/uniquestays/getall'

export const listStays = () => {
    return axios.get(REST_API_BASE_URL);
}