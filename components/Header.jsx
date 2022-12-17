import Container from './Container';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Header.module.scss'
import Link from 'next/link';


const Header = () => {
    // variable that holds the current state
    // variable that sets the statemenu
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    return (
        <header className={styles.header}>
            <Container>
                <Link href="/">
                    <Image 
                        src="/images/syracuse-restaurants-logo.svg"
                        alt="Syracuse Restaurants Logo"
                        width={537}
                        height={86}
                        className={styles.logo}
                    />
                </Link>
            </Container>

        </header>
    );
}

export default Header;

