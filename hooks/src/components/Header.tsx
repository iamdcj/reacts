import React, { useState } from "react";
import { Link } from "react-router-dom";
import {  Drawer, MenuItem, Button, Box } from "@material-ui/core";

export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const routes = [
    { path: "/use-state", label: "useState" },
    { path: "/use-effect", label: "useEffect" },
    { path: "/use-ref", label: "useRef" },
    { path: "/use-reducer", label: "useReducer" },
  ];

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
        width: "75%",
        lineHeight: 1,
      }}
    >
      <Box fontSize={30} component="p" fontWeight={600} mb={0}>
        Hooks
      </Box>
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
        <Box width={300}>
          <Button onClick={() => setMenuOpen(false)} variant="contained">
            Close
          </Button>
          <nav>
            {routes.map(({ path, label }) => (
              <MenuItem>
                <Link to={path} onClick={() => setMenuOpen(false)}>
                  {label}
                </Link>
              </MenuItem>
            ))}
          </nav>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header;
