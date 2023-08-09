import styled from 'styled-components'

const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  min-width: 100px;
  color: #fff;
  font-weight: 400;
  background-color: #2567C5;
  border: none;

  font-size: ${({ FS }) => (FS ? `${FS}px` : "14px")};
  height: ${({ hd }) => (hd ? `${hd}px` : "44px")};
  width: ${({ wd }) => (wd ? `${wd}px` : "10px")};
  border-radius: ${({ br }) => (br ? `${br}px` : "10px")};
  cursor: pointer;

  :active{
    opacity:0.7;
  }

`;

export { Container };