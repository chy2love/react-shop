import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useEffect } from 'react';
import { themeState, cartItemCountState } from './Store';
import * as S from '../styles/NavigationBar.style';
import { useState } from 'react';
import fakeApi from './fakeApi';
function NavigationBar() {
  const [theme, setTheme] = useRecoilState(themeState);
  const [searchBar, setSearchBar] = useState('');
  const [matchArr, setMatchArr] = useState([]);
  const [inputFoucs, setInputFoucs] = useState(false);
  const [onInput, setOnInput] = useState(false);
  // let cartItemCount = 0;
  // JSON.parse(localStorage.getItem('cartItems')).forEach((i) => {
  //   cartItemCount += i[1];
  // });
  const [cartItemCount, setCartItemCount] = useRecoilState(cartItemCountState);
  useEffect(() => {
    let cartItemCountTemp = 0;
    JSON.parse(localStorage.getItem('cartItems'))?.forEach((i) => {
      cartItemCountTemp += i[1];
    });
    setCartItemCount(cartItemCountTemp);
  }, []);
  const handleChangeTheme = (e) => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };
  const handleChange = (e) => {
    setSearchBar(e.target.value);
  };

  useEffect(() => {
    if (searchBar.length !== 0) {
      makeMatchArr();
    } else {
      setMatchArr([]);
    }
  }, [searchBar]);
  const makeMatchArr = () => {
    const tempMatchArr = fakeApi.filter((item) => {
      return item?.title.toLowerCase().includes(searchBar?.toLowerCase());
    });
    setMatchArr(tempMatchArr);
  };

  return (
    <S.Container theme={theme}>
      <S.LeftColumn>
        <S.LinkContainer theme={theme}>
          <S.LinkTag theme={theme} to={'/'}>
            React Shop
          </S.LinkTag>
        </S.LinkContainer>
        <S.LinkContainer>
          <S.LinkTag theme={theme} to={'/fashion'}>
            패션
          </S.LinkTag>
        </S.LinkContainer>
        <S.LinkContainer>
          <S.LinkTag theme={theme} to={'/accessories'}>
            악세서리
          </S.LinkTag>
        </S.LinkContainer>
        <S.LinkContainer>
          <S.LinkTag theme={theme} to={'/digital'}>
            디지털
          </S.LinkTag>
        </S.LinkContainer>
      </S.LeftColumn>
      <S.RightColumn theme={theme}>
        <img
          src={
            theme === 'dark'
              ? '/src/assets/night-mode.png'
              : '/src/assets/sun.png'
          }
          onClick={handleChangeTheme}
        />

        <S.InputContainer>
          <S.InputBar
            theme={theme}
            type="text"
            placeholder="상품을 검색하세요!"
            onChange={handleChange}
            value={searchBar}
            onMouseLeave={() => {
              setOnInput(false);
            }}
            onFocus={() => {
              setOnInput(true);
              setInputFoucs(true);
            }}
            onBlur={() => (onInput ? null : setInputFoucs(false))}
          />
          {inputFoucs ? (
            <S.SearchItemContainer
              onMouseLeave={(e) => {
                e.stopPropagation();
                setOnInput(false);
              }}
              onMouseEnter={(e) => {
                e.stopPropagation();
                setOnInput(true);
              }}
              theme={theme}>
              {matchArr.length !== 0
                ? matchArr.map((item) => {
                    return (
                      <S.SearchItem
                        theme={theme}
                        key={item.id}
                        to={`product/${item.id}`}
                        onClick={() => {
                          setSearchBar('');
                          setInputFoucs(false);
                        }}>
                        {item.title}
                      </S.SearchItem>
                    );
                  })
                : null}
            </S.SearchItemContainer>
          ) : null}
        </S.InputContainer>
        <S.CartContainer to={'/cart'}>
          <img src="/src/assets/shopping-cart.png" alt="" />
          <p>{cartItemCount}</p>
        </S.CartContainer>
      </S.RightColumn>
    </S.Container>
  );
}

export default NavigationBar;
