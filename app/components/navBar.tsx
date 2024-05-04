import React from 'react';
import Link from 'next/link';

const NavBar = () => {
    return (
        <nav>
            <Link href="/">Dashboard</Link>
            <Link href="/tickets">Tickets</Link>
        </nav>
    );
}

export default NavBar;
