import React from 'react';
import { Jumbotron, Grid, Row, Col, Button, Thumbnail } from 'react-bootstrap';

export default class Body extends React.Component {

  render() {
    return (
      <bodyInfo>
        <Jumbotron>
          <h1>Lorem Ipsum</h1>
          <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
          <p>There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..</p>
          <p><Button bsStyle="primary">Learn more</Button></p>
        </Jumbotron>
        <Grid>
          <Row>
            <Col md={3}>
              <Thumbnail src="./src/assets/1.jpg">
                <h4>What is Lorem Ipsum?</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p><Button>View details »</Button></p>
              </Thumbnail>
            </Col>
            <Col md={3}>
              <Thumbnail src="./src/assets/2.jpg">
                <h4>Why do we use it?</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p><Button>View details »</Button></p>
              </Thumbnail>
            </Col>
            <Col md={3}>
              <Thumbnail src="./src/assets/3.jpg">
                <h4>Where does it come from?</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p><Button>View details »</Button></p>
              </Thumbnail>
            </Col>
            <Col md={3}>
              <Thumbnail src="./src/assets/4.jpg">
                <h4>Where can I get some?</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p><Button>View details »</Button></p>
              </Thumbnail>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <Thumbnail src="./src/assets/5.jpg">
                <h4>Was ist Lorem Ipsum?</h4>
                <p>Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie.</p>
                <p><Button>View details »</Button></p>
              </Thumbnail>
            </Col>
            <Col md={3}>
              <Thumbnail src="./src/assets/6.jpg">
                <h4>Warum nutzen wir es?</h4>
                <p>Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird,wenn</p>
                <p><Button>View details »</Button></p>
              </Thumbnail>
            </Col>
            <Col md={3}>
              <Thumbnail src="./src/assets/7.jpg">
                <h4>Wo kommt es her?</h4>
                <p>Glauben oder nicht glauben, Lorem Ipsum ist nicht nur ein zufälliger Text Er hat </p>
                <p><Button>View details »</Button></p>
              </Thumbnail>
            </Col>
            <Col md={3}>
              <Thumbnail src="./src/assets/8.jpg">
                <h4>Wo kann ich es kriegen?</h4>
                <p>Es gibt viele Variationen der Passages des Lorem Ipsum, aber der Hauptteil.</p>
                <p><Button>View details »</Button></p>
              </Thumbnail>
            </Col>
          </Row>
        </Grid>
      </bodyInfo>
    );
  }
}
