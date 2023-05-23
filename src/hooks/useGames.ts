import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

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

// API response interface
interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  // state variables
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    // controller object
    const controller = new AbortController();

    setLoading(true);

    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    // clean-up function
    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
