import { IPlanet } from './types';
import instance from './axiosConfig';

export async function getPlanet(id: number | null) {
    const { data } = await instance.get<IPlanet>(`/planets/${id}`);
    return data;
}
