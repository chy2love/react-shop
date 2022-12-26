import React from 'react';
import { Link } from 'react-router-dom';
import fakeApi from '../components/fakeApi';
import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { cartItemCountState, themeState } from '../components/Store';
import * as S from '../styles/CartPage.style';

function CartPage() {
  const [cartItemCount, setCartItemCount] = useRecoilState(cartItemCountState);
  const theme = useRecoilValue(themeState);
  const cartItemsInit = JSON.parse(localStorage.getItem('cartItems')).filter(
    (i) => {
      return i[1] !== 0;
    }
  );
  const [cartItems, setCartItems] = useState(cartItemsInit);
  function handleBuyItems() {
    if (confirm('정말 구매하시겠습니까?') === true) {
      const temp = [];
      fakeApi.forEach((i) => temp.push([i.id, 0]));
      localStorage.setItem('cartItems', JSON.stringify(temp));
      setCartItems([]);
      setCartItemCount(0);
    } else false;
  }

  const cartArr = [];
  for (let item of fakeApi) {
    for (let jtem of cartItems) {
      if (item.id === jtem[0]) {
        cartArr.push([item, jtem[1]]);
      }
    }
  }
  let totalPrice = 0;
  cartArr.forEach((i) => {
    totalPrice += i[0].price * i[1];
  });
  function CartPageItem(item) {
    function handleButtonUp() {
      const tempCart = [];
      cartItems?.forEach((i) => {
        item[0].id === i[0]
          ? tempCart.push([i[0], i[1] + 1])
          : tempCart.push(i);
      });
      const storage = JSON.parse(localStorage.getItem('cartItems'));
      const tempStorage = [];
      storage?.forEach((i) => {
        i[0] !== item[0].id
          ? tempStorage.push(i)
          : tempStorage.push([i[0], i[1] + 1]);
      });
      localStorage.setItem('cartItems', JSON.stringify(tempStorage));
      setCartItems(tempCart);
      setCartItemCount(cartItemCount + 1);
    }
    function handleButtonDown() {
      if (item[1] !== 0) {
        const tempCart = [];
        cartItems?.forEach((i) => {
          item[0].id === i[0]
            ? tempCart.push([i[0], i[1] - 1])
            : tempCart.push(i);
        });
        const storage = JSON.parse(localStorage.getItem('cartItems'));
        const tempStorage = [];
        storage?.forEach((i) => {
          i[0] !== item[0].id
            ? tempStorage.push(i)
            : tempStorage.push([i[0], i[1] - 1]);
        });
        localStorage.setItem('cartItems', JSON.stringify(tempStorage));
        setCartItems(tempCart);
        setCartItemCount(cartItemCount - 1);
      }
    }
    return (
      <S.ItemContainer theme={theme}>
        <S.ImgContainer>
          <img src={item[0].image} alt="" />
        </S.ImgContainer>
        <S.TextContainer theme={theme}>
          <p>{item[0].title}</p>
          <p>${item[0].price * item[1]}</p>
          <S.BtnContainer theme={theme}>
            <button onClick={handleButtonDown}>-</button>
            <p>{item[1]}</p>
            <button onClick={handleButtonUp}>+</button>
          </S.BtnContainer>
        </S.TextContainer>
      </S.ItemContainer>
    );
  }
  return cartItems.length === 0 ? (
    <S.Container theme={theme}>
      <S.NoItem theme={theme}>장바구니에 물품이 없습니다.</S.NoItem>
      <S.GoShop theme={theme} to={'/'}>
        담으러 가기
      </S.GoShop>
    </S.Container>
  ) : (
    <S.CartContainer>
      <div>{cartArr.map((i) => CartPageItem(i))}</div>
      <S.TotalPriceContainer theme={theme}>
        <span>Total: ${totalPrice}</span>
        <button onClick={handleBuyItems}>구매하기</button>
      </S.TotalPriceContainer>
    </S.CartContainer>
  );
}

export default CartPage;
