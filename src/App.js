import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { HashRouter } from "react-router-dom";

import Navigation from "./components/Navigation";
import UserContext from "./context/UserContext";
import Routes from "./Routes";

const App = () => {
  const localUser = localStorage.getItem("bibliography");
  const parsedLocalUser = JSON.parse(localUser);
  const [user, setUser] = useState(parsedLocalUser || {});

  return (
    <HashRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Container fluid>
          <Navigation />
          <Routes />
        </Container>
      </UserContext.Provider>
    </HashRouter>
  );
};

export default App;
