import "./Process.css";
import { motion } from "framer-motion";

function Process() {
  return (
    <section id="process" className="process">
      <div className="process-top">
        <span>OUR PROCESS</span>
        <span>01 — 04</span>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        FROM IDEA
        <br />
        TO DIGITAL
        <br />
        IMPACT.
      </motion.h2>

      <div className="process-grid">
        <motion.div
          className="process-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span>01</span>
          <h3>DISCOVER</h3>
          <p>
            We understand your brand, audience and goals to create a clear
            digital direction.
          </p>
        </motion.div>

        <motion.div
          className="process-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span>02</span>
          <h3>DESIGN</h3>
          <p>
            We turn ideas into bold visual experiences with thoughtful
            interaction and design.
          </p>
        </motion.div>

        <motion.div
          className="process-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span>03</span>
          <h3>DEVELOP</h3>
          <p>
            We build fast, responsive and engaging digital experiences.
          </p>
        </motion.div>

        <motion.div
          className="process-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span>04</span>
          <h3>LAUNCH</h3>
          <p>
            We polish every detail and deliver an experience ready for the
            real world.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Process;