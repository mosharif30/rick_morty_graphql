import { Box, Typography } from "@mui/material";

const Error = () => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Box textAlign="center">
          <Typography color={"white"} variant="h6" gutterBottom>
            Oops! Something went wrong.
          </Typography>
          <Typography color={"white"} variant="body1" gutterBottom>
            Failed to load data. May be a refresh can help ...
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Error;
