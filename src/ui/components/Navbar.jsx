import { Link, NavLink } from 'react-router-dom';
import { NavbarItem } from './NavbarItem';


export const Navbar = () => {


    const links = [
        { name: 'Marvel', url: '/marvel' },
        { name: 'DC', url: '/dc' },
        // { name: 'Logout', url: '/login' },
    ];

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
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
                    <span className='nav-item nav-link text-primary'>
                        Ryuma
                    </span>
                    <button className='nav-item nav-link btn'>
                        Logout
                    </button>
                </ul>
            </div>

        </nav>
    )
}