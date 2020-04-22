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
            >
              Druggler
            </CardTitle>
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

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://github.com/uchrissd/dungeon-bud/raw/master/public/images/sign-up.jpg) center / cover",
              }}
            >
              Dungeon Bud
            </CardTitle>
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

          {/* Project 3 */}
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
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is MongoDB</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is JavaScript</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is JavaScript</h1>
        </div>
      );
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
          <Tab>Projects</Tab>
          {/* <Tab>MongoDB</Tab>
          <Tab>JavaScript</Tab>
          <Tab>React</Tab> */}
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
