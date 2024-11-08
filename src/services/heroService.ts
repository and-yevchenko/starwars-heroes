import { IHero } from './types';
import instance from './axiosConfig';

export async function getHero(id: string) {
    const { data } = await instance.get<IHero>(`/people/${id}`);
    return data;
}
