import Link from 'next/link';

const Navbar = () => (
    <nav className="navbar">
        <Link href="/">
            <a className="navbar-brand">Note App</a>
        </Link>
        <Link href="/new">
            <a className="create">Create note</a>
        </Link>
        <Link href="/signUp">
            Sign Up
        </Link>
        <Link href="/sign-up">
            Sign In
        </Link>
    </nav>
)

export default Navbar;