import { NavLink } from "react-router-dom";

const Header = () => {
    const linksLi = <>
        <li><NavLink
            to={'/'}
            className={({ isActive }) => isActive ? 'text-[18px] text-[#23BE0A] font-semibold border-2 border-[#23BE0A]' : 'text-[#23BE0A]'}>Home</NavLink></li>
        <li><NavLink
            to={'/books'}
            className={({ isActive }) => isActive ? 'text-[18px] text-[#23BE0A] font-semibold border-2 border-[#23BE0A]' : 'text-[#23BE0A]'}>
            Listed Books</NavLink></li>
        <li><NavLink
            to={'/pagesRead'}
            className={({ isActive }) => isActive ? 'text-[18px] text-[#23BE0A] font-semibold border-2 border-[#23BE0A]' : 'text-[18px] text-[#23BE0A] '}>Pages to read</NavLink></li>
        <li><NavLink
            to={'/wishPages'}
            className={({ isActive }) => isActive ? 'text-[18px] text-[#23BE0A] font-semibold border-2 border-[#23BE0A]' : 'text-[18px] text-[#23BE0A] '}>Wish Pages</NavLink></li>

        <li><NavLink
            to={'/book'}
            className={({ isActive }) => isActive ? 'text-[18px] text-[#23BE0A] font-semibold border-2 border-[#23BE0A]' : 'text-[#23BE0A]'}>Book Details</NavLink></li>

    </>
    return (
        <div className="navbar bg-base-100 p-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {linksLi}
                    </ul>
                </div>
                <a className="text-[28px] font-bold">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {linksLi}
                </ul>
            </div>
            <div className="navbar-end gap-5 ">
                <a className="btn px-7 py-4 bg-[#23BE0A] text-white">Sign In</a>
                <a className="btn px-7 py-4 bg-[#59C6D2] text-white">Sign Up</a>
            </div>
        </div>
    );
};

export default Header;