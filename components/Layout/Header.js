import Link from 'next/link'

export default () => (
    <header className='header'>
        <nav className='nav-bar'>
            <div className='container'>
                <ul className='nav'>
                    <li>
                        <Link href='/'><a>Home</a></Link>
                    </li>
                    <li>
                        <Link href='/about'><a>About</a></Link>
                    </li>
                    <li>
                        <Link href='/contact'><a>Contact</a></Link>
                    </li>
                </ul>
            </div>
        </nav>
        <style jsx>
            {`
                .nav-bar {
                    padding: 1em 3em;
                    background: #8AC28E;
                    font-weight: bold;
                }
                
                .container {
                    max-width: 50em;
                    margin: 0 auto;
                }

                .nav {
                    margin: 0;
                    padding: 0;
                    list-style: none;
                }

                .nav li {
                    display: inline;
                    margin: 0 1em 0 0;
                }

                .nav a {
                    padding: 0.7em 1.25em;
                    color: #fff;
                    text-decoration: none;
                }

                .nav a:hover {
                    color: #5B5B5B;
                }
            `}
        </style>
    </header>
)