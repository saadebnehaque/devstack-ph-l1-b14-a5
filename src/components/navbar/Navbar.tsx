import navLogo from '../../assets/logo-text.png'


const Navbar = () => {

    const menus: string[] = ['Home', 'Technologies', 'Projects', 'About', 'Contact'];

    return (
        <>
            <div className="navbar bg-base-100 shadow-sm sticky z-10 top-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                menus.map((menu, i) => <li key={i} className=' hover:text-secondary font-semibold active:bg-white'><a>{menu}</a></li>)
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost "><img src={navLogo} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            menus.map((menu, i) => <li key={i} className=' hover:text-secondary font-semibold'><a>{menu}</a></li>)
                        }
                    </ul>
                </div>
                <div className="navbar-end space-x-1">
                    <a className="btn btn-ghost rounded-full font-medium">Sign In</a>
                    <a className="btn btn-secondary rounded-full">Sign Up</a>
                </div>
            </div>

        </>
    );
};

export default Navbar;