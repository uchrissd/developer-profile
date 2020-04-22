import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

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
              Hi, my name is Christopher Underwood. I’m a San Diego native and I
              currently work for KPBS as a web producer in the news department.
              I’m really excited to learn all of the different aspects of web
              development.
            </p>
            <br />
            <p>
              In my current job, there is some web development and web design
              involved, which has been helpful in my coding bootcamp. However,
              there is still much more that I need to learn. I really like to
              travel and learn about different cultures.
            </p>
            <br />
            <p>
              I speak Spanish and mostly travel in Latin America these days. My
              last big trip was in Colombia, where I visited for a little over a
              month. I also like reading, music and eating, especially Mexican
              food.
            </p>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2008}
              endYear={2013}
              schoolName={"San Francisco State University"}
            />
            <Education
              startYear={2019}
              endYear={2020}
              schoolName={"UC San Diego Extension"}
            />
            <hr style={{ borderTop: "3px solid #c4b49a" }}></hr>
            <h2>Experience</h2>
            <Experience
              startYear={2014}
              endYear={2016}
              jobName={"Digital Editor"}
            ></Experience>
            <Experience
              startYear={2016}
              endYear={"Current"}
              jobName={"Web Producer"}
            ></Experience>
            <hr style={{ borderTop: "3px solid #c4b49a" }}></hr>
            <h2>Skills</h2>
            <Skills skill="– Javascript" />
            <Skills skill="– React" />
            <Skills skill="– HTML/CSS" />
            <Skills skill="– JQuery" />
            <Skills skill="– Bootstrap" />
            <Skills skill="– Materialize" />
            <Skills skill="– Material-UI" />
            <Skills skill="– Node.js" />
            <Skills skill="– Express" />
            <Skills skill="– mySQL" />
            <Skills skill="– MongoDB" />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
