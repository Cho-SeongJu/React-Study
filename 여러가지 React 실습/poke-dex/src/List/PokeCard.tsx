import styled from '@emotion/styled';
import PokeNameChip from '../Common/PokeNameChip';
import PokeMarkChip from '../Common/PokeMarkChip';

const IMAGE_URL = 'https://t1.daumcdn.net/tistoryfile/fs13/30_tistory_2008_12_23_18_01_4950a9072f77f?original';

const PokeCard = () => {
  return (
    <Item>
      <Header>
        <PokeNameChip />
      </Header>
      <Body>
        <Image
          src={IMAGE_URL}
          alt="피카츄 이미지"
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
