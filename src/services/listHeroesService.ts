import axios from 'axios';
import { API_URL } from '../constants/api';

export async function getHeroes(pageParam: number = 1) {
    const { data } = await axios.get(`${API_URL}/people/?page=${pageParam}`);
    return {
        results: data.results,
        nextPage: data.next,
    };
}
