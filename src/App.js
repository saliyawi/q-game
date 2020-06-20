import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { auth, handleUserProfile } from "../src/InitialLoader/Firebase/utils";
import Home from "./Main/Home/Container/Home";
import Registration from "./Main/Registration/Container/Registration";
import Login from "./Main/Login/Components/Login";
import MainLayout from "./Main/Layouts/Components/MainLayout";
import HomepageLayout from "./Main/Layouts/Components/HomePageLayout";

const initialState = {
  currentUser: null,
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
  }

  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      }

      this.setState({
        ...initialState,
      });
    });
  }

  componentWillUnmount() {
    this.authListener();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div className="App" data-test="appComponent">
        <Switch>
          <Route
            path="/registration"
            render={() => (
              <MainLayout currentUser={currentUser}>
                <Registration />
              </MainLayout>
            )}
          />
          <Route
            path="/login"
            render={() =>
              currentUser ? (
                <Redirect to="/" />
              ) : (
                <MainLayout currentUser={currentUser}>
                  <Login />
                </MainLayout>
              )
            }
          />
          <Route
            path="/"
            render={() => (
              <HomepageLayout currentUser={currentUser}>
                <Home />
              </HomepageLayout>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
