import { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import styles from '../styles/Home.module.css'
// import Link from "next/Link";
import { NextLinkComposed } from "../src/Link";

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavTabs() {
  const [value, setValue] = useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={styles.nav} sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        selectionFollowsFocus
      >
        <Tab
          label="Random"
          component={NextLinkComposed}
          to={{ pathname: "/" }}
        />
        <Tab
          label="My Favorites"
          component={NextLinkComposed}
          to={{ pathname: "/MyFavorites" }}
        />
      </Tabs>
    </Box>
  );
}
