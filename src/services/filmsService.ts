import axios from "axios";
import { API_URL } from "../constants/api";

export async function getFilms(id: number) {
    const {data} = await axios.get(`${API_URL}/films/?characters=${id}`)
    return data
}