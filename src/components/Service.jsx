import "./service.css";
import { motion } from "framer-motion";

function Service() {
  const services = [
    {
      number: "01",
      title: "WEB DESIGN",
      text: "Bold, modern websites designed to make your brand stand out.",
    },
    {
      number: "02",
      title: "DEVELOPMENT",
      text: "Fast, responsive and interactive digital experiences.",
    },
    {
      number: "03",
      title: "BRAND EXPERIENCE",
      text: "Digital identities that connect your brand with your audience.",
    },
    {
      number: "04",
      title: "MOTION & INTERACTION",
      text: "Smooth animations and interactions that bring ideas to life.",
    },
  ];

  return (
    <section id="services" className="services">
      <div className="services-heading">
        <span>WHAT WE DO</span>
        <span>SERVICES</span>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        DIGITAL
        <br />
        EXPERIENCES
        <br />
        THAT MOVE.
      </motion.h2>

      <div className="services-list">
        {services.map((service, index) => (
          <motion.div
            className="service-item"
            key={service.number}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
          >
            <span className="service-number">{service.number}</span>

            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>

            <span className="service-arrow">↗</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Service;