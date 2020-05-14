import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100", margin: "auto", fontFamily: "Exo" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={require("../images/chrismexicocity.jpg.PNG")}
              alt="profile"
              className="profile-image"
            />
            <div className="banner-text">
              <h1>Chris Underwood</h1>
              <hr />

              <p style={{ color: "#c4b49a" }}>
                HTML/CSS | JavaScript | React | NodeJS | Express | MongoDB
              </p>
              <div className="social-links">
                {/* LInkedIn */}
                <a
                  href="https://www.linkedin.com/in/christopherunderwoodsd/"
                  rel="nopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* Github */}
                <a
                  href="https://github.com/uchrissd"
                  rel="nopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
