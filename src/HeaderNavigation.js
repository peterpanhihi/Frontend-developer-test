import React from 'react';
import { Grid, Row, Col, Image, Button } from 'react-bootstrap';

const styles = {
  center: {
    textAlign: 'center',
    paddingTop: 50
  },

  button_space: {
    marginRight: 20
  }
}

export default class HeaderNavigation extends React.Component {

  render() {
    return (
      <header>
        <Grid>
          <Row>
            <Col md={12} style={styles.center}>
              <Image src="./src/assets/profile.jpg" circle />
            </Col>
            <Col md={12} style={styles.center}>
              <Button bsSize="large" style={styles.button_space}>Get Started</Button>
              <Button bsSize="large" style={styles.button_space}>Customization</Button>
              <Button bsSize="large" style={styles.button_space}>Components</Button>
              <Button bsSize="large" style={styles.button_space}>Discover More</Button>
            </Col>
          </Row>
        </Grid>
      </header>
    );
  }
}
