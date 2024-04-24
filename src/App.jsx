import { useState } from "react";

//Exercise 1.6
/*------------------------------------------------------------------------------------------------- */
/*const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)
  console.log(" ")
  console.log("-------------------------------------------------")
  console.log("Good " + good)
  console.log("Neutral " + neutral)
  console.log("Bad " + bad)
  console.log("-------------------------------------------------")
 
  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={increaseGood}>Good</button>
      <button onClick={increaseNeutral}>Neutral</button>
      <button onClick={increaseBad}>Bad</button>
      <h1>Statistics</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
    </div>
  )
}*/
/*------------------------------------------------------------------------------------------------- */
//Exercise 1.7
/*------------------------------------------------------------------------------------------------- */
/*const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)
  console.log(" ")
  console.log("-------------------------------------------------")
  console.log("Good " + good)
  console.log("Neutral " + neutral)
  console.log("Bad " + bad)
  console.log("-------------------------------------------------")

  const all = good + neutral + bad
  const average = (good + neutral + bad) / 3
  const positives = all === 0 ? 0 : (good / all) * 100;
  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={increaseGood}>Good</button>
      <button onClick={increaseNeutral}>Neutral</button>
      <button onClick={increaseBad}>Bad</button>
      <h1>Statistics</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {all} </p>
      <p>Average {average}</p>
      <p>Positives {positives}</p>
    </div>
  )
}*/
/*------------------------------------------------------------------------------------------------- */
//Exercise 1.8
/*------------------------------------------------------------------------------------------------- */
/*const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)
  console.log(" ")
  console.log("-------------------------------------------------")
  console.log("Good " + good)
  console.log("Neutral " + neutral)
  console.log("Bad " + bad)
  console.log("-------------------------------------------------")

  

  const Statistics = ({ good, neutral, bad }) => {
    const all = good + neutral + bad
    const average = (good + neutral + bad) / 3
    const positives = all === 0 ? 0 : (good / all) * 100;
    return(
      <div>
        <h1>Statistics</h1>
        <p>Good {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>
        <p>All {all} </p>
        <p>Average {average}</p>
        <p>Positives {positives}</p>
      </div>
    )
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={increaseGood}>Good</button>
      <button onClick={increaseNeutral}>Neutral</button>
      <button onClick={increaseBad}>Bad</button>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}*/
