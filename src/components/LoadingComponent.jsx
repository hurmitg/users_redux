import { Box, Image } from "@chakra-ui/react";
import React from "react";

const LoadingComponent = () => {
  return (
    <Box w={["90%", "80%", "70%"]}>
      <Image
        m="20px auto"
        src="https://media.tenor.com/5mz52kzlg6IAAAAj/bloodbros-search.gif"
      />
    </Box>
  );
};
export default LoadingComponent;
