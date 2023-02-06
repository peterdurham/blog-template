import styled from "styled-components";
import CardLarge from "../CardLarge";

const BestStoriesWrapper = styled.div`
  border-top: 1px solid #ceced0;

  & .headline {
    margin: 16px 0;
    font-size: 18px;
  }
  & .bold {
    font-weight: 700;
  }
`;

const BestStories = () => {
  return (
    <BestStoriesWrapper>
      <div className="headline">
        Get started with our <span className="bold">best stories</span>
      </div>
      <div style={{ display: "flex" }}>
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
