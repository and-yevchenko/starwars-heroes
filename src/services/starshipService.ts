import instance from './axiosConfig';

export async function getStarship(id: string) {
    const { data } = await instance.get('/starships/', {
        params: { pilots: id }
    });
    return data;
}
