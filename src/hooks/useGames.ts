import { GameQuery } from "../App";
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

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );

export default useGames;
