import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://github.com/uchrissd/druggler/raw/master/images/login2.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>
              Druggler is a web based application that allows users to track
              when they need to take their medications, as well as allowing
              users to search for interactions between different drugs. Users
              are able to sign up and create a unique profile that allows the
              user to add, edit and delete prescription drugs from their pill
              tracker dashboard.
            </CardText>
            <CardActions border>
              <Button colored>
                {" "}
                <a href="https://github.com/uchrissd/druggler">GitHub </a>{" "}
              </Button>
              <Button colored>
                {" "}
                <a href="https://uchrissd-druggler.herokuapp.com/">
                  Deployed App
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* js project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://github.com/uchrissd/city-scout/raw/master/assets/homepage-screenshot.jpg) center / cover",
              }}
            >
              City Scout
            </CardTitle>
            <CardText>
              City Scout is a web application that allows a user to get basic
              information about a city. The user first chooses a continent they
              are interested in and then they can choose from a list of
              countries. When the user selects a country, a list of the ten most
              populour cities from that country. When they choose a city, a page
              is rendered that displays basic information about the city such
              as: population, currency exchange, an image of the city, and 8
              charts indicating how the city ranks in various categories like
              education and cost of living.
            </CardText>
            <CardActions border>
              <Button colored>
                {" "}
                <a href="https://github.com/uchrissd/city-scout">
                  GitHub{" "}
                </a>{" "}
              </Button>
              <Button colored>
                {" "}
                <a href="https://uchrissd.github.io/city-scout/">
                  Deployed App
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* js project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://github.com/uchrissd/city-weather-dashboard/raw/master/assets/images/desktop-screen-shot.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>
              This is a weather dashboard that was built as a project for the
              UCSD web development bootcamp program. This application allows a
              user to search for any city in the world and it will return real
              time weather conditions in that city, as well as a 5-day weather
              forecast. The application relys on the Open Weather API to access
              the weather data.
            </CardText>
            <CardActions border>
              <Button colored>
                {" "}
                <a href="https://github.com/uchrissd/city-weather-dashboard">
                  GitHub{" "}
                </a>{" "}
              </Button>
              <Button colored>
                {" "}
                <a href="https://raw.githubusercontent.com/uchrissd/city-weather-dashboard/master/assets/images/desktop-screen-shot.jpg">
                  Deployed App
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* js project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://raw.githubusercontent.com/uchrissd/browser-password-generator/master/assets/images/password-generator-full-screenshot.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>
              This is a password generator that I built for a project in the
              UCSD web development bootcamp program. The goal of the password
              generator is to give a user the option to choose which characters
              they would like to include in their password, such as numbers,
              uppercase letters or special characters, as well as the length of
              the password. The user can then copy the newly generated password
              to their clipboard. The application runs on JavaScript and uses
              Bootstrap to provide styling and responsiveness.
            </CardText>
            <CardActions border>
              <Button colored>
                {" "}
                <a href="https://github.com/uchrissd/browser-password-generator">
                  GitHub{" "}
                </a>{" "}
              </Button>
              <Button colored>
                {" "}
                <a href="https://uchrissd.github.io/chrisunderwood.github.io/">
                  Deployed App
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://github.com/uchrissd/dungeon-bud/raw/master/public/images/sign-up.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>
              Dungeon Bud is a web application that allows Dungeons & Dragons
              players to save characters and campaigns to a database. The goal
              of the application is to help players save their campaign and
              character information to a database. Users have unique profiles
              where they can add, edit or delete the campaigns and characters
              that they have added to the database. They can also add their
              characters to other player’s campaigns or add other player's
              characters to the campaigns they have created.
            </CardText>
            <CardActions border>
              <Button colored>
                {" "}
                <a href="https://github.com/uchrissd/dungeon-bud">
                  GitHub{" "}
                </a>{" "}
              </Button>
              <Button colored>
                {" "}
                <a href="https://dungeon-bud.herokuapp.com/">Deployed App</a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return <div></div>;
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>JavaScript</Tab>
          <Tab>mySQL</Tab>
          {/* <Tab>MongoDB</Tab> */}
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content"> {this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
