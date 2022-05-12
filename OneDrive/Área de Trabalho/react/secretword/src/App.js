
// React

import {useCallback, UseEffect, useState, UseState} from "react";

// data
import {wordsList} from "./data/words";
// CSS
import './App.css';

// Components

import StartScreen from './components/StartScreen';
import Game from "./components/Game";
import GameOver from "./components/GameOver";







const stages =[
  {id:1, name:"start"},
  {id:2, name:"game"},
  {id:3, name:"end"},
];

function App() {
  const[gameStage,setGameStage] = useState(stages[0].name);
  const[words] = useState(wordsList);

  const [pickdWord, setPickWord] = useState("");
  const [pickdCategory, setPickdCategory] = useState("");
  const [letters,setLetters] = useState([]);

  const pickdCategoryAndCategory = () =>{
//   pick a rando category
     const categories = Object.keys(words);
     const category =
     categories[Math.floor(Math.random() * Object.keys(categories).length)];

     console.log(category);
    //  pick a random word
     const word = words[category][Math.floor(Math.random() * words[category].length)];
     console.log(word);

     return{word,category}
  }
  
  // starts the secret word game
  const startGame = () => {
    //  pick word and pick category
    const {word,category} = pickdCategoryAndCategory();

    //  create an arrat of letters
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l)=> l.toLowerCase());

    
    console.log(word,category);
    console.log (wordLetters);

//   fill states 
setPickWord(word);
setPickdCategory(category);
setLetters(letters);

    setGameStage(stages[1].name);
  }
  // process the letter input
  const VerifyLetter = () =>{
    setGameStage(stages[2].name);
  }
  // restars the game 
  const retry = () =>{
    setGameStage(stages[0].name)
  }
  
  // console.log(words);

  return (
    <div className="App">
      {gameStage === 'start' &&  <StartScreen startGame={startGame} />}
      {gameStage === 'game' &&  < Game VerifyLetter ={VerifyLetter}/>}
      {gameStage === 'end' &&  <GameOver retry={retry} />}
    </div>
  );
}

export default App;
