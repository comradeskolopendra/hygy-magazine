import Layout from "../../hocs/layout";
import styles from "./privacy.module.css";

const Privacy = () => {

    return (
        <Layout
            isNeedFooter
            isNeedHeader
        >
            <section className={styles.wrapper}>
                <h1 className={styles.heading}>Privacy Policy</h1>

                <section className={styles.text}>
                    <p className={styles.paragraph}>Effective Date: Dec, 01 2024</p>
                    <p className={styles.paragraph}>
                        Dear reader, welcome to HYGY Magazine website. Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your information when you visit our website.
                        <br />
                        Kindly read the following to understand how provided information will be processed.
                    </p>

                    <ol className={styles.orderedList}>
                        <li>Information we collect.
                            <br />
                            Personal Information: when you contact us, we may collect personal information such as your name, email address, phone number, demographic information, your marketing preferences and any other information you provide.
                            Usage Data: we may collect information about how you access and use our website, including your IP address, URL, browser type, pages visited, time spent on the website and certain pages, page interaction information.
                            Cookies: we use cookies to enhance your experience on our website. Cookies are small data files stored on your device that help us understand user behavior and preferences.
                        </li>
                        <li>
                            How we use your information.
                            <br />

                            <ul className={styles.unorderedList}>
                                We may use the information we collect for the following purposes:
                                <li>- To provide and maintain our services.</li>
                                <li>- To provide customer support.</li>
                                <li>- To gather analysis or information following administration purposes that we can improve our website.</li>
                                <li>- To monitor the usage of our website.</li>
                                <li>- To detect, prevent, and address technical issues.</li>
                            </ul>
                        </li>
                        <li>
                            Sharing your information.
                            <br />
                            We do not reveal your personal information to third parties, except in circumstances including legal requirements: we may disclose your personal information if it is required by law or in response to valid requests by public authorities.
                        </li>
                        <li>
                            Security of your information
                            <br />
                            The security of your personal information is important to us. We strive to implement relevant and timely security procedures and practices appropriate to the nature of the data we store to protect it from unauthorized access, damage, use, or disclosure.
                        </li>
                        <li>
                            Changes to this Privacy Policy
                            <br />
                            We may update our Privacy Policy from time to time. You can track all the changes of the Privacy Policy on this page. You are advised to review this Privacy Policy periodically to be up to date.
                        </li>
                    </ol>
                </section>
            </section>
        </Layout>
    )
};

export default Privacy;