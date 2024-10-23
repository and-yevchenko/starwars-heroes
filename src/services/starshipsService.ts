import axios from "axios";
import { API_URL } from "../constants/api";

export async function getStarships(id: number) {
    const {data} = await axios.get(`${API_URL}/starships/?pilots=${id}`)
    return data
}