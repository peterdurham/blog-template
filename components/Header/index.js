import styled from "styled-components";
import Image from "next/image";

const HeaderStyles = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding-bottom: 8px;
`;

const Header = () => {
  return (
    <HeaderStyles>
      <div>
        <Image priority src="/images/logo.jpg" height={35} width={100} alt="" />
      </div>
      <div>Links</div>
    </HeaderStyles>
  );
};
export default Header;
