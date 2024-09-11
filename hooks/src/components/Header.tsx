import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer, MenuItem, Button, Box } from "@material-ui/core";

export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const routes = [
    { path: "/use-state", label: "useState" },
    { path: "/use-effect", label: "useEffect" },
    { path: "/use-ref", label: "useRef" },
    { path: "/use-reducer", label: "useReducer" },
    { path: "/use-layout-effect", label: "useLayoutEffect" },
  ];

  return (
    <Box
      component="header"
      style={{
        width: "75%",
      }}
    >
      <Box
        mb={1}
        style={{
          borderRadius: "0 0 8px 8px",
          background: "orangered",
          color: "#fff",
          padding: "10px 20px",
          display: "grid",
          gridGap: "20px",
          gridTemplateColumns: "min-content 1fr min-content",
          alignItems: "center",
          lineHeight: 1,
        }}
      >
        <Box fontSize={30} component="p" fontWeight={600} mb={0}>
          Hooks
        </Box>
        <p className="no-margin">
          A declarative way to manage state within function components.
        </p>
      </Box>
      <Box>
        <nav
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          {routes.map(({ path, label }) => (
            <MenuItem>
              <Link to={path} onClick={() => setMenuOpen(false)}>
                {label}
              </Link>
            </MenuItem>
          ))}
        </nav>
      </Box>
    </Box>
  );
};

export default Header;
