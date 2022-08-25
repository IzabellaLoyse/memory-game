import './style.css';

import { useState } from 'react';
import { cardsPokemons, cardsSeries } from '../../data/cards';
import Grid from '../Grid/Grid';

function CardsTheme() {
  const [isCardSeries, setIsCardSeries] = useState(false);
  const [isCardPokemons, setIsCardPokemons] = useState(false);

  const handleToggleCardsSeries = () => {
    setIsCardSeries(true);
    setIsCardPokemons(false);
  };

  const handleToggleCardsPokemons = () => {
    setIsCardPokemons(true);
    setIsCardSeries(false);
  };

  return (
    <section>
      <div className="content-box">
        <h1 className="content-box__title">✨ Jogo da Memória ✨</h1>
        <h2 className="content-box__subtitle">Escolha um tema para jogar</h2>

        <div className="group-buttons">
          <button
            onClick={() => handleToggleCardsSeries()}
            type="button"
            className="button button--series"
          >
            Séries
          </button>
          <button
            onClick={() => handleToggleCardsPokemons()}
            type="button"
            className="button button--pokemons"
          >
            Pokémons
          </button>
        </div>
      </div>

      {isCardSeries && (
        <div className="container">
          <p className="container__theme">Tema - Séries</p>
          <Grid cards={cardsSeries} />
        </div>
      )}

      {isCardPokemons && (
        <div className="container">
          <p className="container__theme">Tema - Pokémons</p>
          <Grid cards={cardsPokemons} />
        </div>
      )}
    </section>
  );
}

export default CardsTheme;
