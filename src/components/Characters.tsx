import { useState } from "react";
import { useQuery } from "react-query";
import Character from "./Character";
import getCharacters from "../services/getCharacters";
import { Box, Pagination, Stack, Typography } from "@mui/material";
import { ICharacter } from "../Interfaces";
import { useNavigate } from "react-router-dom";

const Characters = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  // Get Data
  const { data, status } = useQuery(["characters", page], getCharacters, {
    keepPreviousData: true,
  });
  // Pagination Handler
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error!</div>;
  }

  return (
    <div className="App">
      {/* Display current page */}
      <Typography p={3} color="white">
        Page is {page}
      </Typography>
      <Box display="flex" flexWrap="wrap" p={5}>
        {data?.results.map((character: ICharacter) => (
          <Box
            onClick={() => {
              navigate(`/characters/${character.id}`);
            }}
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
            <Character key={character.id} character={character} />
          </Box>
        ))}
        <Stack spacing={2}>
          {/* Display current page number */}
          <Typography color="white">Page: {page}</Typography>
          {/* Pagination component */}
          <Pagination
            sx={{ button: { color: "#ffffff" }, div: { color: "#ffffff" } }}
            size="large"
            color="primary"
            count={data?.info.pages}
            page={page}
            onChange={handleChange}
            showFirstButton
            showLastButton
          />
        </Stack>
      </Box>
    </div>
  );
};

export default Characters;
