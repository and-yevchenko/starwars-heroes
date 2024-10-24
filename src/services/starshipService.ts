import axios from 'axios';
import { API_URL } from '../constants/api';
import { IStarship } from './types';

export async function getStarship(id: number | null) {
    const { data } = await axios.get<IStarship>(`${API_URL}/starships/${id}`);
    return data;
}
