import Layout from "../../hocs/layout";
import yumi from "./assets/yumi.png";
import yul from "./assets/yul.png";
import gaziza from "./assets/gaziza.png";

import styles from "./abous-us.module.css";

const AboutUs = () => {

    return (
        <Layout
            isNeedFooter
            isNeedHeader
        >
            <section className={styles.wrapper}>
                <h2 className={styles.heading}>About us</h2>

                <section className={styles.text}>
                    <p className={styles.paragraph}>
                        Welcome to HYGY Magazine: Where Creativity Knows No Boundaries.
                    </p>

                    <p className={styles.paragraph}>
                        HYGY Magazine, founded on August 7, 2023, by three visionary creators, is a bold new platform dedicated to giving creativity a voice. We believe that in the ever-evolving world of fashion, art, music, and film, having a distinct and authentic voice is just as important as the stories we tell. At HYGY, we’re driven by a passion to break barriers, challenge conventions, and offer our readers a fresh perspective on the world of creativity.
                    </p>

                    <p className={styles.paragraph}>
                        Our magazine is a place where creators from all disciplines can freely express their imagination, experiment without fear, and share their work in an environment that embraces boldness and originality. We don’t just cover what’s popular - we elevate and spotlight the innovative and the disruptive. HYGY isn’t about following trends; it’s about setting them. Whether it’s avant-garde fashion, provocative art, cutting-edge music, or visionary cinema, HYGY Magazine seeks to capture the essence of creative evolution.
                    </p>

                    <p className={styles.paragraph}>
                        Beyond just content, we’re also deeply embedded in the world of fashion, covering the most influential fashion events around the globe. From fashion weeks to exclusive runway shows and underground art exhibitions, we provide our readers with insider access and a behind-the-scenes look at the creative processes shaping today’s cultural landscape.
                    </p>

                    <p className={styles.paragraph}>
                        What sets us apart is our commitment to fostering an authentic, independent voice. For us, the voice isn’t just a feature - it’s our driving force. We speak honestly, offering unfiltered opinions and fresh perspectives, making HYGY a platform where diverse thoughts are not only welcomed but celebrated.
                    </p>

                    <p className={styles.paragraph}>
                        At HYGY Magazine, we’re more than just storytellers - we’re creators, innovators, and challengers of the status quo. We invite you to become part of our growing HYGY family. Whether you're an artist, a fashion enthusiast, a music lover, or a film buff, this is your space to explore, express, and engage with creativity in its purest form. Share your thoughts, dive into our stories, and join a community where imagination knows no limits.
                    </p>
                </section>

                <h2 className={styles.heading}>
                    Our Founders
                </h2>
                <section className={styles.founders}>
                    <article className={styles.founder}>
                        <img src={yumi} alt={"Yumi Kim. Photographer & Art Director"} />
                        <h3 className={styles.founderTitle}>
                            YUMI KIM
                            <br />
                            Photographer & Art Director
                        </h3>
                    </article>
                    <article className={styles.founder}>
                        <img src={gaziza} alt="Gaziza Aitkulova. Photographer & Producer" />
                        <h3 className={styles.founderTitle}>
                            GAZIZA AITKULOVA
                            <br />
                            Photographer & Producer
                        </h3>
                    </article>
                    <article className={styles.founder}>
                        <img src={yul} alt={"Yulia Ulymova. Photographer & Art Director"} />
                        <h3 className={styles.founderTitle}>
                            YULIA ULYMOVA
                            <br />
                            Photographer & Art Director
                        </h3>
                    </article>
                </section>
            </section>
        </Layout>
    )
};

export default AboutUs;