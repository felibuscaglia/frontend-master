import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Movie } from "../../types";

interface Props {
  movie: Movie;
}

const MovieListItem: React.FC<Props> = ({ movie }) => {
  const moviePoster =
    movie.Poster !== "N/A"
      ? movie.Poster
      : "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png";

  return (
    <Card className="py-4">
      <CardHeader className="py-2 px-4 flex-col items-start">
        <small className="text-default-500">{movie.Year}</small>
        <h4 className="font-bold text-large line-clamp-2 text-ellipsis h-[3.2rem]">
          {movie.Title}
        </h4>
      </CardHeader>
      <CardBody className="py-2">
        <div
          className="h-48 bg-cover bg-center rounded-xl w-full mx-auto"
          style={{
            backgroundImage: `url('${moviePoster}')`,
          }}
        />
      </CardBody>
    </Card>
  );
};

export default MovieListItem;
