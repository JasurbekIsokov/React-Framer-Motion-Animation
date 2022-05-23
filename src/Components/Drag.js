import { motion } from "framer-motion";
import React, { useRef } from "react";

const Drag = () => {
  const ref = useRef(null);

  return (
    <div className="dragCard">
      <motion.div className="drag-area" ref={ref} />
    </div>
  );
};
