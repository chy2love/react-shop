import React from 'react';
import * as S from '../styles/Footer.style';
import { useRecoilValue } from 'recoil';
import { themeState } from './Store';
function Footer() {
  const theme = useRecoilValue(themeState);
  return (
    <S.Container theme={theme}>
      <p>제로베이스 Copyright &copy; 2022 </p>
      <S.CardContainer>
        <img src="/src/assets/visa.png" alt="" />
        <img src="/src/assets/mastercard.png" alt="" />
      </S.CardContainer>
      <S.LinkContainer>
        <a
          href="https://www.facebook.com/0base"
          target="_blank"
          rel="noopener noreferrer">
          <img src="/src/assets/facebook.png" alt="" />
        </a>
        <a
          href="https://www.instagram.com/zerobase.official/"
          target="_blank"
          rel="noopener noreferrer">
          <img src="/src/assets/instagram.jpg" alt="" />
        </a>
      </S.LinkContainer>
    </S.Container>
  );
}

export default Footer;
