import { Box, Button } from "@mui/material";
import React, { useState } from "react";

export interface BasicToggleProps {}

const BasicToggle = () => {
  const [isVisible, setVisibility] = useState(false);

  return (
    <div>
      <h1>Toggle Element</h1>
      <p>
        The useState hook is used to toggle the visibility of the BWFC badge
      </p>
      <Button variant="contained" onClick={() => setVisibility(!isVisible)}>
        Toggle Image
      </Button>
      <Box sx={{ mt: 3 }}>
        {isVisible && (
          <img src="https://seeklogo.com/images/B/bolton-wanderers-logo-D3CA76AE70-seeklogo.com.png" />
        )}
      </Box>
    </div>
  );
};

export default BasicToggle;
