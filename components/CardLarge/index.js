import styled from "styled-components";

const CardLargeWrapper = styled.div`
width: 350px;
margin: 16px;

.card-image {
  height: 420px;
  background: green;
  border-radius 32px;
  margin-bottom: 16px;
}

h2 {
    font-size: 24px;
}

.card-tag {
  background: #efeef0;
  padding: 8px;
  margin-right: 8px;
  border-radius: 8px;
}
`;

const CardLarge = () => {
  return (
    <CardLargeWrapper>
      <div className="card-image"></div>
      <div className="card-tags" style={{ display: "flex" }}>
        <div className="card-tag">Lifestyle</div>
        <div className="card-tag">People</div>
        <div className="card-tag">Review</div>
      </div>
      <h2>Creating is a prviliedge its also a gift</h2>
      <p>
        Nullam vel lectus vel velit pellentesque dignissim nec id magna. Cras
        molestie ornare quam at semper. Proin a ipsum ex. Curabitur eu venenatis
        justo. Nullam felis augue, imperdiet at sodales a,
      </p>
    </CardLargeWrapper>
  );
};
export default CardLarge;
