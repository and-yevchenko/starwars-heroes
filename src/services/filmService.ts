import instance from './axiosConfig';

export async function getFilm(id: string) {
    const { data } = await instance.get(`/films/?characters=${id}`);
    return data;
}
