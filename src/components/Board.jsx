import React, { useEffect, useState } from 'react';
import Column from './Column';
import BurnBarrel from './DeleteTask';
import { DEFAULT_CARDS } from './defaultCards';
import Navbar from './Navbar'

const Board = () => {
  const [cards, setCards] = useState(DEFAULT_CARDS);

  const[check, setChecked] = useState(false)

  useEffect(()=>{
    check && localStorage.setItem("cards", JSON.stringify(cards))
  }, [cards])

  useEffect(()=>{
    const cardsData =   localStorage.getItem("cards")
    setCards(cardsData? JSON.parse(cardsData): [])
    setChecked(true)
  }, [])

  return (



    <div className="w-screen h-screen bg-neutral-900 text-neutral-50 flex justify-center items-center">
    <div className="fixed top-0 left-0 right-0 bg-neutral-800 z-10">
    <Navbar  />
    </div>
  <div className="flex h-full w-full gap-3 p-20 justify-center">
    <Column
      title="Backlog"
      column="backlog"
      headingColor="text-neutral-500"
      cards={cards}
      setCards={setCards}
    />
    <Column
      title="TODO"
      column="todo"
      headingColor="text-yellow-200"
      cards={cards}
      setCards={setCards}
    />
    <Column
      title="In progress"
      column="doing"
      headingColor="text-blue-200"
      cards={cards}
      setCards={setCards}
    />
    <Column
      title="Complete"
      column="done"
      headingColor="text-emerald-200"
      cards={cards}
      setCards={setCards}
    />
    <BurnBarrel setCards={setCards} />
  </div>
</div>

    
    
  );
};

export default Board;
