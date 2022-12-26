import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Container = styled.nav`
  position: fixed;
  width: 100vw;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) =>
    props.theme === 'dark' ? '#3d3f51' : 'ivory'};
  height: 40px;
`;

export const LeftColumn = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;
export const LinkContainer = styled.div`
  :first-child {
    margin-right: 30px;
  }
  margin: 0 3px;
  height: 30px;
  align-items: center;
`;
export const LinkTag = styled(NavLink)`
  color: ${(props) => (props.theme === 'dark' ? 'ivory' : '#3d3f51')};
  text-decoration: none;
  font-size: 5px;
  text-align: center;
  font-weight: 600;
`;

export const RightColumn = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
  width: 230px;
  img:first-child {
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
`;
export const InputBar = styled.input`
  height: 20px;
  width: 150px;
  font-size: 10px;
  margin-left: 10px;
  border-radius: 2px;
  border: 1px solid ivory;
  color: ${(props) => (props.theme === 'dark' ? 'ivory' : '#3d3f51')};
  background-color: ${(props) =>
    props.theme === 'dark' ? '#3d3f51' : 'ivory'};
  border: 1px solid ${(props) => (props.theme === 'dark' ? 'ivory' : '#3d3f51')};
`;
export const InputContainer = styled.div`
  position: absolute;
  top: 4px;
  left: 25px;
  display: flex;
  flex-direction: column;
`;
export const SearchItemContainer = styled.div`
  max-height: 300px;
  width: 150px;
  position: absolute;
  top: 25px;
  left: 10px;
  overflow-y: scroll;
  background-color: ${(props) =>
    props.theme === 'dark' ? '#3d3f51' : 'ivory'};
`;
export const SearchItem = styled(Link)`
  display: block;
  padding: 3px 5px;
  text-decoration: none;
  max-height: 23px;
  font-size: 5px;
  line-height: 12px;
  overflow: hidden;
  color: ${(props) => (props.theme === 'dark' ? 'ivory' : '#3d3f51')};
`;
export const CartContainer = styled(Link)`
  position: relative;
  width: 32px;
  height: 32px;
  display: flex;
  margin-left: 8px;
  align-items: center;
  justify-content: center;
  p {
    position: absolute;
    display: flex;
    top: 0;
    right: 0px;
    border-radius: 100%;
    width: 14px;
    height: 14px;
    color: navy;
    background-color: #e65757;
    line-height: 14px;
    justify-content: center;
    align-items: center;
    font-size: 1px;
  }
  /* cursor: pointer; */
`;
