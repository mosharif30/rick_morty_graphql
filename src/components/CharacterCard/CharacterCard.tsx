import { Box, Typography } from "@mui/material";
import { ICharacter } from "../../Interfaces";
import { useNavigate } from "react-router-dom";

// Component to display a single character
export default function CharacterCard({
  character,
}: {
  character: ICharacter;
}) {
  const navigate = useNavigate();

  return (
    <>
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
        marginBottom={"1rem"}
        marginRight={"1rem"}
      >
        <Box
          sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
        >
          <Box sx={{ height: "210px" }}>
            <img width={210} src={character.image} alt={character.name} />
          </Box>
          {/* Character image */}
          <Box fontSize={"1.25rem"} padding={"1rem"} color={"white"}>
            <Typography variant="h5">{character.name}</Typography>{" "}
            {/* Character name */}
            <Typography variant="body1" marginBottom={"1rem"}>
              {character.status} - {character.species}{" "}
              {/* Character status and species */}
            </Typography>
            <Typography variant="body1">Last seen on: </Typography>
            <Typography variant="body1">
              {character.location.name}
            </Typography>{" "}
            {/* Character's last seen location */}
          </Box>
        </Box>
      </Box>
    </>
  );
}
