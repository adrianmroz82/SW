import { Character } from "../../../models/character.model";
import { Homeworld } from "../../../models/homeworld.model";
import { Vehicle } from "../../../models/vehicle.model";

export const characterMock: Character = {
  name: "Anakin Skywalker",
  height: "188",
  mass: "84",
  hair_color: "blond",
  skin_color: "fair",
  eye_color: "blue",
  birth_year: "41.9BBY",
  gender: "male",
  homeworld: "https://swapi.dev/api/planets/1/",
  films: ["https://swapi.dev/api/films/4/", "https://swapi.dev/api/films/5/", "https://swapi.dev/api/films/6/"],
  species: [],
  vehicles: ["https://swapi.dev/api/vehicles/44/", "https://swapi.dev/api/vehicles/46/"],
  starships: [
    "https://swapi.dev/api/starships/39/",
    "https://swapi.dev/api/starships/59/",
    "https://swapi.dev/api/starships/65/",
  ],
  created: "2014-12-10T16:20:44.310000Z",
  edited: "2014-12-20T21:17:50.327000Z",
  url: "https://swapi.dev/api/people/11/",
};

export const paginatedCharactersMock = {
  results: [
    [
      characterMock,
      {
        name: "Wilhuff Tarkin",
        height: "180",
        mass: "unknown",
        hair_color: "auburn, grey",
        skin_color: "fair",
        eye_color: "blue",
        birth_year: "64BBY",
        gender: "male",
        homeworld: "https://swapi.dev/api/planets/21/",
        films: ["https://swapi.dev/api/films/1/", "https://swapi.dev/api/films/6/"],
        species: [],
        vehicles: [],
        starships: [],
        created: "2014-12-10T16:26:56.138000Z",
        edited: "2014-12-20T21:17:50.330000Z",
        url: "https://swapi.dev/api/people/12/",
      },
      {
        name: "Chewbacca",
        height: "228",
        mass: "112",
        hair_color: "brown",
        skin_color: "unknown",
        eye_color: "blue",
        birth_year: "200BBY",
        gender: "male",
        homeworld: "https://swapi.dev/api/planets/14/",
        films: [
          "https://swapi.dev/api/films/1/",
          "https://swapi.dev/api/films/2/",
          "https://swapi.dev/api/films/3/",
          "https://swapi.dev/api/films/6/",
        ],
        species: ["https://swapi.dev/api/species/3/"],
        vehicles: ["https://swapi.dev/api/vehicles/19/"],
        starships: ["https://swapi.dev/api/starships/10/", "https://swapi.dev/api/starships/22/"],
        created: "2014-12-10T16:42:45.066000Z",
        edited: "2014-12-20T21:17:50.332000Z",
        url: "https://swapi.dev/api/people/13/",
      },
    ],
  ],
  next: "https://swapi.dev/api/people/?page=3",
  previous: "https://swapi.dev/api/people/?page=1",
  count: 82,
};

export const homeworldMock: Homeworld = {
  name: "Tatooine",
  rotation_period: "23",
  orbital_period: "304",
  diameter: "10465",
  climate: "arid",
  gravity: "1 standard",
  terrain: "desert",
  surface_water: "1",
  population: "200000",
  residents: [
    "https://swapi.dev/api/people/1/",
    "https://swapi.dev/api/people/2/",
    "https://swapi.dev/api/people/4/",
    "https://swapi.dev/api/people/6/",
    "https://swapi.dev/api/people/7/",
    "https://swapi.dev/api/people/8/",
    "https://swapi.dev/api/people/9/",
    "https://swapi.dev/api/people/11/",
    "https://swapi.dev/api/people/43/",
    "https://swapi.dev/api/people/62/",
  ],
  films: [
    "https://swapi.dev/api/films/1/",
    "https://swapi.dev/api/films/3/",
    "https://swapi.dev/api/films/4/",
    "https://swapi.dev/api/films/5/",
    "https://swapi.dev/api/films/6/",
  ],
  created: "2014-12-09T13:50:49.641000Z",
  edited: "2014-12-20T20:58:18.411000Z",
  url: "https://swapi.dev/api/planets/1/",
};

