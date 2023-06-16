import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";
import MUI from "./styles/MuiTheme";
import "./static/css/styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <MUI>
        <Header />
        <AppRoutes />
        <Footer />
      </MUI>
    </BrowserRouter>
  );
}

export default App;
