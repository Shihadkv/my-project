import React, { useState } from 'react';
import { FiTrash } from "react-icons/fi";
import { FaFire } from "react-icons/fa";

const BurnBarrel = ({ setCards }) => {
  const [active, setActive] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setActive(true);
  };

  const handleDragLeave = () => {
    setActive(false);
  };

  const handleDrop = (e) => {
    const cardId = e.dataTransfer.getData("cardId");

    setCards((pv) => pv.filter((c) => c.id !== cardId));

    setActive(false);
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`flex h-20 w-28 shrink-0 items-center justify-center rounded transition-colors ${
        active ? "bg-red-900/50" : "bg-red-900/20"
      }`}
    >
      {active ? (
        <FaFire className="text-xl text-red-900" />
      ) : (
        <FiTrash className="text-xl text-red-900" />
      )}
    </div>
  );
};

export default BurnBarrel;
