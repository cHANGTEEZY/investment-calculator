import Header from "./components/Header";
import InvestmentInput from "./components/InvestmentInput";
import { useState } from "react";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputDataIsValid = userInput.duration >= 1;

  function handleChange(e) {
    setUserInput({ ...userInput, [e.target.name]: +e.target.value });
  }

  return (
    <>
      <Header />
      <InvestmentInput userInput={userInput} onChange={handleChange} />
      {inputDataIsValid ? (
        <Results userInput={userInput} />
      ) : (
        <>
          <p className="error">Duration must be atleast 1 year</p>
        </>
      )}
    </>
  );
}

export default App;
