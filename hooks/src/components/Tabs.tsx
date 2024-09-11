import React, { useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";

const Tabs = ({ links }: { links: any[] }) => {
  const [value, setValue] = useState("0");

  const handleChange = (event: any, newValue: string) => {
    setValue(String(newValue));
  };

  console.log('render');
  

  return (
    <Box mb={5} p={1}>
      <TabContext value={value}>
        <TabList onChange={handleChange}>
          {links.map(({ label }, i) => (
            <Tab key={label} value={String(i)} label={label} />
          ))}
        </TabList>
        {links.map(({ label, component: Component }, i) => (
          <TabPanel key={`${label}-panel`} value={String(i)}>
            <Component />
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
};

export default Tabs;
