import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

const Results = ({ userInput }) => {
  const resultsData = calculateInvestmentResults(userInput);

  // Calculate the initial investment (assuming it should be done only for the first year)
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

  return (
    <div id="result">
      <table border={1}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {resultsData.map((yearlyData, index) => {
            // Calculate total interest and invested capital
            const totalInterest =
              yearlyData.valueEndOfYear -
              yearlyData.annualInvestment * yearlyData.year -
              initialInvestment;
            const totalAmountInvested =
              yearlyData.valueEndOfYear - totalInterest;

            return (
              <tr key={index}>
                <td>{yearlyData.year}</td>
                <td>{formatter.format(yearlyData.valueEndOfYear)}</td>
                <td>{formatter.format(yearlyData.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Results;
