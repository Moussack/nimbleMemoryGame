import { useState } from 'react';
import './App.css';

const cardImages = [
   { src: '/img/helmet-1.png' },
   { src: '/img/potion-1.png' },
   { src: '/img/ring-1.png' },
   { src: '/img/scroll-1.png' },
   { src: '/img/shield-1.png' },
   { src: '/img/sword-1.png' },
];

function App() {
   const [cards, setCards] = useState([]);
   const [turns, setTurns] = useState(0);

   // shuffle cards
   const shuffleCards = () => {
      const shuffledCards = [...cardImages, ...cardImages]
         .sort(() => Math.random() - 0.5)
         .map((card) => ({ ...card, id: Math.random() }));

      setCards(shuffledCards);
      setTurns(0);
   };

   console.log(cards, turns);

   return (
      <div className="App">
         <h1>Nimble Memory Match</h1>
         <button onClick={shuffleCards}>New Game</button>
      </div>
   );
}

export default App;

/* Array.prototype.sort = function () {
   for (let i = this.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this[i], this[j]] = [this[j], this[i]];
   }
   return this;
};

Array.prototype.map = function (callback) {
   const result = [];
   for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i, this));
   }
   return result;
}; */
