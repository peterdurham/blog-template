import styled from "styled-components";

const HeaderStyles = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <HeaderStyles>
      <div>Logo</div>
      <div>Links</div>
    </HeaderStyles>
  );
};
export default Header;
