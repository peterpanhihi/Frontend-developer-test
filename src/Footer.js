import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Grid>
            <Row>
              <Col md={3}>
                <h4>About us</h4>
                <p>Der Standardteil von Lorem Ipsum, genutzt seit 1500, ist reproduziert für die, die es interessiert.</p>
              </Col>
              <Col md={3}>
                <h4>Term of service</h4>
                <p>Sektion 1.10.32 und 1.10.33 von "de Finibus Bonorum et Malroum" von Cicero sind auch reproduziert in ihrer.</p>
              </Col>
              <Col md={3}>
                <h4>Privacy & Policy</h4>
                <p>Glauben oder nicht glauben, Lorem Ipsum ist nicht nur ein zufälliger er hat Wurzeln aus der Lateinischen Literatur.</p>
              </Col>
              <Col md={3}>
                <h4>Follow us</h4>
                <p>
                  <a href="http://www.facebook.com"><img src="./src/assets/facebook.png"/></a>&nbsp;
                  <a href="https://twitter.com/"><img src="./src/assets/twitter.png"/></a>&nbsp;
                  <a href="https://plus.google.com"><img src="./src/assets/google-plus.png"/></a>&nbsp;
                  <a href="https://www.linkedin.com"><img src="./src/assets/linkedin.png"/></a>&nbsp;
                </p>
              </Col>
            </Row>
          </Grid>
      </footer>
    );
  }
}
