import { useRouter } from 'next/router';

import Header from '../header/header';
import Banner from '../banner/banner';
import BurgerMenu from '../burgerMenu/burgerMenu';

import styles from './pageContainer.module.scss';
import { useState } from 'react';

export default function PageContainer(props) {
    const [burgerMenu, showBurgerMenu] = useState(true);

    const router = useRouter();

    return (
        <div
            className={styles.page_wrapper}
        >
            {/* <Banner /> */}
            <Header 
                burgerMenu={burgerMenu}
                handleBurgerMenuChange={() => showBurgerMenu(!burgerMenu)}
            />
            <div
                className={styles['main-container']}
            >
                <BurgerMenu 
                    open={burgerMenu}
                    active={router.route}
                />
                {props.children}
            </div>
        </div>
    )
}