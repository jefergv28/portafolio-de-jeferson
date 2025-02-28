import { motion } from "framer-motion";

//variantes
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};
//calcular el índice inverso para el retraso starggred
const reverseIndex = (index) => {
  const totalSteps = 6; // numero de pasos
  return totalSteps - index - 1;
};
const Stairs = () => {
  return (
    <>
      {/*renderice 8 divs de movimiento, cada uno de los cuales representa una configuración de la escalera
      cada div tendrá la misma animación definida por el objeto StairAnimation
      el retraso para cada div se calcula sinámicamente en función de su índice invertido
      creando un efecto escalonado con un retraso decreciente para cada paso posterior
      */}
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
