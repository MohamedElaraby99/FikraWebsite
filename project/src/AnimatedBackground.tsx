import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "./components/ThemeContext"; // Adjust the import path as needed

const AnimatedBackground = () => {
  const { theme } = useContext(ThemeContext);
  const circleColor = theme === "dark" ? "skyblue" : "skyblue";

  const circles = Array.from({ length: 3 }, (_, i) => ({
    id: i,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
  }));

  return (
    <>
      {circles.map((circle) => (
        <motion.div
          key={circle.id}
          initial={{ opacity: 0 }}
          animate={{
            x: [circle.x, circle.x + 30, circle.x],
            y: [circle.y, circle.y - 30, circle.y],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: Math.random() * 15 + 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            width: "20px",
            height: "20px",
            background: circleColor,
            borderRadius: "50%",
          }}
        />
      ))}
      {/* Draw lines between circles */}
      {circles.map((circle) =>
        circles.map((otherCircle) => {
          if (circle.id < otherCircle.id) {
            const length = Math.sqrt(
              Math.pow(circle.x - otherCircle.x, 2) +
                Math.pow(circle.y - otherCircle.y, 2)
            );
            const angle = Math.atan2(
              otherCircle.y - circle.y,
              otherCircle.x - circle.x
            );
            const transform = `rotate(${angle}rad)`;

            return (
              <motion.div
                key={`${circle.id}-${otherCircle.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 6 }}
                style={{
                  position: "absolute",
                  width: `${length}px`,
                  height: "2px",
                  background: circleColor,
                  top: `${circle.y}px`,
                  left: `${circle.x}px`,
                  transform,
                  transformOrigin: "top left",
                }}
              />
            );
          }
          return null;
        })
      )}
    </>
  );
};

export default AnimatedBackground;
