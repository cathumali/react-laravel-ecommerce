import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";
import { Container, Row } from 'react-bootstrap';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
const container= {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}
const Loader = () => {
    return <Container className="h-50" style={container}>
        <Row>
          <FadeLoader
            css={override} 
            height={15} 
            width={5}
            radius={2}
            margin={2}
          />
        </Row>
    </Container>
}
export default Loader;