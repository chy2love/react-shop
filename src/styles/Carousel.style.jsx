import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const CarouselBox = styled.div`
  padding-top: 40px;
  position: relative;
  height: calc(100vh - 40px);
`;
export const LeftBtn = styled.button`
  position: absolute;
  top: 40vh;
  left: 0;
  height: 100px;
  width: 20px;
  margin: 0%;
  cursor: pointer;
  z-index: 1;
  border: none;
  background-color: transparent;
  img {
    width: 18px;
    height: 18px;
  }
`;
export const RightBtn = styled.button`
  position: absolute;
  height: 100px;
  width: 20px;
  top: 40vh;
  right: 0;
  margin: 0;
  cursor: pointer;
  z-index: 1;
  border: none;
  background-color: transparent;
  padding-right: 25px;
  img {
    width: 18px;
    height: 18px;
  }
`;
export const IndicatorBox = styled.div`
  width: 40px;
  height: 15px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: calc(50vw - 20px);
  bottom: 0;
`;
export const Indicator = styled.p`
  position: relative;
  height: 8px;
  width: 8px;
  background-color: #b0b0b0bd;
  border-radius: 100%;
  margin: 1px;
  z-index: 2;
  cursor: pointer;
  :nth-child(
      ${(props) => {
          return props.index;
        }}
    ) {
    background-color: #fff;
  }
`;

export const CarouselItemsContainer = styled.div`
  display: flex;
  width: 100vw;
  height: calc(100vh - 40px);
  overflow: hidden;
`;
export const CarouselItem = styled.div`
  transform: ${(props) => {
    if (props.index === 1) {
      return 0;
    } else if (props.index === 2) {
      return 'translateX(-100vw)';
    } else {
      return 'translateX(-200vw)';
    }
  }};
  position: relative;
`;
export const ImgBG = styled.div`
  background-color: rgba(0, 0, 0, 0.4);

  img {
    position: relative;
    height: calc(100vh - 40px);
    width: 100vw;
    z-index: -2;
  }
`;
export const CarouselTitle = styled.p`
  position: absolute;
  top: 50px;
  left: 50px;
  color: ivory;
`;
export const CarouselDescription = styled.div`
  position: absolute;
  top: 100px;
  left: 50px;
  color: ivory;
`;
export const CarouselLink = styled(Link)`
  position: absolute;
  top: 150px;
  left: 50px;
  width: 100px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  text-decoration: none;
  border-radius: 20px;
  border: 0.5px solid ivory;
  background-color: rgba(164, 162, 158, 0.5);
  color: ivory;
  cursor: pointer;
  z-index: 5;
`;
