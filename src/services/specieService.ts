import axios from "axios";
import { API_URL } from "../constants/api";
import { ISpecie } from "./types";

export async function getSpacie(id: number | null) {
    const {data} = await axios.get<ISpecie>(`${API_URL}/species/${id}`)
    return data
}