export enum Platform {
  PC = 'pc',
  Xbox = 'xbox',
  Ps = 'ps',
}

export interface Game {
  id: number
  name: string
  cover: string
  rating: number
  platform: Platform[]
  maxOnline?: number
  connection?: 'Internet'
  offline?: 'Single player'
  subtitles: string
  dubbing: string
}

export const games: Game[] = [
  {
    id: 1,
    name: 'Counter-Strike 2',
    cover: '/images/Counter-strike_2.jpg',
    rating: 4.5,
    platform: [Platform.PC],
    maxOnline: 10,
    connection: 'Internet',
    subtitles: 'Russian',
    dubbing: 'Russian',
  },
  {
    id: 2,
    name: 'Elden Ring',
    cover: '/images/ELDEN-RING.jpg',
    rating: 4.7,
    platform: [Platform.Xbox],
    maxOnline: 4,
    connection: 'Internet',
    subtitles: 'Russian',
    dubbing: 'English',
  },
  {
    id: 3,
    name: "Baldur's Gate 3",
    cover: "/images/Baldur's Gate 3.jpg",
    rating: 4.8,
    platform: [Platform.Ps],
    maxOnline: 6,
    connection: 'Internet',
    subtitles: 'English',
    dubbing: 'English',
  },
  {
    id: 4,
    name: 'Stardew Valley',
    cover: '/images/stardew-valley.jpg',
    rating: 4.6,
    platform: [Platform.PC],
    offline: 'Single player',
    subtitles: 'Russian',
    dubbing: 'Russian',
  },
  {
    id: 5,
    name: 'Tekken 8',
    cover: '/images/TEKKEN 8.jpg',
    rating: 4.9,
    platform: [Platform.Xbox],
    maxOnline: 10,
    connection: 'Internet',
    subtitles: 'English',
    dubbing: 'Russian',
  },
  {
    id: 6,
    name: 'Goose Goose Duck',
    cover: '/images/Goose Goose Duck.png',
    rating: 4.4,
    platform: [Platform.Ps],
    maxOnline: 3,
    connection: 'Internet',
    subtitles: 'Russian',
    dubbing: 'English',
  },
  {
    id: 7,
    name: "Marvel's Spider-Man 2",
    cover: "images/Marvel's Spider-Man 2.jpg",
    rating: 4.3,
    platform: [Platform.Ps],
    maxOnline: 100,
    connection: 'Internet',
    subtitles: 'Russian',
    dubbing: 'English',
  },
  {
    id: 8,
    name: 'battlefield 3',
    cover: 'images/battlefield 3.jpg',
    rating: 4,
    platform: [Platform.Ps, Platform.PC, Platform.Xbox],
    maxOnline: 4,
    connection: 'Internet',
    subtitles: 'Russian',
    dubbing: 'Russian',
  },
  {
    id: 9,
    name: 'Stellar Blade',
    cover: 'images/Stellar Blade.jpg',
    rating: 4.2,
    platform: [Platform.Ps],
    offline: 'Single player',
    subtitles: 'Russian',
    dubbing: 'Russian',
  },
  {
    id: 10,
    name: 'Fallout 4',
    cover: 'images/fallout 4.jpg',
    rating: 4.1,
    platform: [Platform.Xbox],
    offline: 'Single player',
    subtitles: 'Russian',
    dubbing: 'English',
  },
]
