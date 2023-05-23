import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

// API response results array of objects interface
interface Game {
  id: number;
  name: string;
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

  useEffect(() => {
    // controller object
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    // clean-up function
    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
