export interface IHero {
    id: number;
    name: string;
    height: string;
    mass: string;
    hairСolor: string;
    skinСolor: string;
    eyeСolor: string;
    birthYear: string;
    gender: string;
    homeworld: number;
    films: number[];
    species: number[];
    vehicles: number[];
    starships: number[];
    created: string;
    edited: string;
    url: string;
}

export interface IPlanet {
    climate: string;
    created: string;
    diameter: string;
    edited: string;
    films: number[];
    gravity: string;
    name: string;
    orbitalPeriod: string;
    population: string;
    residents: number[];
    rotationPeriod: string;
    surfaceWater: string;
    terrain: string;
    url: string;
}

export interface ISpecie {
    averageHeight: string;
    averageLifespan: string;
    classification: string;
    created: string;
    designation: string;
    edited: string;
    eyeColors: string;
    hairColors: string;
    homeworld: number;
    language: string;
    name: string;
    people: number[];
    films: number[];
    skinColors: string;
    url: string;
}

export interface IStarship {
    id: string;
    MGLT: string;
    cargoCapacity: string;
    consumables: string;
    costInCredits: string;
    created: string;
    crew: string;
    edited: string;
    hyperdriveRating: string;
    length: string;
    manufacturer: string;
    maxAtmospheringSpeed: string;
    model: string;
    name: string;
    passengers: string;
    films: number[];
    pilots: string[];
    starshipClass: string;
    url: string;
}

export interface IStarshipResponse {
    results: IStarship[];
}

export interface IFilm {
    id: string;
    characters: number[];
    created: string;
    director: string;
    edited: string;
    episodeId: number;
    openingCrawl: string;
    planets: number[];
    producer: string;
    releaseDate: string;
    species: number[];
    starships: number[];
    title: string;
    url: string;
    vehicles: number[];
}

export interface IFilmsResponse {
    results: IFilm[];
}
