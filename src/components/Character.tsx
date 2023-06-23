import { Box, Typography } from "@mui/material";
import { ICharacter } from "../Interfaces";

// Component to display a single character
export default function Character({ character }: { character: ICharacter }) {
  return (
    <Box
      width={"45%"}
      bgcolor={"rgb(59, 62, 67)"}
      borderRadius={"0.5rem"}
      overflow={"hidden"}
      display={"flex"}
      marginBottom={"1rem"}
      marginRight={"1rem"}
    >
      <img src={character.image} alt={character.name} /> {/* Character image */}
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
    </Box>
  );
}
