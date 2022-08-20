import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Burger } from "../../assets/icons";
import Button from "../button/button";

import logo from "../../assets/images/logo.png";
import styles from "./header.module.scss";


export default function Header(props) {

    return (
        <div
            className={styles['header-wrapper']}
        >
            <div
                className={styles['left-side']}
            >
                <div
                    className={styles['burger-buttom-wrapper']}
                    onClick={props.handleBurgerMenuChange}
                >
                    <Burger
                        style={props.burgerMenu && 'burger-active'}
                    />
                </div>
                <div
                    className={styles['logo-wrapper']}
                >
                    <Link href="/">
                        <a>
                            <Image src={logo} />
                        </a>
                    </Link>
                </div>
            </div>
            <div
                className={styles['center']}
            >
                <input 
                    className={styles.searchField}
                    placeholder="Поиск"
                />
                <div
                    className={styles['button-wrapper']}
                >
                    <Button>
                        + Создать
                    </Button>
                </div>
            </div>
            <div
                className={styles['right-side']}
            >
                <div>
                    bell
                </div>
                <div>
                    sign in
                </div>
            </div>
        </div>
    )
}