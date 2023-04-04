import styled from '@emotion/styled';
import PokeNameChip from '../Common/PokeNameChip';
import PokeMarkChip from '../Common/PokeMarkChip';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PokemonDetailType, fetchPokemonDetail } from '../Service/pokemonService';

const IMAGE_URL = 'https://t1.daumcdn.net/tistoryfile/fs13/30_tistory_2008_12_23_18_01_4950a9072f77f?original';

interface PokeCardProps {
  name: string;
}

const PokeCard = (props: PokeCardProps) => {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState<PokemonDetailType | null>(null);

  const handleClick = () => {
    navigate(`/pokemon/${props.name}`);
  };

  useEffect(() => {
    (async () => {
      const detail = await fetchPokemonDetail(props.name);
      setPokemon(detail);
    })();
  }, [props.name]);

  if (!pokemon) {
    return null; // TODO : 화면이 로딩중일 때 표시
  }

  return (
    <Item onClick={handleClick}>
      <Header>
        <PokeNameChip
          name={pokemon.name}
          id={pokemon.id}
        />
      </Header>
      <Body>
        <Image
          src={pokemon.images.dreamWorldFront}
          alt={pokemon.name}
        />
      </Body>
      <Footer>
        <PokeMarkChip />
      </Footer>
    </Item>
  );
};

const Item = styled.li`
  display: flex;
  flex-direction: column;

  padding: 8px;

  width: 250px;
  height: 300px;

  border: 1px solid #c0c0c0;
  box-shadow: 0 1px 3px 1px #c0c0c0;

  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    background-color: yellow;
    opacity: 0.8;
    transition: background-color 0s;
  }
`;

const Header = styled.section`
  display: flex;
  flex-direction: row;
  margin: 8px 0;
`;

const Body = styled.section`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  margin: 8px 0;
`;

const Image = styled.img`
  width: 180px;
  height: 180px;
`;

const Footer = styled.section`
  display: flex;
  flex-direction: row;
  margin: 8px 0;
`;

export default PokeCard;
