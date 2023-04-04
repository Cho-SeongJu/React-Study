import styled from '@emotion/styled';

const PokeNameChip = () => {
  return (
    <Chip>
      <Number>001</Number>
      <Text>이상해씨</Text>
    </Chip>
  );
};

const Chip = styled.div`
  display: flex;

  border: 1px solid #c0c0c0;
  border-radius: 16px;

  font-size: 16px;
  font-weight: bold;
  box-shadow: 0.5px 0.5px 0 0 #c0c0c0;
`;

const Number = styled.div`
  border: 1px solid #c0c0c0;
  border-top: none;
  border-bottom: none;
  border-left: none;
  border-radius: 16px;
  padding: 4px 6px;

  background-color: green;
  opacity: 0.8;
`;

const Text = styled.label`
  padding: 4px 6px;
`;

export default PokeNameChip;
