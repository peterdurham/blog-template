import styled from "styled-components";
import CardLarge from "../CardLarge";

const BestStoriesWrapper = styled.div`
  border-top: 1px solid #ceced0;

  & .headline {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & button {
      cursor: pointer;
      background: none;
      border: none;
    }
    & svg {
      height: 18px;
    }
  }

  & .headline-text {
    margin: 10px 0 11px 0;
    font-size: 20px;
    line-height: 22px;
  }
  & .bold {
    font-weight: 700;
  }

  & .card-container {
    display: flex;
    width: 2500px;
  }
`;

const BestStories = () => {
  function navigateLeft() {
    console.log("called navigate left");
  }

  function navigateRight() {
    console.log("called navigate right");
  }

  return (
    <BestStoriesWrapper>
      <div className="headline">
        <div className="headline-text">
          Get started with our <span className="bold">best stories</span>
        </div>
        <div className="navigation">
          <button style={{ marginRight: "4px" }} onClick={() => navigateLeft()}>
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.775 3.225 0 12l8.775 8.775 1.498-1.407-6.421-6.267H24v-2.202H3.852l6.421-6.267-1.498-1.407Z"></path>
            </svg>
          </button>
          <button onClick={() => navigateRight()}>
            {" "}
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.225 20.775 24 12l-8.775-8.775-1.498 1.407 6.421 6.267H0v2.202h20.148l-6.421 6.267 1.498 1.407Z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="card-container">
        <CardLarge />
        <CardLarge />
        <CardLarge />
        <CardLarge />
        <CardLarge />
        <div>story 2</div>
        <div>story 3</div>
      </div>
    </BestStoriesWrapper>
  );
};
export default BestStories;
