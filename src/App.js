import { useEffect, useState } from "react";

const url =
  "https://v6.exchangerate-api.com/v6/17c79158ccf28915047f335f/latest/INR";
// https://www.exchangerate-api.com/docs/supported-currencies
const KEY = "17c79158ccf28915047f335f";

function App() {
  const [amount, setAmount] = useState("");

  function handleOnChange(value) {
    setAmount((amount) => value);
  }
  return (
    <div className="App">
      <div className="section-currency">
        {/* base */}
        <Base>USD</Base>
        {/* target */}
        <Target>INR</Target>
      </div>
      <div className="section-result">
        <NumberInput value={amount} handleOnChange={handleOnChange} />
        {/* result */}
        {amount && <FinalAmount value={amount} countryCode={"USD"} />}
      </div>
    </div>
  );
}

function Base({ children }) {
  return <div>{children}</div>;
}

function Target({ children }) {
  return <div>{children}</div>;
}

function NumberInput({ value, handleOnChange }) {
  return (
    <input
      type="number"
      value={value}
      autoComplete="off"
      onChange={(e) => handleOnChange(e.target.value)}
    />
  );
}

function Button({ children }) {
  return <button>{children}</button>;
}

function FinalAmount({ value, countryCode }) {
  const [finalAmount, setFinalAmount] = useState("");
  useEffect(
    function () {
      const controller = new AbortController();
      async function converter() {
        try {
          const res = await fetch(url, { signal: controller.signal });
          const data = await res.json();
          const amount = data.conversion_rates[countryCode] * +value;
          console.log(amount.toFixed(2));
          setFinalAmount(amount.toFixed(2));
        } catch (error) {
          // console.error(error);
        } finally {
        }
      }
      converter();
      return function () {
        controller.abort();
      };
    },
    [value, countryCode]
  );
  return <h3>{finalAmount}</h3>;
}

export default App;
