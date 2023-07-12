import { Link, NavLink, useNavigate } from 'react-router-dom';
import { NavbarItem } from './NavbarItem';


export const Navbar = () => {

    const navigate = useNavigate();

    const handleReturn = () => {
        navigate(-1)
    }

    const handleLogout = () => {
        navigate('/login',
            {
                replace: true
            });
    };
    const links = [
        { name: 'Marvel', url: 'marvel' },
        { name: 'DC', url: 'dc' },
        { name: 'Search', url: 'search' },
    ];

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-black p-2">

            <Link
                className="navbar-brand"
                to="/"
            >
                Comics
            </Link>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {
                        links.map((link) => (
                            <NavbarItem
                                key={link.name}
                                name={link.name}
                                url={link.url} />
                        ))
                    }
                </ul>
            </div>

            <div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end'>
                <ul className='navbar-nav ml-auto'>
                    <button className='nav-item nav-link btn' onClick={handleReturn}>
                        Back
                    </button>
                    <span className='nav-item nav-link text-primary'>
                        Ryuma
                    </span>
                    <button className='nav-item nav-link btn' onClick={handleLogout}>
                        Logout
                    </button>
                </ul>
            </div>

        </nav>
    )
}