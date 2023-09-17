export interface Pokemon {
  name: string;
  id: number;
  weight: number,
  height: number,
  moves: Array<{move: {name: string, url: string}}>,
  stats: Array<{base_stat: number, effort: number }>,
  sprites: {
    front_default: string;
    other: {
      ['official-artwork']: {
        front_default: string;
      }
    }
  }
  types: Array<{type: {name: string, url: string}}>,
}