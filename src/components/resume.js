import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src={require("../images/chrismexicocity.jpg.PNG")}
                alt="profile"
                className="profile-image"
              ></img>
            </div>

            <h2 style={{ paddingTop: "2em" }}>Chris Underwood</h2>
            <h4 style={{ color: "black" }}>web developer</h4>
            <hr style={{ borderTop: "3px solid black", width: "50%" }}></hr>
            <p>
              Vestibulum ullamcorper nulla nec blandit congue. Praesent rutrum
              sollicitudin dolor, vel sagittis neque blandit eu. Ut ornare
              scelerisque lectus, a porttitor felis facilisis in. In quis ornare
              tellus. Quisque sed luctus ipsum. Aenean rhoncus scelerisque quam
              eget interdum. Ut tempor efficitur sapien eu pretium. Aenean augue
              libero, varius nec sapien sed, ultricies tincidunt libero. Duis
              convallis lorem vel commodo pulvinar. Aenean commodo ante quis
              ligula cursus mattis.
            </p>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education startYear={2008} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
