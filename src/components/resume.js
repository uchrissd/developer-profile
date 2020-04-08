import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";

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

            <Education
              startYear={2008}
              endYear={2013}
              schoolName={"San Francisco State University"}
              schoolDescription={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ligula varius, viverra dolor sollicitudin, rhoncus risus. Vestibulum rhoncus auctor nisl, at pharetra metus varius id. Phasellus pretium justo eget massa iaculis tincidunt quis ut justo. Etiam blandit turpis sed arcu fringilla luctus. Sed laoreet nunc non auctor finibus. Fusce placerat a augue id aliquet. Sed eget porta elit. Maecenas maximus fringilla enim, et rutrum mauris venenatis ut. Mauris lobortis sapien nec risus varius, et pellentesque augue consequat. Phasellus quis neque ac ante feugiat dapibus nec vitae ipsum. Maecenas ornare diam maximus, laoreet diam eu, euismod lorem. Aliquam vestibulum imperdiet velit, non semper elit mollis vitae. Vestibulum sollicitudin eget enim ac semper."
              }
            />

            <Education
              startYear={2019}
              endYear={2020}
              schoolName={"UC San Diego Extension"}
              schoolDescription={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ligula varius, viverra dolor sollicitudin, rhoncus risus. Vestibulum rhoncus auctor nisl, at pharetra metus varius id. Phasellus pretium justo eget massa iaculis tincidunt quis ut justo. Etiam blandit turpis sed arcu fringilla luctus. Sed laoreet nunc non auctor finibus. Fusce placerat a augue id aliquet. Sed eget porta elit. Maecenas maximus fringilla enim, et rutrum mauris venenatis ut. Mauris lobortis sapien nec risus varius, et pellentesque augue consequat. Phasellus quis neque ac ante feugiat dapibus nec vitae ipsum. Maecenas ornare diam maximus, laoreet diam eu, euismod lorem. Aliquam vestibulum imperdiet velit, non semper elit mollis vitae. Vestibulum sollicitudin eget enim ac semper."
              }
            />
            <hr style={{ borderTop: "3px solid #c4b49a" }}></hr>
            <h2>Experience</h2>
            <Experience
              startYear={2014}
              endYear={2016}
              jobName={"Digital Editor"}
              jobDescription={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac ornare neque. Praesent in sem sit amet ante mollis consectetur in id tellus. Praesent eget dictum est. Donec aliquam vulputate sem, in tempus ligula pellentesque vel. Fusce sit amet tincidunt enim. Donec quis massa faucibus, tempor urna a, commodo nisi. Phasellus consectetur, turpis dapibus commodo ultricies, purus nibh sollicitudin mauris, sit amet viverra massa nibh quis eros. Mauris a scelerisque arcu, sit amet rhoncus erat."
              }
            ></Experience>

            <Experience
              startYear={2016}
              endYear={"Current"}
              jobName={"Web Producer"}
              jobDescription={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac ornare neque. Praesent in sem sit amet ante mollis consectetur in id tellus. Praesent eget dictum est. Donec aliquam vulputate sem, in tempus ligula pellentesque vel. Fusce sit amet tincidunt enim. Donec quis massa faucibus, tempor urna a, commodo nisi. Phasellus consectetur, turpis dapibus commodo ultricies, purus nibh sollicitudin mauris, sit amet viverra massa nibh quis eros. Mauris a scelerisque arcu, sit amet rhoncus erat."
              }
            ></Experience>
            <hr style={{ borderTop: "3px solid #c4b49a" }}></hr>
            <h2>Skills</h2>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
