import Layout from "../../hocs/layout";
import styles from "./career.module.css";

const Career = () => {
    return (
        <Layout
            isNeedFooter
            isNeedHeader
        >
            <section className={styles.wrapper}>
                <h1 className={styles.heading}>Career</h1>

                <section className={styles.text}>
                    <p className={styles.paragraph}>
                        There will be dream jobs here soon.
                        <br />
                        In the meantime, stay tuned.
                    </p>
                </section>
            </section>
        </Layout>
    )
};

export default Career;