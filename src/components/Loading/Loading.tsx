import { Box, CircularProgress, Typography } from "@mui/material";

const Loading = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box textAlign="center">
        <CircularProgress color="primary" size={80} />
        <Typography variant="h6" style={{ marginTop: "1rem" }} color={"white"}>
          Loading...
        </Typography>
      </Box>
    </Box>
  );
};

export default Loading;
