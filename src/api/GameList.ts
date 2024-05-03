export interface Game {
  id: number
  name: string
  cover: string
  rating: number
  platform: 'pc' | 'xbox' | 'ps'
  maxOnline?: number
  connection?: 'Internet' | 'LAN'
  offline?: string
  subtitles: string
  dubbing: string
}

export const games: { [key: number]: Game } = {
  1: {
    id: 1,
    name: 'Counter-Strike 2',
    cover: '/images/Counter-strike_2.jpg',
    rating: 4.5,
    platform: 'pc',
    maxOnline: 10,
    connection: 'Internet',
    subtitles: 'Russian',
    dubbing: 'Russian',
  },
  2: {
    id: 2,
    name: 'Elden Ring',
    cover: '/images/ELDEN-RING.jpg',
    rating: 4.7,
    platform: 'xbox',
    maxOnline: 4,
    connection: 'Internet',
    subtitles: 'Russian',
    dubbing: 'English',
  },
  3: {
    id: 3,
    name: "Baldur's Gate 3",
    cover: "/images/Baldur's Gate 3.jpg",
    rating: 4.8,
    platform: 'ps',
    maxOnline: 6,
    connection: 'Internet',
    subtitles: 'English',
    dubbing: 'English',
  },
  4: {
    id: 4,
    name: 'Stardew Valley',
    cover: '/images/stardew-valley.jpg',
    rating: 4.6,
    platform: 'pc',
    offline: 'Single player',
    subtitles: 'Russian',
    dubbing: 'Russian',
  },
  5: {
    id: 5,
    name: 'Tekken 8',
    cover: '/images/TEKKEN 8.jpg',
    rating: 4.9,
    platform: 'xbox',
    maxOnline: 10,
    connection: 'Internet',
    subtitles: 'English',
    dubbing: 'Russian',
  },
  6: {
    id: 6,
    name: 'Goose Goose Duck',
    cover: '/images/Goose Goose Duck.png',
    rating: 4.4,
    platform: 'ps',
    maxOnline: 3,
    connection: 'Internet',
    subtitles: 'Russian',
    dubbing: 'English',
  },
  7: {
    id: 7,
    name: "Marvel's Spider-Man 2",
    cover: "images/Marvel's Spider-Man 2.jpg",
    rating: 4.3,
    platform: 'ps',
    maxOnline: 100,
    connection: 'Internet',
    subtitles: 'Russian',
    dubbing: 'English',
  },
  8: {
    id: 8,
    name: 'battlefield 3',
    cover: 'images/battlefield 3.jpg',
    rating: 4,
    platform: 'xbox' || 'pc' || 'ps',
    maxOnline: 4,
    connection: 'Internet',
    subtitles: 'Russian',
    dubbing: 'Russian',
  },
  9: {
    id: 9,
    name: 'Stellar Blade',
    cover: 'images/Stellar Blade.jpg',
    rating: 4.2,
    platform: 'ps',
    offline: 'Single player',
    subtitles: 'Russian',
    dubbing: 'Russian',
  },
  10: {
    id: 10,
    name: 'Fallout 4',
    cover: 'images/fallout 4.jpg',
    rating: 4.1,
    platform: 'xbox',
    offline: 'Single player',
    subtitles: 'Russian',
    dubbing: 'English',
  },
}