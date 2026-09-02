import Logo from './Logo';
import Results from './Results';
import Search from './Search';

function Navbar({ movies }) {
    return (
        <nav className='nav-bar'>
            <Logo />
            <Search />
            <Results movies={movies} />
        </nav>
    );
}

export default Navbar;
