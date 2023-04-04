import styled from '@emotion/styled';
import PokeCard from './PokeCard';
import { PokemonListResponseType, fetchPokemons } from '../Service/pokemonService';
import { useEffect, useState } from 'react';

const PokeCardList = () => {
  const [pokemons, setPokemons] = useState<PokemonListResponseType>({
    count: 0,
    next: '',
    results: [],
  });

  useEffect(() => {
    (async () => {
      const pokemons = await fetchPokemons();
      setPokemons(pokemons);
    })();
  }, []);

  return (
    <List>
      {pokemons.results.map((pokemon, index) => {
        return (
          <PokeCard
            key={`${pokemon}_${index}`}
            name={pokemon.name}
          />
        );
      })}
    </List>
  );
};
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 32px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export default PokeCardList;
