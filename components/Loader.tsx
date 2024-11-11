import { css } from "@emotion/react";
import styled from "@emotion/styled";

const LoaderContainer = styled.div(() =>
  css({
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    margin: "60px auto",
  })
);

const Loader = () => (
  <LoaderContainer>
    <img
      css={css({
        width: "60px",
      })}
      width="60px"
      src="https://raw.githubusercontent.com/sharafdin/KilledBySharafdin/3dbe047be82bf047d1c56a53d3ffe1293859d6b4/assets/knife.svg"
      alt="Knife"
    />
  </LoaderContainer>
);

export default Loader;
