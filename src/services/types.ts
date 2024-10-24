export interface IHero {
    id: number;
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
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
    orbital_period: string;
    population: string;
    residents: number[];
    rotation_period: string;
    surface_water: string;
    terrain: string;
    url: string;
}
