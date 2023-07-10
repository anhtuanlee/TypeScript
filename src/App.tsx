import Movie from './components/Movie';
import Navbar from './components/Navbar';
import ToggleThemeBtn from './components/ToggleThemeBtn';
import { MovieProvider } from './context/MovieContext';
import { ProgressProvider } from './context/ProgressContext';
import { ThemeContextProvider } from './context/ThemeContex';

function App(): JSX.Element {
    return (
        <ThemeContextProvider>
            <MovieProvider>
                <ProgressProvider>
                    <Navbar />
                    <Movie />
                    <ToggleThemeBtn />
                </ProgressProvider>
            </MovieProvider>
        </ThemeContextProvider>
    );
}

export default App;
