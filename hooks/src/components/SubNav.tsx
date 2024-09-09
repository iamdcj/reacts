import React from "react";
import { Link } from "react-router-dom";
import { MenuItem, Box, Tabs, Tab } from "@material-ui/core";
import { log } from "console";

export interface SubNavProps {
  title?: string;
  links: any[];
}

const SubNav: React.SFC<SubNavProps> = ({ title = "", links }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
    debugger;
    setValue(newValue);
  };

  console.log(value);

  return (
    <Box mb={5} p={1}>
      <nav>
        <Tabs value={value}>
          {links.map(({ path, label }, i) => (
            <MenuItem>
              <Link to={path}>
                <Tab value={i} label={label} onChange={handleChange}></Tab>
              </Link>
            </MenuItem>
          ))}
        </Tabs>
      </nav>
    </Box>
  );
};

export default SubNav;
