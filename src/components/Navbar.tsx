import Logo from '../assets/logo-text.png'

const Navbar = () => {
    return (

        <div className="fixed top-0 w-full bg-base-100 shadow-sm ">

            <div className=" navbar max-w-[1200px] mx-auto px-4">

                <div className="navbar-start">

                    <div className="dropdown">

                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                aria-label="Menu"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>

                        {/* Mobile Menu */}
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <a className="text-[#D91B7E]">
                                    Home
                                </a>
                            </li>

                            <li>
                                <a>Technologies</a>
                            </li>

                            <li>
                                <a>Projects</a>
                            </li>

                            <li>
                                <a>About</a>
                            </li>

                            <li>
                                <a>Contact</a>
                            </li>
                        </ul>

                    </div>

                    {/* Logo */}
                    <a className="btn btn-ghost text-xl">
                        <img
                            src={Logo}
                            alt="Dev Stack"
                            className="w-[70%] md:w-auto"
                        />
                    </a>

                </div>


                {/* Navbar Center */}
                <div className="navbar-center hidden lg:flex">

                    <ul className="menu menu-horizontal px-1">

                        <li>
                            <a className="text-[#D91B7E]">
                                Home
                            </a>
                        </li>

                        <li>
                            <a>Technologies</a>
                        </li>

                        <li>
                            <a>Projects</a>
                        </li>

                        <li>
                            <a>About</a>
                        </li>

                        <li>
                            <a>Contact</a>
                        </li>

                    </ul>

                </div>


                {/* Navbar End */}
                <div className="navbar-end md:gap-4">

                    <button className="btn text-xm btn-ghost rounded-3xl">
                        Sign In
                    </button>

                    <button className="btn text-xm rounded-3xl bg-[#D91B7E] text-white border-none hover:bg-[#b91669]">
                        Sign Up
                    </button>

                </div>

            </div>

        </div>
    );
};

export default Navbar;