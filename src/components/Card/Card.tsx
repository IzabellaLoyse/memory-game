import { ICardProps } from '../../interfaces/cardProps';
import './style.css';

function Card({ flipped = false, cardBack, handleClick, id }: ICardProps) {
  const cardContentClassNames = ['card__content'];
  flipped && cardContentClassNames.push('card__content--flipped');

  const handleClickCard = (id: string) => {
    if (handleClick) handleClick(id);
  };

  return (
    <article className="card" onClick={() => handleClickCard(id)}>
      <div className={cardContentClassNames.join(' ')}>
        <div className="card__face card__face--front">?</div>
        <div className="card__face card__face--back">{cardBack}</div>
      </div>
    </article>
  );
}

export default Card;
