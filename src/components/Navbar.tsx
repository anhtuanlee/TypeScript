import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    FormControl,
    Select,
    MenuItem,
    Theme,
    Button,
    SelectChangeEvent,
    Chip,
} from '@mui/material';
import WelcomeMessenger from './WelcomeMessenger';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import { ProgressDefault } from '../context/ProgressContext';
import { ThemeContext } from '../context/ThemeContex';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        positionSelect: {
            color: 'white',
            borderBottom: '1px solid white  ',
        },
    }),
);
function Navbar() {
    const classname = useStyles();

    const [position, setPosition] = useState<string>(
        'Fullstack Devoloper',
    );
    const [time, setTime] = useState<Date>(
        () => new Date(Date.now()),
    );
    const { theme } = useContext(ThemeContext);
    const { times, status } = useContext(ProgressDefault);

    const onPositionChange = (e: SelectChangeEvent<string>) => {
        setPosition(e.target.value);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date(Date.now()));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <AppBar position="static" color={theme}>
            <Toolbar>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    width={1}
                    py={2}
                >
                    <Typography variant="h6"></Typography>
                    <Box textAlign="center">
                        <WelcomeMessenger position={position} />
                        <Box mt={1}>
                            <FormControl>
                                <Select
                                    value={position}
                                    onChange={onPositionChange}
                                    className={
                                        classname.positionSelect
                                    }
                                >
                                    <MenuItem
                                        value={'Fullstack Devoloper'}
                                    >
                                        Fullstack Devoloper
                                    </MenuItem>
                                    <MenuItem
                                        value={'FrontEnd developer'}
                                    >
                                        FrontEnd developer
                                    </MenuItem>
                                    <MenuItem
                                        value={'BackEnd developer'}
                                    >
                                        BackEnd developer
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box textAlign="center">
                            <Box my={1}>
                                <Typography variant="h6">
                                    {time.toUTCString()}
                                </Typography>
                            </Box>
                        </Box>
                        <Chip
                            label={`Vào ngày ${times} anhtuancute bắt đầu học ${status}`}
                        />
                    </Box>
                    <Button variant="contained">Login</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
