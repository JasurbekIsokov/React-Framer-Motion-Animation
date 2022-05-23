import { motion } from "framer-motion";
import React, { useRef } from "react";

const Drag = () => {
  const ref = useRef(null);

  return (
    <div className="dragCard">
      <motion.div className="drag-area" ref={ref} />
      {/*  Manashu div bizga kakbutta devor vazifasini bajaradi . 
       Shu divdan ichidagi div chiiqib ketmaydi */}
      <motion.div drag dragConstraints={ref} />
      {/* dragConstraints cardimizni drag-areadan chiqib ketmasligini taminlaydi */}
    </div>
  );
};
