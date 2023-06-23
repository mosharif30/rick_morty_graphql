import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import getSingleCharacter from "../services/getSingleCharacter";
import { useQuery } from "react-query";
const SingleCharacter = () => {
  const { id } = useParams();
  const { data, status } = useQuery(["characters", id], getSingleCharacter, {
    keepPreviousData: true,
  });
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error!</div>;
  }
  console.log(data);

  return (
    <>
      <Box
        sx={{
          width: { xs: "90%", md: "45%" },
          flexDirection: { xs: "column", sm: "row" },
          backgroundColor: "rgb(59, 62, 67)",
          "&:hover": {
            background: "rgb(50, 62, 67)",
          },
        }}
        borderRadius={"0.5rem"}
        overflow={"hidden"}
        display={"flex"}
        marginBottom={"1rem"}
        marginRight={"1rem"}
      >
        <img width={200} src={data?.image} alt={data?.name} />{" "}
        <Box fontSize={"1.25rem"} padding={"1rem"} color={"white"}>
          <Typography variant="h5">{data?.name}</Typography>{" "}
          <Typography variant="body1" marginBottom={"1rem"}>
            {data?.status} - {data?.species}{" "}
            {/* Character status and species */}
          </Typography>
          <Typography variant="body1">Last seen on</Typography>
          <Typography variant="body1">{data?.location.name}</Typography>{" "}
        </Box>
      </Box>
    </>
  );
};

export default SingleCharacter;
