import axios from "axios";
import { API_URL } from "../constants/api";

export async function getHeroes(page: number) {
    const {data} = await axios.get(`${API_URL}/people/?page=${page}`)
    return data
}