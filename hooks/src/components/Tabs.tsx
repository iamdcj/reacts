import React, { useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";

const Tabs = ({ links }: { links: any[] }) => {
  const [value, setValue] = useState("0");

  const handleChange = (event: any, newValue: string) => {
    setValue(String(newValue));
  };

  return (
    <Box mb={5} p={1}>
      <TabContext value={value}>
        <TabList onChange={handleChange} sx={{ mb: 3}}>
          {links.map(({ label }, i) => (
            <Tab key={label} value={String(i)} label={label} />
          ))}
        </TabList>
        {links.map(({ label, component: Component }, i) => (
          <TabPanel key={`${label}-panel`} value={String(i)} sx={{ background: '#faf8f4'}}>
            <Component />
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
};

export default Tabs;
