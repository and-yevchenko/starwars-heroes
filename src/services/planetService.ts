import axios from "axios";
import { API_URL } from "../constants/api";
import { IPlanet } from "./types";

export async function getPlanet(id: number | null) {
    const {data} = await axios.get<IPlanet>(`${API_URL}/planets/${id}`)
    return data
}