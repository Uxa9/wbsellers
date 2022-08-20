import Link from 'next/link';
import PageContainer from '../components/pageContainer/pageContainer';


import styles from '../styles/Home.module.scss';

export default function Home() {
    return (
        <PageContainer>
            <div
                className={styles['news-container']}
            >
                <div
                    className={`block ${styles['hot-news']}`}
                >
                    <Link href={'./news'}>
                        <a>
                            Страпоны выросли в 3 раза
                        </a>
                    </Link>
                    <Link href={'./news#comments'}>
                        
                        <span>
                            22
                        </span>
                    </Link>
                </div>
                <p>
                    полулярная масса новостей
                </p>
            </div>
        </PageContainer>
    )
}
