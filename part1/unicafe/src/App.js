import React, { useState } from 'react'


const Header = props => {
  return (
    <h1>{props.name}</h1>
  );
}

const Statistic = ({text, value}) => {
  return (
    text === "positive" ? (
      <tr><td>{text} {value} %</td></tr>
    ) : (
      <tr><td>{text} {value}</td></tr>
    )
  );
}

const Statistics = ({clicks}) => {
  const total = clicks.good + clicks.neutral + clicks.bad
  const average = (clicks.good * 1 + clicks.bad * -1) / total
  const positive = clicks.good * (100/total)
  return (
    total === 0 ? (<div> No feedback given </div>) : (
    <div>
      <table>
        <tbody>
          <Statistic text="good" value={clicks.good} />
          <Statistic text="neutral" value={clicks.neutral} />
          <Statistic text="bad" value={clicks.bad} />
          <Statistic text="all" value={total} />
          <Statistic text="average" value={average} />
          <Statistic text="positive" value={positive} />
        </tbody>
      </table>
    </div>
    )
  )
}


const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
)}

const App = () => {
  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const handleGoodClick = () => {
    setClicks({...clicks, good: clicks.good + 1})
  }

  const handleNeutralClick = () => {
    setClicks({...clicks, neutral: clicks.neutral + 1})
  }

  const handleBadClick = () => {
    setClicks({...clicks, bad: clicks.bad + 1})
  }


  return (
    <div>
      <Header name="Customer feedback" />
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      <Header name="Statistics" />
      <Statistics clicks={clicks} />
    </div>
  );
}

export default App