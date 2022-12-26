import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  padding-left: 50px;
  padding-bottom: 100px;
  background-color: ${(props) =>
    props.theme === 'dark' ? '#27293a' : 'white'};
`;
export const GoShop = styled(Link)`
  text-decoration: none;
  width: 100px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 5px;
  color: ${(props) => (props.theme === 'dark' ? 'ivory' : '#27293a')};
  background-color: ${(props) =>
    props.theme === 'dark' ? '#5353adb8;' : 'beige'};
  font-size: small;
  margin-bottom: 60px;
`;
export const NoItem = styled.p`
  color: ${(props) => (props.theme === 'dark' ? 'ivory' : '#27293a')};
  margin-bottom: 40px;
`;
export const ImgContainer = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 70px;
  }
`;
export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 60px;
  padding-left: 70px;
  padding-bottom: 20px;
  background-color: ${(props) =>
    props.theme === 'dark' ? '#27293a' : 'white'};
`;
export const TextContainer = styled.div`
  padding-left: 50px;
  padding-right: 100px;
  p {
    color: ${(props) => (props.theme === 'dark' ? 'ivory' : '#27293a')};
    font-size: small;
  }
  p:first-child {
    width: 350px;
  }
`;
export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  p {
    color: ${(props) => (props.theme === 'dark' ? 'ivory' : '#27293a')};
  }
  button {
    margin: 0 10px;
    width: 30px;
    height: 30px;
    line-height: 20px;
    text-align: center;
    background-color: transparent;
    border-radius: 5px;
    color: ${(props) => (props.theme === 'dark' ? 'ivory' : '#27293a')};
    border: 1px solid
      ${(props) => (props.theme === 'dark' ? 'ivory' : '#27293a')};
  }
`;
export const TotalPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 10%;
  right: 80px;
  color: ${(props) => (props.theme === 'dark' ? 'ivory' : '#27293a')};
  button {
    margin-top: 20px;
    width: 80px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: ${(props) =>
      props.theme === 'dark' ? '#919eeb' : 'ivory'};
    border: none;
    border-radius: 2px;
    font-size: small;
  }
`;
export const CartContainer = styled.div`
  position: relative;
`;
// export const
