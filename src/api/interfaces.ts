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
  connection: 'Internet' | 'Single player'
  subtitlesLang: string
  dubbingLang: string
}

// SERVER DATA (MOCKAPI):
// [
//   {
//     "id": 1,
//     "name": "Counter-Strike 2",
//     "cover": "https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg?t=1698860631",
//     "rating": 4.5,
//     "platform": [
//       "pc"
//     ],
//     "maxPlayers": 10,
//     "isConnection": true,
//     "subtitlesLang": "russian",
//     "dubbingLang": "Russian"
//   },
//   {
//     "id": 2,
//     "name": "Elden Ring",
//     "cover": "https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg?t=1710261394",
//     "rating": 4.7,
//     "platform": [
//       "xbox"
//     ],
//     "maxPlayers": 4,
//     "isConnection": true,
//     "subtitlesLang": "russian",
//     "dubbingLang": "English"
//   },
//   {
//     "id": 3,
//     "name": "Baldur's Gate 3",
//     "cover": "https://cdn.akamai.steamstatic.com/steam/apps/1086940/header.jpg?t=1713271288",
//     "rating": 4.8,
//     "platform": [
//       "ps"
//     ],
//     "maxPlayers": 6,
//     "isConnection": true,
//     "subtitlesLang": "english",
//     "dubbingLang": "English"
//   },
//   {
//     "id": 4,
//     "name": "Stardew Valley",
//     "cover": "https://cdn.akamai.steamstatic.com/steam/apps/413150/header.jpg?t=1711128146",
//     "rating": 4.6,
//     "platform": [
//       "pc"
//     ],
//     "isConnection": false,
//     "subtitlesLang": "russian",
//     "dubbingLang": "Russian"
//   },
//   {
//     "id": 5,
//     "name": "Tekken 8",
//     "cover": "https://cdn.akamai.steamstatic.com/steam/apps/1778820/header.jpg?t=1714140367",
//     "rating": 4.9,
//     "platform": [
//       "xbox"
//     ],
//     "maxPlayers": 10,
//     "isConnection": true,
//     "subtitlesLang": "english",
//     "dubbingLang": "Russian"
//   },
//   {
//     "id": 6,
//     "name": "Goose Goose Duck",
//     "cover": "https://cdn.akamai.steamstatic.com/steam/apps/1568590/header.jpg?t=1712094136",
//     "rating": 4.4,
//     "platform": [
//       "ps"
//     ],
//     "maxPlayers": 3,
//     "isConnection": true,
//     "subtitlesLang": "russian",
//     "dubbingLang": "English"
//   },
//   {
//     "id": 7,
//     "name": "Hades",
//     "cover": "https://cdn.akamai.steamstatic.com/steam/apps/1145360/header.jpg?t=1702510146",
//     "rating": 4.3,
//     "platform": [
//       "ps"
//     ],
//     "maxPlayers": 11,
//     "isConnection": true,
//     "subtitlesLang": "russian",
//     "dubbingLang": "English"
//   },
//   {
//     "id": 8,
//     "name": "battlefield V",
//     "cover": "https://cdn.akamai.steamstatic.com/steam/apps/1238810/header.jpg?t=1701356409",
//     "rating": 4,
//     "platform": [
//       "ps",
//       "pc",
//       "xbox"
//     ],
//     "maxPlayers": 100,
//     "isConnection": true,
//     "subtitlesLang": "russian",
//     "dubbingLang": "Russian"
//   },
//   {
//     "id": 9,
//     "name": "Enshrouded",
//     "cover": "https://cdn.akamai.steamstatic.com/steam/apps/1203620/header.jpg?t=1713953283",
//     "rating": 4.2,
//     "platform": [
//       "ps"
//     ],
//     "isConnection": false,
//     "subtitlesLang": "russian",
//     "dubbingLang": "Russian"
//   },
//   {
//     "id": 10,
//     "name": "Manor Lords",
//     "cover": "https://cdn.akamai.steamstatic.com/steam/apps/1363080/header.jpg?t=1714481932",
//     "rating": 4.1,
//     "platform": [
//       "xbox"
//     ],
//     "isConnection": false,
//     "subtitlesLang": "russian",
//     "dubbingLang": "English"
//   }
// ]
