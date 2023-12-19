import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [isValid, setIsValid] = useState(null);
  
  useEffect(() => {
    const validCard = (cardNumber) => {
      // Starting with the next to last digit and continuing with every other digit going back to the beginning of the card number, double the digit.
      const digits = cardNumber.split('').map(Number);
      const reversedDigits = digits.reverse();
      const everyOtherDoubled = reversedDigits.map((digit, index) => {
        return index % 2 === 1 ? digit * 2 : digit;
      });

      // Sum all digits in the altered number.
      const everyOtherDoubledDigits = everyOtherDoubled.map((digit) => {
        return digit < 10 ? digit : digit - 9;
      });

      const sum = everyOtherDoubledDigits.reduce((acc, digit) => acc + digit, 0);

      // If that total is a multiple of 10, the number is valid.
      setIsValid(sum % 10 === 0);
    };

    if (creditCardNumber.length > 0) {
      validCard(creditCardNumber);
    } else {
      setIsValid(null);
    }
  }, [creditCardNumber]);


  return (
    <div className="App">
      <h1>Luhn Algorithm Validator</h1>
      <label htmlFor="creditCardNumber">Enter Credit Card Number:</label>
      <input
        type="text"
        id="creditCardNumber"
        value={creditCardNumber}
        onChange={(e) => setCreditCardNumber(e.target.value)}
      />

      {isValid === null ? null : isValid ? (
        <p>Credit Card is Valid!</p>
      ) : (
        <p>Credit Card is Not Valid!</p>
      )}
    </div>
  );
}

export default App;
