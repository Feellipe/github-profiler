import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import ProfilePage from "./pages/profilePage/profilePage.components";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <ProfilePage />
    </div>
  );
}

export default App;
