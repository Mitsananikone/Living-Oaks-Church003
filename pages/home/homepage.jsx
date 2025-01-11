import React, { useState, useEffect } from "react";
import Parallelogram from "@/components/parallelogram/parallelogram";
import styles from "./homepage.module.css";
// import "@/styles/globals.css";

function HomePage() {
  const [showOverlay, setShowOverlay] = useState(true);
  const [animateParallelograms, setAnimateParallelograms] = useState(false);
  const [fadeInImages, setFadeInImages] = useState(false);

  useEffect(() => {
    const overlayTimer = setTimeout(() => setShowOverlay(false), 1000);
    const animationTimer = setTimeout(() => setAnimateParallelograms(true), 2000);
    const imageFadeInTimer = setTimeout(() => setFadeInImages(true), 3000); // Delay for image fade-in
    return () => {
      clearTimeout(overlayTimer);
      clearTimeout(animationTimer);
      clearTimeout(imageFadeInTimer);
    };
  }, []);

  return (
    <div className={styles.homeContainer}>
      {/* Main Content */}
      <div className={styles.contentContainer}>
        <div className={`${styles.hidden} ${animateParallelograms ? styles.animateLeft : ""}`}>
          <Parallelogram
            width="550px"
            height="500px"
            color="var(--primary-color)"
            top="-5vh"
            left="5vw"
          >
            <div className={styles.parallelogramContent}>
              <h1 className={styles.title}>LIVING</h1>
              <h1 className={styles.title}>OAKS</h1>
              <h1 className={styles.title}>CHURCH</h1>
              <h6
                style={{
                  color: "var(--foreground-color)",
                  fontSize: "0.7rem",
                  fontStyle: "normal",
                }}
              >
                <i>
                  ...that they may be called oaks of righteousness, the planting of the Lord, that
                  he may be glorified. <br /> - Isaiah 61:3
                </i>
              </h6>
              <div className={styles.seperationLine}></div>
              <h1
                style={{
                  color: "var(--secondary-color)",
                  fontSize: "0.8rem",
                  fontStyle: "normal",
                  marginTop: "40px",
                }}
              >
                Leading REAL people to find <br /> REAL hope in Jesus.
              </h1>
            </div>
          </Parallelogram>
        </div>

        <div className={`${styles.hidden} ${animateParallelograms ? styles.animateRight : ""}`}>
          <Parallelogram
            width="400px"
            height="450px"
            top="10vh"
            left="0vw"
            color="var(--primary-color)"
            backImage="url('/images/LOCoakHomepage.jpg')"
          >
            <div className={styles.parallelogramImage}></div>
          </Parallelogram>
        </div>
      </div>

      {/* Image Row at the Bottom */}
      <footer className={styles.imageRow}>
        <img
          src="/images/cred_heights.png"
          alt="cred_heights"
          className={`${styles.resizedImage} ${fadeInImages ? styles.fadeIn : styles.invisible}`}
        />
        <img
          src="/images/cred_GCBA.png"
          alt="cred_GCBA"
          className={`${styles.resizedImage} ${fadeInImages ? styles.fadeIn : styles.invisible}`}
        />
        <img
          src="/images/cred_SBTC.png"
          alt="cred_SBTC"
          className={`${styles.resizedImage} ${fadeInImages ? styles.fadeIn : styles.invisible}`}
        />
        <img
          src="/images/cred_NAMB.png"
          alt="cred_NAMB"
          className={`${styles.resizedImage} ${fadeInImages ? styles.fadeIn : styles.invisible}`}
        />
      </footer>
    </div>
  );
}

export default HomePage;
