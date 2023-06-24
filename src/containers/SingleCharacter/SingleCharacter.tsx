import { Box, Button, Divider, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import getSingleCharacter from "../../services/getSingleCharacter";

const SingleCharacter = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, status } = useQuery(["characters", id], getSingleCharacter, {
    keepPreviousData: true,
  });
  if (status === "loading") {
    return <Loading />;
  }

  if (status === "error") {
    return <Error />;
  }
  console.log(data);

  return (
    <>
      {data?.name ? (
        <>
          <Box
            sx={{
              display: "flex",
              height: "100%",
              flexDirection: { xs: "column", sm: "row" },
              padding: { xs: "1px", sm: "30px" },
            }}
            overflow={"hidden"}
            display={"flex"}
            marginBottom={"1rem"}
            justifyContent={"center"}
          >
            <img width={300} src={data?.image} alt={data?.name} />{" "}
            <Box fontSize={"1.25rem"} padding={"1rem"} color={"white"}>
              <Typography display={"inline"} variant="h5">
                {data?.name}
              </Typography>{" "}
              <Typography variant="body1" marginBottom={"1rem"}>
                {data?.status} - {data?.species}{" "}
                {/* Character status and species */}
              </Typography>
              <Typography display={"inline"} variant="body1">
                Last seen on:{" "}
              </Typography>
              <Typography display={"inline"} variant="body1">
                {data?.location.name}
              </Typography>{" "}
              <Divider light />
              <Typography display={"inline"} variant="body1">
                type:{" "}
              </Typography>
              <Typography display={"inline"} variant="body1">
                {data?.type == "" ? "Not Provided" : data?.type}
              </Typography>
              <Divider light />
              <Typography display={"inline"} variant="body1">
                gender:{" "}
              </Typography>
              <Typography display={"inline"} variant="body1">
                {data?.gender}
              </Typography>{" "}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              height: "100%",
              flexDirection: { xs: "column", sm: "row" },
              padding: { xs: "1px", sm: "30px" },
            }}
            display={"flex"}
            justifyContent={"center"}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => navigate(-1)}
            >
              Go Back
            </Button>
          </Box>
        </>
      ) : (
        <>Not Found</>
      )}
    </>
  );
};

export default SingleCharacter;
