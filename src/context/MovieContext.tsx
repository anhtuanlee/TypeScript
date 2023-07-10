import { createContext, ReactNode, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
interface MovieContextProps {
    children: ReactNode;
}
interface Movie {
    id: string;
    titlle: string;
}
interface MovieContextDefault {
    movies: Movie[];
    add: (title: string) => void;
    remove: (id: string) => void;
}

const movieContextDefault: MovieContextDefault = {
    movies: [],
    add: () => {},
    remove: () => {},
};

export const MovieContext = createContext<MovieContextDefault>(
    movieContextDefault,
);

export const MovieProvider = ({ children }: MovieContextProps) => {
    const [movies, setMovie] = useState<Movie[]>(
        movieContextDefault.movies,
    );
    const add = (title: string) => {
        setMovie((prev) => [
            ...prev,
            { id: uuidv4(), titlle: title },
        ]);
    };
    const remove = (id: string) => {
        const newMovie = movies.filter((movie) => {
            return movie.id !== id;
        });
        setMovie(newMovie);
    };
    const movieContexData = {
        movies,
        add,
        remove,
    };
    return (
        <MovieContext.Provider value={movieContexData}>
            {children}
        </MovieContext.Provider>
    );
};
