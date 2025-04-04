import Link from 'next/link'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
    const user: boolean = true;

    return (
        <div className="navbar px-[10px] sm:px-[60px] bg-white">
            <div className="flex-1 text-primary font-bold text-[32px]">
                <Link href={"/"}>CARENT</Link>
            </div>
            <div className="flex-none">
                {user ? (
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu text-black menu-sm dropdown-content bg-white border-black border rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                ) : (
                    <div className="flex gap-3">
                        <Link href="/signin">
                            <button className="btn btn-ghost text-blue-600 hover:bg-blue-50">
                                Sign In
                            </button>
                        </Link>
                        <Link href="/signup">
                            <button className="btn bg-blue-600 hover:bg-blue-700 text-white border-none">
                                Sign Up
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar