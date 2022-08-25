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

  const [matches, setMatches] = useState(0);
  const [moves, setMoves] = useState(0);

  const firstCard = useRef<ICardProps | null>(null);
  const secondCard = useRef<ICardProps | null>(null);
  const openCard = useRef<boolean>(false);

  const handleFlippedCard = (id: string) => {
    const newStateCards = stateCards.map((card) => {
      if (card.id !== id) return card;
      if (card.flipped) return card;

      if (openCard.current && firstCard.current && secondCard.current) {
        firstCard.current.flipped = false;
        secondCard.current.flipped = false;

        firstCard.current = null;
        secondCard.current = null;
        openCard.current = false;
      }

      card.flipped = true;

      if (firstCard.current === null) {
        firstCard.current = card;
      } else if (secondCard.current === null) {
        secondCard.current = card;
      }

      if (firstCard.current && secondCard.current) {
        if (firstCard.current.cardBack === secondCard.current.cardBack) {
          firstCard.current = null;
          secondCard.current = null;

          setMatches((prevState) => prevState + 1);
        } else {
          openCard.current = true;
        }

        setMoves((prevState) => prevState + 1);
      }

      return card;
    });

    setStateCards(newStateCards);
  };

  const handleResetGrid = () => {
    setStateCards(duplicateRegenerateSortArray(cards));

    firstCard.current = null;
    secondCard.current = null;
    openCard.current = false;
    setMatches(0);
    setMoves(0);
  };

  return (
    <>
      <div className="container-grid">
        <p>
          Movimentos: {moves} | Acertos: {matches}
        </p>
        <button
          type="button"
          onClick={() => handleResetGrid()}
          className="button button--reset"
        >
          Limpar
        </button>
      </div>

      <section className="grid">
        {stateCards.map((card) => {
          return (
            <Card key={card.id} {...card} handleClick={handleFlippedCard} />
          );
        })}
      </section>
    </>
  );
}

export default Grid;
