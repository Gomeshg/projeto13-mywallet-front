import styled from "styled-components";
import circle from "../../img/circle.png";

export default function Icon({ insideIcon, type }) {
  return (
    <Wrapper img={circle}>
      <OutsideIcon src={circle} alt=""></OutsideIcon>
      <InsideIcon src={insideIcon} type={type}></InsideIcon>
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

  width: ${(props) => (props.type === "add" ? "10px" : "10px")};
  height: ${(props) => (props.type === "add" ? "10px" : "2.5px")};

  top: ${(props) => (props.type === "add" ? "6.5px" : "10.5px")};
  left: ${(props) => (props.type === "add" ? "6.5px" : "6.5px")};
`;

const OutsideIcon = styled.img`
  width: 23px;
  height: 23px;
`;
