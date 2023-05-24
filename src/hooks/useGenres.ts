import useData from "./useData";

// refer to API documentation for more  details.
export interface Genre {
  id: number;
  name: string;
}
const useGenres = () => useData<Genre>("/genres"); // hiding details about HTTP request (such as endpoints) behind a hook.

export default useGenres;
