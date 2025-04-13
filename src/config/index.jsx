const {default:axios}=require("axios");

export const BASE_URL="https://linkedin-clone-backend-19dd.onrender.com/";

export const clientServer=axios.create({
    baseURL:BASE_URL
})