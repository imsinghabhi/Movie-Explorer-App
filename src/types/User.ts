
// import { Comment } from "./comments";
// import { Rating } from "./Ratings";

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  // comments: Comment[];
  // ratings: Rating[];
  // favoriteMovies: Movie[];
}



export interface Movie {
  imdbID: string;
  title: string;
  
}
