import React from "react";
import Parallelogram from "@/components/parallelogram/parallelogram";
import "@/styles/globals.css";
import styles from "./resources.module.css";

function Resources() {
  return (
    <div className="centerContainer">
      <div className="background">
        {/* Header */}
        <h1 className="title">
          <i className="fa-solid fa-oil-well"></i> Resources
        </h1>
        <h3>To carry out this project, we need the following resources:</h3>

        {/* First Pair */}
        <div className="contentRow">
          <div className="parallelogramContainer">
            <Parallelogram
              width="100px"
              height="100px"
              color="var(--secondary-color)"
              top="0vh"
              left="0vw"
            >
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  textAlign: "left",
                  transform: "skew(20deg)",
                }}
              >
                <h1
                  style={{
                    color: "var(--foreground-color)",
                    fontSize: "2.6rem",
                    fontStyle: "normal",
                  }}
                >
                  1
                </h1>
              </div>
            </Parallelogram>
          </div>
          <div className={styles.textContainerRight}>
            <div>
              <h2>Portable Equipment</h2>
              <br />
              <p className="description">
                We need a constomized trailer with roll-out storage of all the
                equipment that a services will need.
              </p>
            </div>
          </div>
        </div>

        {/* Second Pair */}
        <div className="contentRow">
          <div className="parallelogramContainer">
            <Parallelogram
              width="100px"
              height="100px"
              color="var(--secondary-color)"
              top="0vh"
              left="0vw"
            >
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  textAlign: "left",
                  transform: "skew(20deg)",
                }}
              >
                <h1
                  style={{
                    color: "var(--foreground-color)",
                    fontSize: "2.6rem",
                    fontStyle: "normal",
                  }}
                >
                  2
                </h1>
              </div>
            </Parallelogram>
          </div>
          <div className={styles.textContainerRight}>
            <div>
              <h2>Social Media Pressence</h2>
              <br />
              <p className="description">
                We need strong strategic social media presence that reaches
                people who are far from God and/or new to the area.
              </p>
            </div>
          </div>
        </div>

        {/* Third Pair */}
        <div className="contentRow">
          <div className="parallelogramContainer">
            <Parallelogram
              width="100px"
              height="100px"
              color="var(--secondary-color)"
              top="0vh"
              left="0vw"
            >
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  textAlign: "left",
                  transform: "skew(20deg)",
                }}
              >
                <h1
                  style={{
                    color: "var(--foreground-color)",
                    fontSize: "2.6rem",
                    fontStyle: "normal",
                  }}
                >
                  3
                </h1>
              </div>
            </Parallelogram>
          </div>
          <div className={styles.textContainerRight}>
            <div>
              <h2>Awesome Landlords</h2>
              <br />
              <p className="description">
                We need people who would be blessed by our pressence and willing
                to do things out of the ordinary. Please pray for this
                specifically
              </p>
            </div>
          </div>
        </div>

        <h1 className="title" style={{marginTop: "100px"}} >
          <i className="fa-solid fa-people-roof"></i> We Need You
        </h1>

        <p className="description">
          We aim to launch with 30-40 adults from Heights Baptist Church,
          providing a solid base of commited members to support and grow Living
          Oaks Church. <br />
          <br />
          LOC is developing a Core Team, believers who feel the call to jointhe
          Perrins in this church for the foreseeable future. This team will help
          in specific areas of ministry and volunteerism that is needed
          regulary, like children's programming, teen mentoring and lead in
          worshipping. <br />
          <br />
          LOC also needs a Launch Team, believers who want to help the church
          get off to a great start for the first year. This team helps as a
          welcoming face to visitors and fills in when extra hands are needed,
          but only for a temporary time.
        </p>

        <h1 className="title" style={{marginTop: "100px"}} >
          <i className="fa-solid fa-church"></i> We Need Funding
        </h1>

        <p className={styles.description}>
          We are blessed to have financial support from our sending church,
          Heights Baptist Church, the North American Mission Board (NAMB), The
          Southern Baptists of Texas Convention (SBTC), the Gulf Coast Baptists
          of Texas Association (GCBA) and additional partners. Our financial
          goal is to raise $300,000 over three years, with the following annual
          budgets:
        </p>

        <ul class="no-bullets">
          <li>
          <div className={styles.iconAndText}>
            <i class="fa-solid fa-seedling fa-sm"></i> 
            <h2 style={{ margin: "20px" }}>Year 1 budget: $100,000</h2>
            </div>
            <ul class="no-bullets">
            <li style={{ margin: "10px" }}>
              75% from partners / 25% from congregants
              </li>
            </ul>
          </li>
        </ul>

        <br />

        <ul class="no-bullets">
          <li>
            <div className={styles.iconAndText}>
              <i class="fa-solid fa-seedling fa-lg"></i>
              <h2 style={{ margin: "10px" }}>Year 2 budget: $100,000 </h2>
            </div>
            <ul class="no-bullets">
            <li style={{ margin: "10px" }}>
                50% from partners / 50% from congregants
              </li>
            </ul>
          </li>
        </ul>

        <br />

        <ul class="no-bullets">
          <li>
            <div className={styles.iconAndText}>
              <i class="fa-solid fa-tree fa-xl"></i>
              <h2 style={{ margin: "20px" }}>Year 3 budget: $100,000</h2>
            </div>
            <ul class="no-bullets">
            <li style={{ margin: "10px" }}>
              25% from partners / 75% from congregants
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Resources;
