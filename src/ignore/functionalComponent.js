import React from 'react';
import PropTypes from 'prop-types';

function Food({foodName, evalutaion, rate}) {
  return (
  <div>I like {foodName}, eval = {evalutaion}, and {rate}</div>
  );
}

const Foods = [
  {
    id: 1,
    name: "pasta",
    evalutaion: "tasty",
    rating: 4.8,
  },
  {
    id: 2,
    name: "chicken",
    evalutaion: "good",
    rating: 50,
  },
  {
    id: 3,
    name: "burger",
    evalutaion: "sexy",
    rating: 92.152,
  },
  {
    id: 4,
    name: "sushi",
    evalutaion: "fuck japan",
    rating: 44789,
  }
];

Foods.propTypes = {
  name: PropTypes.string.isRequired,
  evaluation: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
}

function App() {
  return (
    <div className="App">
      {/* {Foods.map(food => (
        <Food foodName={food.name} evalutaion={food.evalutaion} />
      ))} */}
      
      {Foods.map(renderFood)}
    </div>
  );
}

function renderFood(food) {
  return <Food key={food.id} foodName={food.name} evalutaion={food.evalutaion} rate={food.rating} />
}

export default App;
