import Layout from "../../hocs/layout";
import styles from "./contacts.module.css";

const Contacts = () => {

    return (
        <Layout
            isNeedFooter
            isNeedHeader
        >
            <section className={styles.wrapper}>
                <h1 className={styles.heading}>
                    Contacts
                </h1>

                <section className={styles.text}>
                    <p className={styles.paragraph}>How to contact <span className={styles.note}>HYGY Magazine</span>.</p>
                    <p className={styles.paragraph}>For any inquiries, please contact us by mail <span className={styles.note}>hygy.group@gmail.com</span> with a note:</p>
                    <p className={styles.paragraph}>
                        <span className={styles.note}>ADS</span> - for placing advertisement.
                        <br />
                        <span className={styles.note}> ARTICLE</span> - if you want to publish an article in our magazine.
                        <br />
                        <span className={styles.note}>EVENTS</span> - if you want our magazine to cover your event.
                        <br />
                        <span className={styles.note}>COOPERATION</span> - to offer joint projects.
                        <br />
                        <span className={styles.note}>EDITORIAL</span> - if you want to publish your creative works with us.
                        <br />
                        <span className={styles.note}>CAREER</span> - if you liked one of the vacancies posted in the career section.
                        <br />
                        <span className={styles.note}>GENERAL</span> - for any general questions.
                    </p>
                    <p className={styles.paragraph}>Our social media</p>
                    <p className={styles.paragraph}>
                        <span className={styles.note}>Instagram: </span>  <a className={styles.link} href="https://www.instagram.com/hygy_magazine" target="_blank">https://www.instagram.com/hygy_magazine</a>
                        <br />
                        <span className={styles.note}>Youtube: </span> <a className={styles.link} href="https://www.youtube.com/@hygy_group" target="_blank">https://www.youtube.com/@hygy_group</a>
                        <br />
                        <span className={styles.note}>LinkedIn</span>
                    </p>
                </section>
            </section>
        </Layout>
    );
};

export default Contacts;