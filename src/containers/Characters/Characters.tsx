import { useState } from "react";
import { useQuery } from "react-query";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import getCharacters from "../../services/getCharacters";
import { Box, Pagination, Stack, Typography } from "@mui/material";
import { ICharacter } from "../../Interfaces";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

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
    return <Loading />;
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
      <Box
        display="flex"
        flexWrap="wrap"
        p={5}
        sx={{
          justifyContent: "center",
        }}
      >
        {data?.results.map((character: ICharacter) => (
          <Box
            key={character.id}
            onClick={() => {
              navigate(`/characters/${character.id}`);
            }}
            sx={{
              width: { xs: "210px", md: "400px" },
              cursor: "pointer",

              backgroundColor: "rgb(59, 62, 67)",
              "&:hover": {
                background: "#546e7a",
              },
            }}
            borderRadius={"0.5rem"}
            overflow={"hidden"}
            display={"flex"}
            marginBottom={"1rem"}
            marginRight={"1rem"}
          >
            <CharacterCard key={character.id} character={character} />
          </Box>
        ))}
        <Stack marginRight={"auto"} marginLeft={"auto"}>
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
