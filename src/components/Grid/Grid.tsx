import { useRef, useState } from 'react';
import { ICardProps } from '../../interfaces/cardProps';
import { IGridProps } from '../../interfaces/gridProps';
import { duplicateRegenerateSortArray } from '../../utils/card-utils';
import Card from '../Card/Card';
import './style.css';

function Grid({ cards }: IGridProps) {
  const [stateCards, setStateCards] = useState(() => {
    return duplicateRegenerateSortArray(cards);
  });

  const firstCard = useRef<ICardProps | null>(null);
  const secondCard = useRef<ICardProps | null>(null);

  const handleFlippedCard = (id: string) => {
    const newStateCards = stateCards.map((card) => {
      if (card.id !== id) return card;
      if (card.flipped) return card;

      card.flipped = true;

      if (firstCard.current === null) {
        firstCard.current = card;
      } else if (secondCard.current === null) {
        secondCard.current = card;
      }

      return card;
    });

    setStateCards(newStateCards);
  };

  return (
    <section className="grid">
      {stateCards.map((card) => {
        return <Card key={card.id} {...card} handleClick={handleFlippedCard} />;
      })}
    </section>
  );
}

export default Grid;
