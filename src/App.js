import React, { useState } from "react";
import { Cursor, Typewriter } from "react-simple-typewriter";
import "./App.css";

function App() {
  window.addEventListener("contextmenu", (e) => e.preventDefault());
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header>
        <div className="logo">
          <span>Mr</span>
          joy
        </div>
        <div className="nav">
          <ul className={menuOpen ? "open" : ""}>
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Services">Services</a>
            </li>
            <li>
              <a href="#Skills">Skills</a>
            </li>
            <li>
              <a href="#Protfolio">Protfolio</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
          {menuOpen === true ? (
            <>
              <div
                id="menu-icon"
                className="bx bx-x"
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
              />
            </>
          ) : (
            <>
              <div
                id="menu-icon"
                className="bx bx-menu"
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
              />
            </>
          )}
        </div>
      </header>
      {/* homesection------------------------ */}
      <section id="home" className="home">
        <div className="home-content">
          <h1 data-aos="fade-up">Hi! I'm Mrityunjoy Panday</h1>
          <div className="change-text">
            <h3>
              <span>& </span> I'm
            </h3>
            <h3>
              <span className="word">
                <Typewriter
                  words={[
                    "Web Developer",
                    "Frontend Developer",
                    "Backend Developer",
                    "Web Designer",
                  ]}
                  loop={false}
                  cursor
                />
              </span>
              <span>
                <Cursor />
              </span>
            </h3>
          </div>
          <p data-aos="fade-up-left">
            I'm a Full stack Web Developer Working in Developer field in 1 yers.
          </p>
          <div className="info-box">
            <div className="email-info" data-aos="fade-up-right">
              <h5>Email</h5>
              <span>mrityunjoypanday22@gmail.com</span>
            </div>
            <div className="Number-info">
              <h5>Number</h5>
              <span>+918250244898</span>
            </div>
          </div>
          <div className="btn-box">
            <a href="#" className="btn" data-aos="fade-right">
              Download CV
            </a>
            <a href="#" className="btn" data-aos="fade-left">
              Hire Me Now!
            </a>
          </div>
          <div className="social-icons">
            <a href="#" data-aos="fade-up">
              <i className="bx bxl-facebook" />
            </a>
            <a href="#" data-aos="fade-right">
              <i className="bx bxl-instagram" />
            </a>
            <a href="#" data-aos="fade-down">
              <i className="bx bxl-whatsapp-square" />
            </a>
            <a href="#" data-aos="fade-right">
              <i className="bx bxl-twitter" />
            </a>
          </div>
        </div>
        <div className="home-img" data-aos="zoom-in-down">
          <div className="img-box">
            <img src="./profile.png" alt="profile" />
            <div className="liquid-shape">
              <svg
                viewBox="0 0 500 500"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="100%"
                id="blobSvg"
              >
                <path fill="#12f7ff">
                  <animate
                    attributeName="d"
                    dur="10000ms"
                    repeatCount="indefinite"
                    values="
                      M458,303.5Q436,357,399,400Q362,443,306,458.5Q250,474,198.5,451Q147,428,96,398Q45,368,45,309Q45,250,51.5,194.5Q58,139,92,87.5Q126,36,188,33Q250,30,310,36Q370,42,396.5,96Q423,150,451.5,200Q480,250,458,303.5Z;
                      M457,311Q461,372,407,400Q353,428,301.5,443Q250,458,198,444Q146,430,103,395Q60,360,53,305Q46,250,44.5,190Q43,130,93.5,98Q144,66,197,40.5Q250,15,309.5,29.5Q369,44,412,88Q455,132,454,191Q453,250,457,311Z;
                      M459,303Q434,356,395.5,395.5Q357,435,303.5,467.5Q250,500,200,461.5Q150,423,99,395Q48,367,38,308.5Q28,250,46.5,196.5Q65,143,95,88.5Q125,34,187.5,38.5Q250,43,308,45.5Q366,48,407.5,91.5Q449,135,466.5,192.5Q484,250,459,303Z;
                      M444,304Q436,358,400,403Q364,448,307,469.5Q250,491,193.5,468Q137,445,105.5,398.5Q74,352,59.5,301Q45,250,59.5,199Q74,148,101.5,94.5Q129,41,189.5,32.5Q250,24,304.5,42Q359,60,410.5,93.5Q462,127,457,188.5Q452,250,444,304Z;
                      M468.5,306Q443,362,404.5,406.5Q366,451,308,453Q250,455,192,453Q134,451,92,408.5Q50,366,44.5,308Q39,250,41,190Q43,130,89.5,91Q136,52,193,35Q250,18,309.5,31Q369,44,417.5,85Q466,126,480,188Q494,250,468.5,306Z;
                      M447.5,306Q444,362,398,394.5Q352,427,301,456Q250,485,190.5,470.5Q131,456,95.5,407.5Q60,359,55,304.5Q50,250,44,188.5Q38,127,86,88.5Q134,50,192,25.5Q250,1,309,23.5Q368,46,405.5,92.5Q443,139,447,194.5Q451,250,447.5,306Z;
                      M459,306Q445,362,402,400Q359,438,304.5,449.5Q250,461,188,463Q126,465,90,414Q54,363,35.5,306.5Q17,250,35,193Q53,136,98.5,101Q144,66,197,36Q250,6,303,36.5Q356,67,391,108Q426,149,449.5,199.5Q473,250,459,306Z;
                      M457,305.5Q443,361,407.5,411.5Q372,462,311,472Q250,482,193.5,463.5Q137,445,106.5,397.5Q76,350,58.5,300Q41,250,57,199Q73,148,99.5,91.5Q126,35,188,19Q250,3,307.5,27Q365,51,396,99.5Q427,148,449,199Q471,250,457,305.5Z;
                      M458,303.5Q436,357,399,400Q362,443,306,458.5Q250,474,198.5,451Q147,428,96,398Q45,368,45,309Q45,250,51.5,194.5Q58,139,92,87.5Q126,36,188,33Q250,30,310,36Q370,42,396.5,96Q423,150,451.5,200Q480,250,458,303.5Z;

                      "
                  />
                </path>
              </svg>
            </div>
            {/* <div className="liquid-shape">
              <svg
                viewBox="0 0 500 500"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="100%"
                id="blobSvg"
              >
                <path fill="#12f7ff">
                  <animate
                    attributeName="d"
                    dur="10000ms"
                    repeatCount="indefinite"
                    values="
                      M458,303.5Q436,357,399,400Q362,443,306,458.5Q250,474,198.5,451Q147,428,96,398Q45,368,45,309Q45,250,51.5,194.5Q58,139,92,87.5Q126,36,188,33Q250,30,310,36Q370,42,396.5,96Q423,150,451.5,200Q480,250,458,303.5Z;
                      M457,311Q461,372,407,400Q353,428,301.5,443Q250,458,198,444Q146,430,103,395Q60,360,53,305Q46,250,44.5,190Q43,130,93.5,98Q144,66,197,40.5Q250,15,309.5,29.5Q369,44,412,88Q455,132,454,191Q453,250,457,311Z;
                      M459,303Q434,356,395.5,395.5Q357,435,303.5,467.5Q250,500,200,461.5Q150,423,99,395Q48,367,38,308.5Q28,250,46.5,196.5Q65,143,95,88.5Q125,34,187.5,38.5Q250,43,308,45.5Q366,48,407.5,91.5Q449,135,466.5,192.5Q484,250,459,303Z;
                      M444,304Q436,358,400,403Q364,448,307,469.5Q250,491,193.5,468Q137,445,105.5,398.5Q74,352,59.5,301Q45,250,59.5,199Q74,148,101.5,94.5Q129,41,189.5,32.5Q250,24,304.5,42Q359,60,410.5,93.5Q462,127,457,188.5Q452,250,444,304Z;
                      M468.5,306Q443,362,404.5,406.5Q366,451,308,453Q250,455,192,453Q134,451,92,408.5Q50,366,44.5,308Q39,250,41,190Q43,130,89.5,91Q136,52,193,35Q250,18,309.5,31Q369,44,417.5,85Q466,126,480,188Q494,250,468.5,306Z;
                      M447.5,306Q444,362,398,394.5Q352,427,301,456Q250,485,190.5,470.5Q131,456,95.5,407.5Q60,359,55,304.5Q50,250,44,188.5Q38,127,86,88.5Q134,50,192,25.5Q250,1,309,23.5Q368,46,405.5,92.5Q443,139,447,194.5Q451,250,447.5,306Z;
                      M459,306Q445,362,402,400Q359,438,304.5,449.5Q250,461,188,463Q126,465,90,414Q54,363,35.5,306.5Q17,250,35,193Q53,136,98.5,101Q144,66,197,36Q250,6,303,36.5Q356,67,391,108Q426,149,449.5,199.5Q473,250,459,306Z;
                      M457,305.5Q443,361,407.5,411.5Q372,462,311,472Q250,482,193.5,463.5Q137,445,106.5,397.5Q76,350,58.5,300Q41,250,57,199Q73,148,99.5,91.5Q126,35,188,19Q250,3,307.5,27Q365,51,396,99.5Q427,148,449,199Q471,250,457,305.5Z;
                      M458,303.5Q436,357,399,400Q362,443,306,458.5Q250,474,198.5,451Q147,428,96,398Q45,368,45,309Q45,250,51.5,194.5Q58,139,92,87.5Q126,36,188,33Q250,30,310,36Q370,42,396.5,96Q423,150,451.5,200Q480,250,458,303.5Z;

                      "
                  />
                </path>
              </svg>
            </div> */}
          </div>
        </div>
      </section>
      <section id="About" className="about">
        <div
          className="img-about"
          data-aos="fade-down-left"
          data-aos-duration="1000"
        >
          <img src="./profile.png" alt />
          <div className="color-blour" />
          <div className="info-about1" data-aos="fade-up-right">
            <span>1+</span>
            <p>Years of Experience</p>
          </div>
          <div className="info-about2" data-aos="fade-left">
            <span>50+</span>
            <p>Project Complete</p>
          </div>
          <div className="info-about3" data-aos="fade-up-right">
            <span>10+</span>
            <p>MERN Project</p>
          </div>
        </div>
        <div className="about-content" data-aos="fade-up-right">
          <span>Let Me introduce myself</span>
          <h2 data-aos="fade-down-left">About Me</h2>
          <h3>A story of good</h3>
          <p data-aos="flip-left">
            My Name is Mrityunjoy Panday I am Experience Full Stack Web
            Developer with over a year of professional expertise.Proficient in{" "}
            <b>
              {" "}
              HTML, CSS, Bootstrap, JavaScript, React.js, Node.js,Mongodb,Sql
            </b>{" "}
            and Firebase, I am combines technical prowess with cretive flair to
            build exceptional digital solutions.With a passion for innovation
            and a keen eye for detail, i am provide thrives on delivering
            user-centric and robust Web applictions.Constantly honing my skills
            and staying abreast for industry trends.
          </p>
          <div className="btn-box" data-aos="flip-right">
            <a href="#" className="btn">
              Red More!
            </a>
          </div>
        </div>
      </section>
      <section id="Services" className="services">
        <div className="main-text">
          <span>What i will do for You</span>
          <h2 data-aos="flip-up">Our Services</h2>
        </div>
        <div className="section-services">
          <div className="services-box " data-aos="flip-down">
            <div className="icos">
              <i className="bx bxs-layer service-icon" />
            </div>
            <h3>Web Designer</h3>
            <p>
              I am Experience Full Stack Web Developer with over a year of
              professional expertise. Designer in{" "}
              <d>CSS, Bootstrap, React.js, Animate libery </d> I am combines
              technical prowess with cretive flair to build exceptional digital
              solutions.
            </p>
            <div className="btn-box services-btn">
              <a href="#" className="btn" data-aos="zoom-in-down">
                Read More
              </a>
            </div>
          </div>
          <div className="services-box" data-aos="zoom-in-up">
            <div className="icos">
              <i className="bx bx-code-alt service-icon" />
            </div>
            <h3>Web Developer</h3>
            <p>
              I am Experience Full Stack Web Developer with over a year of
              professional expertise. Work in{" "}
              <b>
                {" "}
                HTML, CSS, Bootstrap, JavaScript, React.js, Node.js, Mongodb,
                Sql,
              </b>{" "}
              I am combines technical prowess with cretive flair to build
              exceptional digital solutions.
            </p>
            <div className="btn-box services-btn" data-aos="zoom-in-down">
              <a href="#" className="btn">
                Read More
              </a>
            </div>
          </div>
          <div className="services-box" data-aos="zoom-in">
            <div className="icos">
              <i className="bx bx-desktop service-icon" />
            </div>
            <h3>Full Stack Developer</h3>
            <p>
              I am Experience Full Stack Web Developer with over a year of
              professional expertise.Proficient in{" "}
              <b>
                {" "}
                HTML, CSS, Bootstrap, JavaScript, React.js, Node.js,Mongodb,Sql
              </b>{" "}
              and Firebase, I am combines technical prowess with cretive flair
              to build exceptional digital solutions.With a passion for
              innovation and a keen eye for detail, i am provide thrives on
              delivering user-centric and robust Web applictions.Constantly
              honing my skills and staying abreast for industry trends.
            </p>
            <div className="btn-box services-btn" data-aos="zoom-in-down">
              <a href="#" className="btn">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="Skills" className="skills">
        <div className="main-text">
          <span>technical and professional</span>
          <h2>My Skills</h2>
        </div>
        <div className="skill-main">
          <div className="skill-left" data-aos="zoom-in-right">
            <h3>Technical Skills</h3>
            <div className="skill-bar">
              <div className="info">
                <p>HTML</p>
                <p>72%</p>
              </div>
              <div className="bar">
                <span className="html" />
              </div>
            </div>
            <div className="skill-bar">
              <div className="info">
                <p>CSS</p>
                <p>70%</p>
              </div>
              <div className="bar">
                <span className="css" />
              </div>
            </div>
            <div className="skill-bar">
              <div className="info">
                <p>Bootstrap</p>
                <p>80%</p>
              </div>
              <div className="bar">
                <span className="bootstrap" />
              </div>
            </div>
            <div className="skill-bar">
              <div className="info">
                <p>JavaScript</p>
                <p>75%</p>
              </div>
              <div className="bar">
                <span className="JavaScript" />
              </div>
            </div>
            <div className="skill-bar">
              <div className="info">
                <p>React.js</p>
                <p>70%</p>
              </div>
              <div className="bar">
                <span className="react" />
              </div>
            </div>
            <div className="skill-bar">
              <div className="info">
                <p>Node.Js</p>
                <p>65%</p>
              </div>
              <div className="bar">
                <span className="node" />
              </div>
            </div>
            <div className="skill-bar">
              <div className="info">
                <p>Mongodb</p>
                <p>60%</p>
              </div>
              <div className="bar">
                <span className="mongodb" />
              </div>
            </div>
            <div className="skill-bar">
              <div className="info">
                <p>SQL</p>
                <p>50%</p>
              </div>
              <div className="bar">
                <span className="sql" />
              </div>
            </div>
          </div>
          <div className="skill-right" data-aos="zoom-out">
            <h3>professional Skills</h3>
            <div className="professionl skills">
              <div className="box">
                <div className="circel" data-dots={90} data-percent={90} />
                <div className="text">
                  <big>90%</big>
                  <small>Team Work</small>
                </div>
              </div>
              <div className="box">
                <div className="circel" data-dots={80} data-percent={80} />
                <div className="text">
                  <big>80%</big>
                  <small>Creativity</small>
                </div>
              </div>
              <div className="box">
                <div className="circel" data-dots={55} data-percent={55} />
                <div className="text">
                  <big>55%</big>
                  <small>Project Mangement</small>
                </div>
              </div>
              <div className="box">
                <div className="circel" data-dots={70} data-percent={70} />
                <div className="text">
                  <big>70%</big>
                  <small>Comiuncation</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="Protfolio" className="protfolio">
        <div className="main-text">
          <span>What i will do for you</span>
          <h2>Latest Project</h2>
        </div>
        <div className="protfolio-gallery" data-aos="zoom-out-up">
          <div className="port-box">
            <div className="port-img">
              <img src="./Cocing.png" alt="cocing photo" />
            </div>
            <div className="port-content">
              <h3>Successhikha</h3>
              <p>
                Successhikha is Cocing Instetute Every Feture available and made
                by Advance technology in react.js
              </p>
              <a href="https://successhiksha-website-mrjoypanday.vercel.app/">
                <i className="bx bx-link-external" />
              </a>
            </div>
          </div>

          <div className="port-box" data-aos="zoom-out-right">
            <div className="port-img">
              <img src="./Youtube.png" alt />
            </div>
            <div className="port-content">
              <h3>Youtube</h3>
              <p>
                I am clone Youtube on create in react.js and Free API.
                Everything On Youtube future available.
              </p>
              <a href="https://tubehub-delta.vercel.app/">
                <i className="bx bx-link-external" />
              </a>
            </div>
          </div>
          <div className="port-box" data-aos="zoom-out-left">
            <div className="port-img">
              <img src="./Ecomm.png" alt />
            </div>
            <div className="port-content">
              <h3>Ecommerce Store</h3>
              <p>
                This is a E-Commerce Website and Full function available.
                Product Create bye Everything. Made by React.js, Node.Js,
                Express.Js & Mongodb.
              </p>
              <a href="https://fontend-seven.vercel.app/">
                <i className="bx bx-link-external" />
              </a>
            </div>
          </div>
          <div className="port-box" data-aos="fade-up" data-aos-duration="3000">
            <div className="port-img">
              <img src="./infoAidteach.png" alt />
            </div>
            <div className="port-content">
              <h3>info Aidteach</h3>
              <p>
                info Aidteach is a professional IT Service and i clone there
                website Advance technology in react.js
              </p>
              <a href="https://info-aidtech.vercel.app/">
                <i className="bx bx-link-external" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="Contact" className="contact">
        <div className="main-text">
          <span>Ask me Question</span>
          <h2>Contact Me</h2>
        </div>
        <form
          action=""
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <input type="text" placeholder="Enter Your Name" required />
          <input type="email" placeholder="Enter Your Email" required />
          <input type="text" placeholder="Enter Your Address" required />
          <input type="number" placeholder="Enter Phone Number" required />
          <textarea
            name
            id
            cols={30}
            rows={10}
            placeholder="Message"
            defaultValue={""}
          />
          <div className="btn-box formBtn">
            <button type="submit" className="btn">
              Send Message
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default App;
