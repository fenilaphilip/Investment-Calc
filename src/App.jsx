import { useState } from "react";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1500,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput(preValue => {
      return {
        ...preValue,
        [inputIdentifier]: +newValue,
      }
    })
  }
  return (<>
    <UserInput userInput={userInput} onChange={handleChange} />
    {!inputIsValid && (
      <p className="center">Please enter a duration greater than zero.</p>
    )}
    {inputIsValid && <Results input={userInput} />}
  </>
  )
}

export default App;