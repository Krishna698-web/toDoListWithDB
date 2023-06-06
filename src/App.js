import React, { useState } from "react";

// import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";

import elephants from "../src/images/elephants.jpg";
import robots from "../src/images/robots.jpg";
import lonelyGirl from "../src/images/lonely-girl.jpg";
import family from "../src/images/family.jpg";
import waterfall from "../src/images/waterfall.jpg";
import baby from "../src/images/baby.jpg";
import blueCity from "../src/images/jodhpur.jpg";
import kerala from "../src/images/kerala.jpg";

import styles from "../src/Components/Carousel.module.css";

import "./index.css";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  IconButton,
} from "@mui/material";
const CARD_DATA = [
  {
    id: "c1",
    src: waterfall,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    title: "Beauty of Earth",
  },
  {
    id: "c2",
    src: robots,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    title: "Robots family",
  },
  {
    id: "c3",
    src: lonelyGirl,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    title: "Lonely Girl",
  },
  {
    id: "c4",
    src: family,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    title: "Happy Family",
  },
  {
    id: "c5",
    src: baby,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    title: "Sleeping Baby",
  },
  {
    id: "c6",
    src: elephants,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    title: "The mama Elephant and its baby",
  },
  {
    id: "c7",
    src: blueCity,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    title: "Jodhpur (Blue City)",
  },
  {
    id: "c8",
    src: kerala,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    title: "Kerala",
  },
];

const App = () => {
  return (
    <div className="App">
      <Box className={styles.container} maxWidth="xl">
        <Box className={styles.carousel_container}>
          <Box>
            {CARD_DATA.map((card) => (
              <Card
                key={card.id}
                className="card"
                sx={{
                  heigth: "100%",
                  borderRadius: 1,
                  width: "max-content",
                  display: "inline-block",
                  position: "absolute",
                  top: "10%",
                  transition: ".4s",
                }}
                onClick={() => selectCardHandler(card.id)}>
                <CardActionArea>
                  <CardMedia
                    image={card.src}
                    sx={{
                      height: 120,
                      width: 170,
                    }}
                  />
                </CardActionArea>
              </Card>
            ))}
          </Box>
          <Box className={styles.btn_container}>
            <IconButton
              onClick={backwards}
              className={styles.backward_btn}
              sx={{ background: "white" }}
              disableRipple>
              <ArrowBackIosNewIcon sx={{ fontSize: "1.2rem" }} />
            </IconButton>
            <IconButton
              onClick={forwards}
              className={styles.forward_btn}
              sx={{ background: "white" }}
              disableRipple>
              <ArrowForwardIosIcon sx={{ fontSize: "1.2rem" }} />
            </IconButton>
          </Box>
        </Box>
        <PlayPause />
      </Box>
    </div>
  );
};

export default App;
