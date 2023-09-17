import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { type PokemonList } from '../../types/PokemonList';
import { type Pokemon } from '../../types/Pokemon';
import { type Characteristic } from '../../types/Characteristic';

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
    getPokemonCharacteristics : builder.query<Characteristic, number | undefined>({
      query: (id) => `characteristic/${id}`,
    }),
  }),
})

export const { 
  useGetAllPokemonsQuery, 
  useGetPokemonByNameQuery,
  useGetPokemonCharacteristicsQuery
} = pokemonApi;