// layout
import DefaultLayout from "./layouts/default";
// react
import { useEffect, useState } from "react";
// axios
import omdbApiClient from "@/lib/axios/omdbApiClient";
// types
import { ApiResponse, Movie } from "./types";
// components
import { Input } from "@nextui-org/input";
import { Pagination } from "@nextui-org/pagination";
import { subtitle, title } from "./components/primitives";
import MovieList from "@/components/movie-list";

const MOVIES_PER_REQUEST = 10;

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [totalMovieCount, setTotalMovieCount] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!input) return;

    if (error) setError(null);

    const debounceTimeout = setTimeout(() => {
      fetchMovies();
    }, 500);

    return () => clearTimeout(debounceTimeout);
  }, [input]);

  const fetchMovies = async (page = 1) => {
    setLoading(true);

    try {
      const { data } = await omdbApiClient.get<ApiResponse>("/", {
        params: {
          s: input,
          type: "movie",
          page,
        },
      });

      if (data.Response === "False" || !data.Search) {
        throw new Error(
          data.Error || "Something unexpected happened. Please try again later."
        );
      }

      if (page === 1) {
        setTotalMovieCount(Number(data.totalResults));
      }

      setMovies(data.Search);
    } catch (err) {
      setError(String(err));
    } finally {
      setLoading(false);
    }
  };

  const handlePaginationChange = (newPage: number) => {
    setPage(newPage);
    fetchMovies(newPage);
  };

  const handleInputClear = () => {
    setInput("");
    setError(null);
    setMovies([]);
    setTotalMovieCount(0);
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-16">
        <div className="inline-block text-center justify-center">
          <span className={title()}>Find your&nbsp;</span>
          <span className={title({ color: "yellow" })}>
            Favorite Movies&nbsp;
          </span>
          <br />
          <span className={title()}>instantly with ease.</span>
          <div className={subtitle({ class: "mt-4" })}>
            Discover movies fast with our sleek and intuitive search tool.
          </div>
        </div>
        <Input
          value={input}
          className="sm:w-3/4"
          size="lg"
          isClearable
          placeholder="Search..."
          onChange={({ target }) => setInput(target.value)}
          errorMessage={error}
          isInvalid={error !== null}
          onClear={handleInputClear}
        />
      </section>
      {(input || movies.length > 0) && error === null && (
        <MovieList movies={movies} query={input} loading={loading} />
      )}
      {totalMovieCount > MOVIES_PER_REQUEST && (
        <div className="flex justify-center">
          <Pagination
            isCompact
            showControls
            total={Math.ceil(totalMovieCount / MOVIES_PER_REQUEST)}
            initialPage={1}
            page={page}
            onChange={handlePaginationChange}
          />
        </div>
      )}
    </DefaultLayout>
  );
}

export default App;
