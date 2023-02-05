import styled from "styled-components";

const HeroStyles = styled.div`
  & h1 {
    font-size: 90px;
    line-height: 110px;
  }

  & .normal {
    font-weight: 400;
  }
`;

const Hero = () => {
  return (
    <HeroStyles>
      <h1>
        <span>Hey, we're Blogging.</span>{" "}
        <span className="normal">See our thoughts, stories and ideas.</span>
      </h1>
      <div>
        <input type="text" placeholder="Your email address" />
        <button style={{ background: "black", color: "white" }}>
          Subscribe
        </button>
        <span>
          Get the email newsletter and unlock access to members-only content and
          updates
        </span>
      </div>
    </HeroStyles>
  );
};
export default Hero;
