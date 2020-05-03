import React from "react";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <span className="nav-contain">
            <a className="navbar-brand" href="#">Placeholder Text</a>

            <span className="nav-right">
                <a href="#">Login</a>
                    |
                <a href="#">Logout</a>
            </span>
            </span>
        </nav>
    );
}

export default Navbar;