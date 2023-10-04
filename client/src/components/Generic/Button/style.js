import styled from 'styled-components';
const getType = ({ type }) => {
  switch (type) {
    case "dark":
      return {
        background: "transparent",
        border: "1px solid #0066CC",
        color: "#0066CC",
      };
      case "cklic":
      return {
        background: "transparent",
        border: "1px solid #0066CC",
        color: "#0066CC",
        opacity: '0.2',
        
      };
       case 'payment':
        return{
          background: "#F5F5F7",
          color: "#000",
          
        };
        case 'ext':
          return{
            background: "red",
            color: "#fff",
            
          };
    default:
     
  }
};

const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  color: #fff;
  font-weight: 400;
  background-color: #2567C5;
  border: none;

  font-size: ${({ FS }) => (FS ? `${FS}px` : "14px")};
  height: ${({ hd }) => (hd ? `${hd}px` : "44px")};
  width: ${({ wd }) => (wd ? `${wd}px` : "100%")};
  border-radius: ${({ br }) => (br ? `${br}px` : "10px")};
  cursor: pointer;

  :active{
    opacity:0.7;
  }
  ${getType}
`;

export { Container };