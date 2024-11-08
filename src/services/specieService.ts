import { ISpecie } from './types';
import instance from './axiosConfig';

export async function getSpacie(id: number | null) {
    const { data } = await instance.get<ISpecie>(`/species/${id}`);
    return data;
}
