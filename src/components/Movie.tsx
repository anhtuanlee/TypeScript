import {
    Box,
    Button,
    Chip,
    ChipPropsColorOverrides,
    TextField,
    Theme,
} from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { ChangeEvent, useContext, useState } from 'react';
import { MovieContext } from '../context/MovieContext';
import { ThemeContext } from '../context/ThemeContex';
import { OverridableStringUnion } from '@mui/types';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        movieInput: {
            marginRight: '5px',
        },
        movieChip: {
            fontSize: '20px',
            padding: '30px 10px',
            margin: 5,
        },
    }),
); 
function Movie(this: any) {
    const classess = useStyles();
    const [movie, setMovie] = useState('');
    const { add, movies, remove } = useContext(MovieContext);
    const { theme } = useContext(ThemeContext);
    const chipTheme = theme as OverridableStringUnion<
        | 'default'
        | 'primary'
        | 'secondary'
        | 'error'
        | 'info'
        | 'success'
        | 'warning',
        ChipPropsColorOverrides
    >;
    const handleInputChange = (
        event: ChangeEvent<HTMLInputElement>,
    ) => {
        setMovie(event.target.value);
    };

    return (
        <div>
            <Box display={'flex'} justifyContent={'center'} my={5}>
                <TextField
                    label={'Your favorite Movie ...'}
                    variant="outlined"
                    className={classess.movieInput}
                    onChange={handleInputChange}
                    value={movie}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        if (movie !== '') {
                            add(movie);
                            setMovie('');
                        }
                    }}
                >
                    Add
                </Button>
            </Box>
            <Box
                display={'flex'}
                justifyContent={'center'}
                flexWrap={'wrap'}
                mx={5}
            >
                {movies.map((movie) => {
                    return (
                        <div>
                            <Chip
                                key={movie.id}
                                label={movie.titlle}
                                clickable
                                color={chipTheme}
                                className={classess.movieChip}
                                onDelete={remove.bind(this, movie.id)}
                            />
                        </div>
                    );
                })}
            </Box>
        </div>
    );
}

export default Movie;
