import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
class Education extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>
            {this.props.startYear} — {this.props.endYear}
          </p>
        </Cell>
        <Cell col={8}>Right side</Cell>
      </Grid>
    );
  }
}

export default Education;
