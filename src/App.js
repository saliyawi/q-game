import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { auth } from "../src/InitialLoader/Firebase/utils";
import Home from "./Main/Home/Container/Home";
import Login from "./Main/Login/Components/Login";
import MainLayout from "./Main/Layouts/Components/MainLayout";
import HomepageLayout from "./Main/Layouts/Components/HomePageLayout";
import Results from "./Main/Results/Components/Results";
import {handleUserProfile} from '../src/Core/Api/UserApi';
 
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
    this.authListener = auth.onAuthStateChanged((userAuth) => {
      if (!userAuth) {
        this.setState({ ...initialState });
      } else{
        handleUserProfile(userAuth); // Set user into local DB
      }

      this.setState({
        currentUser: userAuth,
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
            path="/results"
            render={() => (
              <MainLayout currentUser={currentUser}>
                <Results />
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
                <Home currentUser={currentUser}/>
              </HomepageLayout>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
