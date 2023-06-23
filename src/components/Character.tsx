import { Box, Typography } from "@mui/material";
import { ICharacter } from "../Interfaces";

// Component to display a single character
export default function Character({ character }: { character: ICharacter }) {
  return (
    <>
      <img width={200} src={character.image} alt={character.name} />
      {/* Character image */}
      <Box fontSize={"1.25rem"} padding={"1rem"} color={"white"}>
        <Typography variant="h5">{character.name}</Typography>{" "}
        {/* Character name */}
        <Typography variant="body1" marginBottom={"1rem"}>
          {character.status} - {character.species}{" "}
          {/* Character status and species */}
        </Typography>
        <Typography variant="body1">Last seen on</Typography>
        <Typography variant="body1">{character.location.name}</Typography>{" "}
        {/* Character's last seen location */}
      </Box>
    </>
  );
}
