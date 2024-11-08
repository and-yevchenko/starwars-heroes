import instance from './axiosConfig';

export async function getHeroes(pageParam: number = 1) {
    const { data } = await instance.get('/people/', {
        params: { page: pageParam }
    });
    return {
        results: data.results,
        nextPage: data.next,
    };
}
