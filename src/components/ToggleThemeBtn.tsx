import { Fab, Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { ThemeContext } from '../context/ThemeContex';
import { useContext } from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        floatBtn: {
            right: '3rem',
            bottom: '3rem',
            position: 'fixed',
        },
    }),
);

function ToggleThemeBtn(this: any) {
    const classname = useStyles();
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <Fab
            color="primary"
            variant="extended"
            className={classname.floatBtn}
            onClick={toggleTheme?.bind(
                this,
                theme === 'primary' ? 'secondary' : 'primary',
            )}
        >
            Toggle Theme Btn
        </Fab>
    );
}

export default ToggleThemeBtn;
