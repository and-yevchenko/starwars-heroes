import axios from "axios";
import { API_URL } from "../constants/api";
import { IFilm } from "./types";

export async function getFilm(id: number | null) {
    const {data} = await axios.get<IFilm>(`${API_URL}/films/${id}`)
    return data
}