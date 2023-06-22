import { useState } from "react";
import { useQuery } from "react-query";
import Character from "./Character";
import getCharacters from "../services/getCharacters";
import { Box, Button, Typography } from "@mui/material";
const Characters = () => {
  const handleClickNext = () => {
    setPage(page + 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleClickPrev = () => {
    setPage(page - 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [page, setPage] = useState(1);

  const { data, status } = useQuery(["characters", page], getCharacters, {
    keepPreviousData: true,
  });

  if (status === "loading") {
    return <>loading...</>;
  }
  if (status === "error") {
    return <>error!</>;
  }

  return (
    <>
      <div className="App">
        {" "}
        <Typography p={3} color={"white"}>
          page is {page}
        </Typography>
        <Box display={"flex"} flexWrap={"wrap"}>
          {data.results.map((character: any) => (
            <Character key={character.id} character={character}></Character>
          ))}
          <Box>
            <Button
              disabled={data.info.prev === null}
              onClick={handleClickPrev}
              sx={{
                padding: "1rem 4rem",
                fontSize: "2rem",
                margin: "2rem 0",
                marginRight: "1rem",
              }}
            >
              prev
            </Button>
            <Button
              disabled={data.info.next === null}
              onClick={handleClickNext}
              sx={{
                padding: "1rem 4rem",
                fontSize: "2rem",
                margin: "2rem 0",
                marginRight: "1rem",
              }}
            >
              Next
            </Button>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Characters;
