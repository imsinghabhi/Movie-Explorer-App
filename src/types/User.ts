
// import { Comment } from "./comments";
// import { Rating } from "./Ratings";
import { Movie } from "./Movie";
export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  favoriteMovies: Movie[];
}



