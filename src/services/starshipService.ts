import axios from 'axios';
import { API_URL } from '../constants/api';

export async function getStarship(id: string) {
    const { data } = await axios.get(`${API_URL}/starships/?pilots=${id}`);
    return data;
}
