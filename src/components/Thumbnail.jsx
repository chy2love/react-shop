import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { themeState } from './Store';
import themes from 'daisyui/src/colors/themes';
function Thumbnail(prop) {
  const theme = useRecoilValue(themeState);
  return (
    <Container to={`/product/${prop.item.id}`} theme={theme}>
      <Img src={prop.item.image} alt="" />

      <TextContainer theme={theme}>
        <Text theme={theme}>{prop.item.title}</Text>
        <Text theme={theme}>${prop.item.price}</Text>
      </TextContainer>
    </Container>
  );
}
const Container = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 250px;
  background-color: #fff;
  border-radius: 30px;
  margin: 20px 20px;
  overflow: hidden;
`;

const Img = styled.img`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -50px;
  left: 0;
  right: 0;
  bottom: 0;
  width: 40%;
  margin: auto;
`;
const TextContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  top: 75%;
  left: 0;
  right: 0;
  background-color: ${(props) =>
    props.theme === 'dark' ? '#3d3f51' : 'ivory'};
  height: 25%;
  overflow-y: hidden;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 0 15px;
`;
const Text = styled.p`
  color: ${(props) => (props.theme === 'dark' ? 'ivory' : '#3d3f51')};
  height: 35px;
  line-height: 12px;
  align-items: center;
  overflow: hidden;
  font-size: 0.1rem;
  margin-top: 5px;
`;
export default Thumbnail;
