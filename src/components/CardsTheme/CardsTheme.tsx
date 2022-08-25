// import { Container } from './style';

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
    <div>
      <div>
        <h1>Jogo da Memoria</h1>
        <h2>Escolha um tema para jogar</h2>
        <button onClick={() => handleToggleCardsSeries()}>Series</button>
        <button onClick={() => handleToggleCardsPokemons()}>Pokémons</button>
      </div>

      {isCardSeries && (
        <div className="container">
          <h2>Tema - Series</h2>
          <Grid cards={cardsSeries} />
        </div>
      )}

      {isCardPokemons && (
        <div className="container">
          <h2>Tema - Pokemons</h2>
          <Grid cards={cardsPokemons} />
        </div>
      )}
    </div>
  );
}

export default CardsTheme;
