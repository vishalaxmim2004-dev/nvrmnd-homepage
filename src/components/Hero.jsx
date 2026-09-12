import "./Hero.css";
import heroImage from "../assets/hero.png";
import {motion} from "framer-motion";
function Hero() {
  return (
    <>
      {/* =========================
          HERO SECTION
      ========================= */}

      <section id="home" className="hero">

        <div className="hero-content">

          <motion.div className="hero-small"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
          >
            CREATIVE DIGITAL STUDIO
          </motion.div>

          <motion.h1
            initial={{opacity: 0, y: 60}}
            animate={{opacity: 1, y: 0}}
            transition={{duration:1, delay: 0.5}}
          >
            WE CREATE
            <br />
            DIGITAL
            <br />
            EXPERIENCES.
          </motion.h1>

          <motion.p className="hero-description"
            initial={{opacity: 0,y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1, delay: 0.5}}
          >
            We design bold digital experiences for brands that want
            to stand out.
          </motion.p>

        </div>


        {/* 3D IMAGE */}

        <motion.div className="hero-image"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1, delay: 0.4}}
        >
          <img
            src= {heroImage}
            alt="NVRMND creative visual"
          />
        </motion.div>


        {/* SCROLL TO EXPLORE */}

        <div
          className="hero-scroll"
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            });
          }}
        >
          <span>SCROLL TO EXPLORE ↓</span>
        </div>

      </section>


      {/* =========================
          WHAT WE DO SECTION
      ========================= */}

      <section className="what-we-do">

        <motion.div className="what-we-do-title"
          initial={{opacity: 0, y: 60}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.3}}
          transition={{duration: 0.8}}
        >

          <p>WHAT WE DO</p>

          <h2>
            WE BUILD
            <br />
            DIGITAL
            <br />
            EXPERIENCES.
          </h2>

        </motion.div>

        <motion.p className="what-we-do-description"
          initial={{opacity: 0, y: 60}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.3}}
          transition={{duration: 0.8, delay: 0.2}}
        >
          We create bold websites, digital products and creative
          experiences that help brands stand out.
        </motion.p>

      </section>
    </>
  );
}

export default Hero;