import styled from 'styled-components';
export const Container = styled.footer`
  display: flex;
  height: 200px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.theme === 'dark' ? '#3d3f51' : 'ivory'};
  p {
    font-size: 4px;
    color: ${(props) => (props.theme === 'dark' ? 'ivory' : '#3d3f51')};
  }
`;
export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 20px;
    height: 15px;
    border-radius: 5px;
    margin: 5px;
    margin-bottom: 10px;
  }
`;
export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    img {
      width: 20px;
      margin: 5px;
      border-radius: 5px;
    }
  }
`;
