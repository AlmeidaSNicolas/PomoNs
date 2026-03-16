import styles from'./Heading.module.css';

type HeadinProps={
    children: React.ReactNode
}

export default function Heading({ children }: HeadinProps){
    return(
        <h1 className={styles.heading}>{children}</h1>
    )
}