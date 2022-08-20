import Link from 'next/link';

import styles from './burgerMenu.module.scss';


export default function BurgerMenu(props) {

    return (
        <div
            className={
                `${styles['burger-menu']} 
                 ${props.open == true ? 
                    styles['burger-menu-active'] : 
                    styles['burger-menu-hidden']}`
            }
        >
            <Link 
                href={'./popular'}
            >
                <div
                    className={
                        `${styles['link']} 
                         ${props.active == '/' && styles['link-active']}`
                    }
                >

                    <a>
                        Популярное
                    </a>    
                </div>
            </Link> 
            <Link 
                href={'./new'}
            >
                <div
                    className={
                        `${styles['link']}
                         ${props.active == '/new' && styles['link-active']}`
                    }
                >

                    <a>
                        Свежее
                    </a>    
                </div> 
            </Link> 
            <Link 
                href={'./follows'}
            >
                <div
                    className={
                        `${styles['link']}
                         ${props.active == '/follows' && styles['link-active']}`
                    }
                >

                    <a>
                        Подписки
                    </a>    
                </div>
            </Link> 
            {/* <Link 
                href={'./categories'}
            >
                <div
                    className={
                        `${styles['link']}
                         ${props.active == 'categories' && styles['link-active']}`
                    }
                >

                    <a>
                        Разделы\Категории
                    </a>    
                </div>
            </Link>  */}
        </div>
    )
}