import React from 'react';
import styled from 'styled-components';
import { themeState } from '../components/Store';
import { useRecoilValue } from 'recoil';
function PageNotFound() {
  const theme = useRecoilValue(themeState);
  return <Container theme={theme}>404 NOT FOUND</Container>;
}
const Container = styled.div`
  padding: 200px 0;
  text-align: center;
  color: ${(props) => (props.theme === 'dark' ? 'ivory' : '#27293a')};
  background-color: ${(props) =>
    props.theme === 'dark' ? '#27293a' : 'white'};
`;
export default PageNotFound;
