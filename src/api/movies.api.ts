export interface Movie {
  Title: String;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

const API_URL = process.env.API_URL;
export const searchMovies = async (title: string): Promise<Movie[]> => {
  console.log("started fetching movies");
  try {
    const response = await fetch(`${API_URL}s=${title}`);
    if (!response.ok) {
      throw new Error("Failed to fetch movie search results");
    }
    const data = await response.json();
    console.log("movies data fetched", data);
    let movies =data?.Search || []

    if(movies)
    {
      movies= movies.filter((m: { Year: string | string[]; }) => m.Year.includes("2012"));
    }

    return movies;
    // return data?.Search || [];
  } catch (error) {
    console.error("Error fetching movie list:", error);
    return [];
  }
};
