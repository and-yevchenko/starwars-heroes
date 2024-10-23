import axios from "axios";
import { API_URL } from "../constants/api";

export async function getHero(id: string) {
    const {data} = await axios.get(`${API_URL}/people/${id}`)
    return data
}