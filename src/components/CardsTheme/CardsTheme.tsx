import './style.css';

import { useState } from 'react';
import { cardsPokemons, cardsSeries } from '../../data/cards';
import ContainerTheme from '../ContainerTheme/ContainerTheme';

function CardsTheme() {
  const [selectTheme, setSelectTheme] = useState('series');

  const handleToggleThemeCards = (theme: string) => {
    setSelectTheme(theme);
  };

  return (
    <section>
      <div className="content-box">
        <h1 className="content-box__title">✨ Jogo da Memória ✨</h1>
        <h2 className="content-box__subtitle">Escolha um tema para jogar</h2>

        <div className="group-buttons">
          <button
            onClick={() => handleToggleThemeCards('series')}
            type="button"
            className="button button--series"
          >
            Séries
          </button>
          <button
            onClick={() => handleToggleThemeCards('pokemons')}
            type="button"
            className="button button--pokemons"
          >
            Pokémons
          </button>
        </div>
      </div>

      {selectTheme === 'series' && (
        <ContainerTheme theme={cardsSeries} title="Séries" />
      )}

      {selectTheme === 'pokemons' && (
        <ContainerTheme theme={cardsPokemons} title="Pokémons" />
      )}
    </section>
  );
}

export default CardsTheme;
