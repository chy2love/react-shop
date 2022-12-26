import React from 'react';
import { Link } from 'react-router-dom';
import * as S from '../styles/Carousel.style';
import { useState } from 'react';
import { useEffect } from 'react';
function Carousel() {
  const [translateIndex, settranslateIndex] = useState(1);

  const carouselItems = [
    {
      id: 1,
      alt: '청바지',
      link: '/fashion',
      title: '물빠진 청바지!',
      description: '지금 막 입고된 패션 아이템을 둘러보세요',
      urlLink:
        'https://www.realmenrealstyle.com/wp-content/uploads/2021/07/mens-jeans.jpg',
    },
    {
      id: 2,
      alt: '디지털',
      link: '/digital',
      title: '신속한 업무처리!',
      description: '다양한 디지털 상품을 둘러보세요',
      urlLink:
        'https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/3383713041/B.jpg?37000000',
    },
    {
      id: 3,
      alt: '마트',
      link: '/mart',
      title: '신선한 식품!',
      description: '농장 직배송되는 상품들을 둘러보세요',
      urlLink:
        'https://img.etnews.com/photonews/2008/1330717_20200824161133_688_0001.jpg',
    },
  ];
  function PaintItem(props) {
    return (
      <S.CarouselItem index={translateIndex}>
        <S.ImgBG>
          <img src={props.carouselItem.urlLink} alt={props.carouselItem.alt} />
        </S.ImgBG>
        <S.CarouselTitle>{props.carouselItem.title}</S.CarouselTitle>
        <S.CarouselDescription>
          {props.carouselItem.description}
        </S.CarouselDescription>
        <S.CarouselLink to={props.carouselItem.link}>바로가기</S.CarouselLink>
      </S.CarouselItem>
    );
  }
  const handleLeftBtn = () => {
    if (translateIndex === 1) {
      settranslateIndex(3);
    } else {
      settranslateIndex(translateIndex - 1);
    }
  };
  const handleRightBtn = () => {
    if (translateIndex === 3) {
      settranslateIndex(1);
    } else {
      settranslateIndex(translateIndex + 1);
    }
  };
  const handleIndicator = (e) => {
    const { id } = e.target;
    if (id === 'indicator-1') {
      settranslateIndex(1);
    } else if (id === 'indicator-2') {
      settranslateIndex(2);
    } else {
      settranslateIndex(3);
    }
  };

  return (
    <S.CarouselBox>
      {/* 캐러셀 버튼 화살표 디자인 css */}
      <S.LeftBtn onClick={handleLeftBtn}>
        <img src="/src/assets/left-arrow.png" alt="left" />
      </S.LeftBtn>
      <S.RightBtn onClick={handleRightBtn}>
        <img src="/src/assets/right-arrow.png" alt="right " />
      </S.RightBtn>
      <S.IndicatorBox>
        {/*indicator */}
        <S.Indicator
          id="indicator-1"
          onClick={handleIndicator}
          index={translateIndex}></S.Indicator>
        <S.Indicator
          id="indicator-2"
          onClick={handleIndicator}
          index={translateIndex}></S.Indicator>
        <S.Indicator
          id="indicator-3"
          onClick={handleIndicator}
          index={translateIndex}></S.Indicator>
      </S.IndicatorBox>
      <S.CarouselItemsContainer>
        {carouselItems.map((item) => {
          return <PaintItem key={item.id} carouselItem={item} />;
        })}
      </S.CarouselItemsContainer>
    </S.CarouselBox>
  );
}

export default Carousel;
