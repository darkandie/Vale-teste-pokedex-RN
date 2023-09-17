import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { type PokemonList } from '../../types/PokemonList';
import { type Pokemon } from '../../types/Pokemon';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    getAllPokemons: builder.query<PokemonList, void>({
      query: () => 'pokemon',
    }),
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})

export const { useGetAllPokemonsQuery, useGetPokemonByNameQuery  } = pokemonApi;