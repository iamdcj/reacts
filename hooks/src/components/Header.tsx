import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Drawer, MenuItem, Button, Box } from "@material-ui/core";

export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Box
      component="header"
      style={{
        borderRadius: "0 0 8px 8px",
        background: "orangered",
        color: "#fff",
        padding: "10px 20px",
        display: "grid",
        gridGap: "20px",
        gridTemplateColumns: "min-content 1fr min-content",
        alignItems: "center",
        width: '75%'
      }}
    >
      <h1 className="no-margin">Hooks</h1>
      <p className="no-margin">
        A declarative way to manage state within function components.
      </p>

      <Button
        onClick={() => setMenuOpen(!menuOpen)}
        variant="contained"
        style={{ alignSelf: "center" }}
      >
        Menu
      </Button>

      <Drawer anchor="right" open={menuOpen}>
        <Button onClick={() => setMenuOpen(false)} variant="contained">
          Close
        </Button>
        <nav>
          <MenuItem>
            <Link to="/use-state" onClick={() => setMenuOpen(false)}>
              Use State
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/use-effect" onClick={() => setMenuOpen(false)}>
              Use Effect
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/use-ref" onClick={() => setMenuOpen(false)}>
              Use Ref
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/use-reducer" onClick={() => setMenuOpen(false)}>
              Use Reducer
            </Link>
          </MenuItem>
        </nav>
      </Drawer>
    </Box>
  );
};

export default Header;
