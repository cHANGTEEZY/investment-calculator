import React from "react";

const InvestmentInput = ({ onChange, userInput }) => {
  return (
    <section id="user-input">
      <div className="user-input">
        <p>
          <label htmlFor="user-input">Initial Investment </label>
          <input
            type="number"
            name="initialInvestment"
            required
            value={userInput.initialInvestment}
            onChange={onChange}
          />
        </p>
        <p>
          <label htmlFor="user-input">Annual Investment</label>
          <input
            type="number"
            name="annualInvestment"
            required
            value={userInput.annualInvestment}
            onChange={onChange}
          />
        </p>
      </div>
      <div className="user-input">
        <p>
          <label htmlFor="input">Expected Return</label>
          <input
            type="number"
            name="expectedReturn"
            required
            value={userInput.expectedReturn}
            onChange={onChange}
          />
        </p>
        <p>
          <label htmlFor="user-input">Duration</label>
          <input
            type="number"
            name="duration"
            required
            value={userInput.duration}
            onChange={onChange}
          />
        </p>
      </div>
    </section>
  );
};

export default InvestmentInput;
