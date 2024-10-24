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

export interface ISpecie {
    average_height: string;
    average_lifespan: string;
    classification: string;
    created: string;
    designation: string;
    edited: string;
    eye_colors: string;
    hair_colors: string;
    homeworld: number;
    language: string;
    name: string;
    people: number[];
    films: number[];
    skin_colors: string;
    url: string;
}

export interface IStarship {
    MGLT: string;
    cargo_capacity: string;
    consumables: string;
    cost_in_credits: string;
    created: string;
    crew: string;
    edited: string;
    hyperdrive_rating: string;
    length: string;
    manufacturer: string;
    max_atmosphering_speed: string;
    model: string;
    name: string;
    passengers: string;
    films: number[];
    pilots: string[];
    starship_class: string;
    url: string;
}

export interface IFilm {
    characters: number[];
    created: string;
    director: string;
    edited: string;
    episode_id: number;
    opening_crawl: string;
    planets: number[];
    producer: string;
    release_date: string;
    species: number[];
    starships: number[];
    title: string;
    url: string;
    vehicles: number[];
}
