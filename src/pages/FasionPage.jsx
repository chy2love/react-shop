import React from 'react';
import Thumbnail from '../components/Thumbnail';
import fakeApi from '../components/fakeApi';
import styled from 'styled-components';
import { themeState } from '../components/Store';
import { useRecoilValue } from 'recoil';
function FasionPage(props) {
  const theme = useRecoilValue(themeState);
  const fashionArr = props.Api.filter((i) => {
    return i.category === "men's clothing" || i.category === "women's clothing"
      ? true
      : false;
  });
  return (
    <Container theme={theme}>
      <Text theme={theme}>패션</Text>
      <ThumbnailContainer>
        {fashionArr.map((item) => {
          return <Thumbnail key={item.id} item={item} />;
        })}
      </ThumbnailContainer>
    </Container>
  );
}
const Text = styled.p`
  margin-top: 50px;
  font-weight: 700;
  color: ${(props) => (props.theme === 'dark' ? 'ivory' : '#27293a')};
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.theme === 'dark' ? '#5e5f6e' : 'whitesmoke'};
`;
const ThumbnailContainer = styled.div`
  display: flex;
  width: 90%;
  flex-wrap: wrap;
`;
export default FasionPage;
