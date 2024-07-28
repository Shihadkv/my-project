import React from 'react';
import { motion } from "framer-motion";

const DropIndicator = ({ beforeId, column }) => {
  return (
    <motion.div
      data-before={beforeId}
      data-column={column}
      layout
      className="h-5 w-full opacity-0"
    />
  );
};

export default DropIndicator;
