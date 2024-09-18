import { Movie } from "@/types";
import Item from "./item";
import { Skeleton } from "@nextui-org/skeleton";

interface Props {
  query: string;
  movies: Movie[];
  loading: boolean;
}

const MovieList: React.FC<Props> = ({ query, movies, loading }) => {
  return (
    <div>
      <h3 className="font-bold text-lg">Results for "{query}"</h3>
      <section className="grid grid-cols-1 sm:grid-cols-5 gap-4 my-8">
        {loading
          ? Array.from({ length: 10 }).map((_, i) => (
              <Skeleton key={`skeleton-${i}`} className="rounded-lg">
                <div className="h-48 rounded-lg bg-secondary"></div>
              </Skeleton>
            ))
          : movies.map((movie, i) => <Item movie={movie} key={`movie-${i}`} />)}
      </section>
    </div>
  );
};

export default MovieList;
