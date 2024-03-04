import { useEffect, useState } from "react";
import SelectInput from "./SelectInput";

const url =
  "https://v6.exchangerate-api.com/v6/17c79158ccf28915047f335f/latest/";
// https://www.exchangerate-api.com/docs/supported-currencies
const KEY = "17c79158ccf28915047f335f";

function App() {
  const [amount, setAmount] = useState("");
  const [countryCode, setCountryCode] = useState(["AED", "AED"]); // default is for UAE

  function handleOnChange(value) {
    setAmount((amount) => value);
  }

  function handleSwap() {
    setCountryCode((countryCode) => [countryCode[1], countryCode[0]]);
  }

  return (
    <div className="App">
      <div className="section-currency">
        {/* base */}
        <Base>
          <SelectInput
            country={countryCode}
            handleChange={setCountryCode}
            index={0}
          />
        </Base>
        {/* convert to symbol */}
        <div>
          <i className="fa-solid fa-right-long"></i>
        </div>
        {/* target */}
        <Target>
          <SelectInput
            country={countryCode}
            handleChange={setCountryCode}
            index={1}
          />
        </Target>
      </div>
      <div className="section-result">
        <NumberInput value={amount} handleOnChange={handleOnChange} />
        {/* result */}
        {amount && <FinalAmount value={amount} countryCodes={countryCode} />}
      </div>
      <div className="section">
        <Button handleClick={handleSwap}>
          <i className="fa-solid fa-right-left"></i>
        </Button>
      </div>
    </div>
  );
}

function Loader() {
  return <div>Calculating...</div>;
}

function Base({ children }) {
  return <div>{children}</div>;
}

function Target({ children }) {
  return <div>{children}</div>;
}

function NumberInput({ value, handleOnChange }) {
  return (
    <div>
      <input
        type="number"
        value={value}
        autoComplete="off"
        onChange={(e) => handleOnChange(e.target.value)}
      />
    </div>
  );
}

function Button({ children, handleClick }) {
  return <button onClick={(e) => handleClick()}>{children}</button>;
}

function FinalAmount({ value, countryCodes: [base, target] }) {
  const [finalAmount, setFinalAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(
    function () {
      const controller = new AbortController();
      async function converter() {
        setIsLoading(true);
        try {
          const res = await fetch(url + base, {
            signal: controller.signal,
          });
          const data = await res.json();
          const amount = data.conversion_rates[target] * +value;
          setFinalAmount(amount.toFixed(2));
        } catch (error) {
          // console.error(error);
        } finally {
          setIsLoading(false);
        }
      }
      converter();
      return function () {
        controller.abort();
      };
    },
    [value, base, target]
  );
  return <h3>{isLoading ? <Loader /> : finalAmount}</h3>;
}

export default App;
