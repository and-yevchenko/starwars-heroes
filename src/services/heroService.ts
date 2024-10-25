import axios from 'axios';
import { API_URL } from '../constants/api';
import { IHero } from './types';

export async function getHero(id: string) {
    const { data } = await axios.get<IHero>(`${API_URL}/people/${id}`);
    return data;
}
