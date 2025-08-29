import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/pic1.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>🧳 Travel List App ✈️</h3>
          <p>
   A smart and minimal travel packing app built with React. 
   Easily add, check off, and remove items for your next trip 
   — perfect for staying organized and never forgetting anything again!
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>Leaflet</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/pic2.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>💸 Bill Splitting Web App 👥</h3>
          <p>
         A React-based app that helps you split expenses fairly between you and a friend. 
         Just enter the bill amount, how much each person paid, and let the app calculate who owes what. 
         Clean design and perfect for quick splits at restaurants, events, or trips!
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>Typescript</span>
            <span>Redux</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/pic3.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>🍕 Pizza Menu Web App 🍴</h3>
          <p>
         A modern, dynamic pizza menu built with React. 
         This project displays a list of delicious pizzas with their availability, pricing, and preparation status. 
         A great project for learning conditional rendering, props, and basic component structure in React!
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>Hooks</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
