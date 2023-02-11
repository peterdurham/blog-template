import styled from "styled-components";
import Subscribe from "../Subscribe";

const HeroStyles = styled.div`
  margin-bottom: 40px;

  & h1 {
    font-size: 90px;
    line-height: 110px;
    margin-top: 8px;
    margin-bottom: 24px;
  }

  & .normal {
    font-weight: 400;
  }

  & .subscribe-container {
    display: flex;
    align-items: center;
  }

  & .subscribe-text {
    font-size: 16px;
    line-height: 19px;
    color: #151618;
    max-width: 390px;
    font-weight: 300;
    margin-bottom: 8px;
  }
`;

const Hero = () => {
  return (
    <HeroStyles>
      <h1>
        <span>Hey, we're Blogging.</span>{" "}
        <span className="normal">See our thoughts, stories and ideas.</span>
      </h1>
      <div className="subscribe-container">
        <Subscribe />
        <span className="subscribe-text">
          Get the email newsletter and unlock access to members-only content and
          updates
        </span>
      </div>
    </HeroStyles>
  );
};
export default Hero;
