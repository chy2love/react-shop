import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { themeState } from '../components/Store';
import React from 'react';
import { Link } from 'react-router-dom';
export const Container = styled.div`
  background-color: ${(props) =>
    props.theme === 'dark' ? '#27293a' : 'white'};
  padding: 20px 100px;
  padding-top: 50px;
  height: 60vh;
`;
export const Title = styled.div`
  display: flex;
  color: ${(props) => (props.theme === 'dark' ? 'ivory' : '#27293a')};
  span {
    margin: 0 5px;
    font-size: 0.00001px;
    margin-bottom: 30px;
  }
`;
export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const ImgContainer = styled.div`
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  margin-right: 30px;
  img {
    height: 150px;
  }
`;
export const DescriptionContainer = styled.div`
  flex-grow: 2;
  color: ${(props) => (props.theme === 'dark' ? 'ivory' : '#27293a')};
  p:first-child {
    font-weight: 700;
    font-size: 12px;
  }
  p:nth-child(2) {
    font-size: 3px;
  }
  p:nth-child(3) {
    margin-top: 15px;
    font-size: 2px;
  }
  p:nth-child(4) {
    font-size: 13px;
  }
`;
export const ButtonContainer = styled.div`
  button {
    background-color: #631aa2;
    color: whitesmoke;
    border: none;
    border-radius: 5px;
    width: 100px;
    height: 25px;
    font-size: 5px;
  }
  align-items: center;
  display: flex;
`;
export const CartLink = styled(Link)`
  display: inline-block;
  font-size: 8px;
  width: 100px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  margin-left: 15px;
  text-decoration: none;
  color: ${(props) => (props.theme === 'dark' ? 'ivory' : '#27293a')};
  border: 0.5px solid
    ${(props) => (props.theme === 'dark' ? 'ivory' : '#27293a')};
  border-radius: 5px;
`;
