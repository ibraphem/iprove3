import React from "react";
import { useStateValue } from "./StateProvider";
import Markup from "./markup/markup";

import { ThemeProvider } from "styled-components";

// Plugins Stylesheet
import "bootstrap/dist/css/bootstrap.min.css";

// Slick Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// StyleSheet
import "./css/style.css";
import GlobalStyles from "./styles/Global.styled";

import bg1 from "./images/main-banner/bg1.jpg";
import bg2 from "./images/main-banner/bg2.jpg";
import bnrImg1 from "./images/banner/img1.jpg";
import bg7 from "./images/background/bg7.jpg";

function App() {
  const [{ nightMode }] = useStateValue();

  const theme = {
    colors: {
      themebg: nightMode ? "#101010" : "#fff",
      innerbg: nightMode ? "#000" : "#fff",
      secondary: "#F0B90B",
      textColor: nightMode ? "#fff" : "#000",
      mbbg: nightMode ? bg2 : bg1,
      abtPg: nightMode ? bg2 : bnrImg1,
      hea: nightMode ? "#000" : "#666666",
      footer: bg7,
    },
    mobile: "768px",
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="page-wraper" style={{ marginTop: "50px" }}>
        <Markup />
      </div>
    </ThemeProvider>
  );
}

export default App;