/*------------------------------------------------------------------------------------------------- */
//Exercise 1.9
/*------------------------------------------------------------------------------------------------- */
/*const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
);

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const average = (good + neutral + bad) / 3
  const positives = all === 0 ? 0 : (good / all) * 100;
  return(
    <div>
      <h1>Statistics</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {all} </p>
      <p>Average {average}</p>
      <p>Positives {positives}</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)
  console.log(" ")
  console.log("-------------------------------------------------")
  console.log("Good " + good)
  console.log("Neutral " + neutral)
  console.log("Bad " + bad)
  console.log("-------------------------------------------------")

  const allComments = good + neutral + bad
  if (allComments === 0) {
    return (
      <div>
        <h1>Give Feedback</h1>
        <Button onClick={increaseGood} text="Good" />
        <Button onClick={increaseNeutral} text="Neutral" />
        <Button onClick={increaseBad} text="Bad" />
        <p>No feedback given</p>
      </div>
    )
  } else {
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={increaseGood} text="Good" />
      <Button onClick={increaseNeutral} text="Neutral" />
      <Button onClick={increaseBad} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}
}
export default App*/
/*------------------------------------------------------------------------------------------------- */
//Exercise 1.10
/*------------------------------------------------------------------------------------------------- */
/*const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
);

const StatisticGood = ({good}) => {
  return(
    <div>
      <p>Good {good}</p>
    </div>
  )
}

const StatisticNeutral = ({neutral}) => {
  return(
    <div>
      <p>Neutral {neutral}</p>
    </div>
  )
}

const StatisticBad = ({bad}) => {
  return(
    <div>
      <p>Bad {bad}</p>
    </div>
  )
}

const StatisticAll = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  return(
    <div>
      <p>All {all}</p>
    </div>
  )
}

const StatisticAverage = ({good, neutral, bad}) => {
  const average = (good + neutral + bad) / 3
  return(
    <div>
      <p>Average {average}</p>
    </div>
  )
}

const StatisticPositives = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const positives = all === 0 ? 0 : (good / all) * 100;
  return(
    <div>
      <p>Positives {positives}</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const allComments = good + neutral + bad
  if (allComments === 0) {
    return (
      <div>
        <h1>Give Feedback</h1>
        <Button onClick={increaseGood} text="Good" />
        <Button onClick={increaseNeutral} text="Neutral" />
        <Button onClick={increaseBad} text="Bad" />
        <p>No feedback given</p>
      </div>
    )
  } else {
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={increaseGood} text="Good" />
      <Button onClick={increaseNeutral} text="Neutral" />
      <Button onClick={increaseBad} text="Bad" />
      <h1>Statistics</h1>
      <StatisticGood good={good}/>
      <StatisticNeutral neutral={neutral}/>
      <StatisticBad bad={bad}/>
      <StatisticAll good={good} neutral={neutral} bad={bad}/>
      <StatisticAverage good={good} neutral={neutral} bad={bad}/>
      <StatisticPositives good={good} neutral={neutral} bad={bad}/>

    </div>
  )
}
}
export default App*/
/*------------------------------------------------------------------------------------------------- */
//Exercise 1.11
/*------------------------------------------------------------------------------------------------- */
/*const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
);

const StatisticGood = ({good}) => {
  return(
    <div>
      <p>Good {good}</p>
    </div>
  )
}

const StatisticNeutral = ({neutral}) => {
  return(
    <div>
      <p>Neutral {neutral}</p>
    </div>
  )
}

const StatisticBad = ({bad}) => {
  return(
    <div>
      <p>Bad {bad}</p>
    </div>
  )
}

const StatisticAll = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  return(
    <div>
      <p>All {all}</p>
    </div>
  )
}

const StatisticAverage = ({good, neutral, bad}) => {
  const average = (good + neutral + bad) / 3
  return(
    <div>
      <p>Average {average}</p>
    </div>
  )
}

const StatisticPositives = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const positives = all === 0 ? 0 : (good / all) * 100;
  return(
    <div>
      <p>Positives {positives}</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGood = () => setGood(good + 1);
  const increaseNeutral = () => setNeutral(neutral + 1);
  const increaseBad = () => setBad(bad + 1);

  const allComments = good + neutral + bad;

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={increaseGood} text="Good" />
      <Button onClick={increaseNeutral} text="Neutral" />
      <Button onClick={increaseBad} text="Bad" />

      {allComments === 0 ? (
        <p>No feedback given</p>
      ) : (
        <div>
          <h1>Statistics</h1>
          <table>
            <tbody>
              <tr>
                <td><StatisticGood good={good}/></td>
              </tr>
              <tr>
                <td><StatisticNeutral neutral={neutral}/></td>
              </tr>
              <tr>
                <td><StatisticBad bad={bad}/></td>
              </tr>
              <tr>
                <td><StatisticAll good={good} neutral={neutral} bad={bad}/></td>
              </tr>
              <tr>
                <td><StatisticAverage good={good} neutral={neutral} bad={bad}/></td>
              </tr>
              <tr>
                <td><StatisticPositives good={good} neutral={neutral} bad={bad}/></td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default App;*/
/*------------------------------------------------------------------------------------------------- */
//Exercise 1.11
/*------------------------------------------------------------------------------------------------- */
/*const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const [selected, setSelected] = useState(0);

  const getRandomAnecdote = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber);
  };

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <button onClick={getRandomAnecdote}>Next anecdote</button>
    </div>
  );
};

export default App;*/
/*------------------------------------------------------------------------------------------------- */

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  //Cómo anecdotes es un array, y quiero votar por los elementos de un array, necesito otro array que iguale su longitud pero que se inicialice en 0, ya que no se a elegido por
  // cual anecdota votar.
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0)); //Se establecen los votos en 0

  const getRandomAnecdote = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber);
  };

  const voteAnecdote = () => {
    const updatedVotes = [...votes]; //Se hace una copia del array "votes"
    console.log(updatedVotes);
    updatedVotes[selected] += 1; // En la copia del array se elige la anecdota que el usuario eligio y se le suma uno
    setVotes(updatedVotes); // Luego se actualiza el array original con la copia.
  };

  // Encontrar el índice de la anécdota más votada
  const mostVotedIndex = votes.indexOf(Math.max(...votes));

  if (votes.some(vote => vote > 0)) { //Si alun voto es mayor a 0
    return (
      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <p>Has {votes[selected]} votes</p>
        <button onClick={getRandomAnecdote}>Next anecdote</button>
        <button onClick={voteAnecdote}>Vote</button>
        {votes.length > 1 && (
          <>
            <h1>Most voted anecdote</h1>
            <p>{anecdotes[mostVotedIndex]}</p>
            <p>Has {votes[mostVotedIndex]} votes</p>
          </>
        )}
      </div>
    );
  }
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Has {votes[selected]} votes</p>
      <button onClick={getRandomAnecdote}>Next anecdote</button>
      <button onClick={voteAnecdote}>Vote</button>
    </div>
  );
};

export default App;
