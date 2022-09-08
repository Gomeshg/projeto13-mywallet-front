import styled from "styled-components";
import circle from "../../img/circle.png";

export default function Icon({ insideIcon, nameIcon }) {
  return (
    <Wrapper img={circle}>
      <OutsideIcon src={circle} alt=""></OutsideIcon>
      <InsideIcon src={insideIcon} sizes={nameIcon}></InsideIcon>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
`;

const InsideIcon = styled.img`
  position: absolute;

  width: ${(props) => (props.sizes === "add" ? "10px" : "10px")};
  height: ${(props) => (props.sizes === "add" ? "10px" : "2.5px")};

  top: ${(props) => (props.sizes === "add" ? "6.5px" : "10.5px")};
  left: ${(props) => (props.sizes === "add" ? "6.5px" : "6.5px")};
`;

const OutsideIcon = styled.img`
  width: 23px;
  height: 23px;
`;