export const paginatedHomeworldsMock = {
  count: 82,
  next: "https://swapi.dev/api/people/?page=2",
  previous: null,
  results: [
    [
      homeworldMock,
      {
        name: "Alderaan",
        rotation_period: "24",
        orbital_period: "364",
        diameter: "12500",
        climate: "temperate",
        gravity: "1 standard",
        terrain: "grasslands, mountains",
        surface_water: "40",
        population: "2000000000",
        residents: [
          "https://swapi.dev/api/people/5/",
          "https://swapi.dev/api/people/68/",
          "https://swapi.dev/api/people/81/",
        ],
        films: ["https://swapi.dev/api/films/1/", "https://swapi.dev/api/films/6/"],
        created: "2014-12-10T11:35:48.479000Z",
        edited: "2014-12-20T20:58:18.420000Z",
        url: "https://swapi.dev/api/planets/2/",
      },
      {
        name: "Yavin IV",
        rotation_period: "24",
        orbital_period: "4818",
        diameter: "10200",
        climate: "temperate, tropical",
        gravity: "1 standard",
        terrain: "jungle, rainforests",
        surface_water: "8",
        population: "1000",
        residents: [],
        films: ["https://swapi.dev/api/films/1/"],
        created: "2014-12-10T11:37:19.144000Z",
        edited: "2014-12-20T20:58:18.421000Z",
        url: "https://swapi.dev/api/planets/3/",
      },
    ],
  ],
};

export const vehicleMock: Vehicle = {
  name: "Sand Crawler",
  model: "Digger Crawler",
  manufacturer: "Corellia Mining Corporation",
  cost_in_credits: "150000",
  length: "36.8 ",
  max_atmosphering_speed: "30",
  crew: "46",
  passengers: "30",
  cargo_capacity: "50000",
  consumables: "2 months",
  vehicle_class: "wheeled",
  pilots: [],
  films: ["https://swapi.dev/api/films/1/", "https://swapi.dev/api/films/5/"],
  created: "2014-12-10T15:36:25.724000Z",
  edited: "2014-12-20T21:30:21.661000Z",
  url: "https://swapi.dev/api/vehicles/4/",
};

export const paginatedVehiclesMock = {
  count: 39,
  next: "https://swapi.dev/api/vehicles/?page=2",
  previous: null,
  results: [
    vehicleMock,
    {
      name: "T-16 skyhopper",
      model: "T-16 skyhopper",
      manufacturer: "Incom Corporation",
      cost_in_credits: "14500",
      length: "10.4 ",
      max_atmosphering_speed: "1200",
      crew: "1",
      passengers: "1",
      cargo_capacity: "50",
      consumables: "0",
      vehicle_class: "repulsorcraft",
      pilots: [],
      films: ["https://swapi.dev/api/films/1/"],
      created: "2014-12-10T16:01:52.434000Z",
      edited: "2014-12-20T21:30:21.665000Z",
      url: "https://swapi.dev/api/vehicles/6/",
    },
    {
      name: "X-34 landspeeder",
      model: "X-34 landspeeder",
      manufacturer: "SoroSuub Corporation",
      cost_in_credits: "10550",
      length: "3.4 ",
      max_atmosphering_speed: "250",
      crew: "1",
      passengers: "1",
      cargo_capacity: "5",
      consumables: "unknown",
      vehicle_class: "repulsorcraft",
      pilots: [],
      films: ["https://swapi.dev/api/films/1/"],
      created: "2014-12-10T16:13:52.586000Z",
      edited: "2014-12-20T21:30:21.668000Z",
      url: "https://swapi.dev/api/vehicles/7/",
    },
  ],
};
