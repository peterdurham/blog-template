import styled from "styled-components";

const SubscribeWrapper = styled.div`
  position: relative;
  width: 455px;

  & input {
    width: 285px;
    height: 67px;
    font-size: 22px;
    font-weight: 300;
    padding: 0 30px;
    border: none;
    background: #f4f4f4;
    color: rgb(21, 22, 24);
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
  }

  & button {
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 255px;
    height: 67px;
    width: 187px;
    border: none;
    border-radius: 40px;
    font-size: 24px;
    letter-spacing: 0.5px;
    background: #000;
    color: #fff;
    transition: 0.2s all ease;
  }

  & button:hover {
    background: #344cfc;
  }
`;

const Subscribe = () => {
  return (
    <SubscribeWrapper>
      <input type="text" placeholder="Your email address" />
      <button>Subscribe</button>
    </SubscribeWrapper>
  );
};
export default Subscribe;
