import { useState } from "react";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1500,
    expectedReturn: 6,
    duration: 12
  });
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
    <Results input={userInput} />
  </>
  )
}

export default App
