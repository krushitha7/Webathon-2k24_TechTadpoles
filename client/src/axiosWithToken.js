import axios from "axios";

let token=localStorage.getItem('token')
export const axiosWithToken=axios.create({
    headers:{Authorization:`Bearer ${token}`}
})