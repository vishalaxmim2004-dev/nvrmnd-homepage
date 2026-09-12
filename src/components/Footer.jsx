import "./Footer.css";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer id="contact" className="footer">

      {/* TOP */}
      <motion.div
        className="footer-top"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span>LET'S WORK TOGETHER</span>
        <span>GET IN TOUCH ↗</span>
      </motion.div>

      {/* MAIN HEADING */}
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        HAVE A
        <br />
        PROJECT
        <br />
        IN MIND?
      </motion.h2>

      {/* EMAIL */}
      <motion.a
        className="footer-email"
        href="mailto:hello@nvrmndstudio.com"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        HELLO@NVRMNDSTUDIO.COM ↗
      </motion.a>

      {/* BOTTOM */}
      <div className="footer-bottom">

        <span>© 2026 NVRMND STUDIO</span>

        <div className="footer-links">
          <a href="#" onClick={(e) => e.preventDefault()}>
            INSTAGRAM
          </a>

          <a href="#" onClick={(e) => e.preventDefault()}>
            LINKEDIN
          </a>

          <a href="#" onClick={(e) => e.preventDefault()}>
            BEHANCE
          </a>
        </div>

        <span>CREATIVE DIGITAL STUDIO</span>

      </div>

    </footer>
  );
}

export default Footer;