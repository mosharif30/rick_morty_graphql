import { useState } from "react";
import { useQuery } from "react-query";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import getCharacters from "../../services/getCharacters";
import { Box, Pagination, Stack, Typography } from "@mui/material";
import { ICharacter } from "../../Interfaces";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

const Characters = () => {
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
    return <Error />;
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
          <CharacterCard key={character.id} character={character} />
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
