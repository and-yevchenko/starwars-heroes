import instance from './axiosConfig';

export async function getFilm(id: string) {
    const { data } = await instance.get('/films/', {
        params: { characters: id },
    });

    return data;
}
