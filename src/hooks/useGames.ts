import useData from "./useData";
import { Genre } from "./useGenres";

// Interface represent platform object
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// API response results array of objects interface
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; // parent_platform is an array of objects, each object contain property called platform which has a type Platform.
  metacritic: number;
}

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id]
  );

export default useGames;
