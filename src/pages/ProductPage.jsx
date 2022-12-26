import React from 'react';
import { useParams } from 'react-router-dom';
import fakeApi from '../components/fakeApi';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useEffect } from 'react';
import * as S from '../styles/ProductPage.style';
import { themeState, cartItemCountState } from '../components/Store';
function ProductPage() {
  const theme = useRecoilValue(themeState);
  const [cartItemCount, setCartItemCount] = useRecoilState(cartItemCountState);
  const params = useParams();
  if (!localStorage.getItem('cartItems')) {
    const temp = [];
    fakeApi.forEach((i) => temp.push([i.id, 0]));
    localStorage.setItem('cartItems', JSON.stringify(temp));
  }
  const item = fakeApi.filter((i) => {
    return i.id === Number(params.id);
  })[0];
  const category =
    item?.category === "men's clothing" || item?.category === "women's clothing"
      ? '패션'
      : item?.category === 'jewelery'
      ? '악세서리'
      : '디지털';
  function handleAddCart() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    cartItems[params.id - 1][1] += 1;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    let cartItemCount = 0;
    JSON.parse(localStorage.getItem('cartItems')).forEach((i) => {
      cartItemCount += i[1];
    });
    setCartItemCount(cartItemCount);
  }
  return (
    <S.Container theme={theme}>
      <S.Title theme={theme}>
        <span>{category} &rarr;</span>

        <span>{item?.title}</span>
      </S.Title>
      <S.ContentContainer>
        <S.ImgContainer>
          <img src={item?.image} alt="" />
        </S.ImgContainer>
        <S.DescriptionContainer theme={theme}>
          <p>{item?.title}</p>
          <p>{item?.description}</p>
          <p>
            {item?.rating.rate} / {item?.rating.count}명 참여
          </p>
          <p>${item?.price}</p>
          <S.ButtonContainer>
            <button onClick={handleAddCart} style={{ cursor: 'pointer' }}>
              장바구니에 담기
            </button>
            <S.CartLink theme={theme} to={'/cart'}>
              장바구니로 이동
            </S.CartLink>
          </S.ButtonContainer>
        </S.DescriptionContainer>
      </S.ContentContainer>
    </S.Container>
  );
}

export default ProductPage;
