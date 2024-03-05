import { useEffect, useState } from "react";
import SelectInput from "./SelectInput";
import getSymbolFromCurrency from "currency-symbol-map";

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
    <div className="App container text-center">
      <div className="section-currency row mb-3">
        {/* base */}
        <Base className={"col-lg-4"}>
          <SelectInput
            country={countryCode}
            handleChange={setCountryCode}
            index={0}
            label={"From"}
          />
        </Base>
        {/* convert to symbol */}
        {/* <div className="col-lg-4">
          <i className="fa-solid fa-right-long"></i>
        </div> */}
        <div className="col-lg-4">
          <Button handleClick={handleSwap}>
            <i className="fa-solid fa-right-left"></i>
          </Button>
        </div>
        {/* target */}
        <Target className={"col-lg-4"}>
          <SelectInput
            country={countryCode}
            handleChange={setCountryCode}
            index={1}
            label={"To"}
          />
        </Target>
      </div>
      <div className="section-result">
        <NumberInput
          value={amount}
          handleOnChange={handleOnChange}
          className={"form-control mb-3"}
        />
        {/* result */}
        {amount && (
          <FinalAmount
            value={amount}
            countryCodes={countryCode}
            className={"text-center"}
          />
        )}
      </div>
    </div>
  );
}


function Loader() {
  return <div>Calculating...</div>;
}

function Base({ className, children }) {
  return <div className={className}>{children}</div>;
}

function Target({ className, children }) {
  return <div className={className}>{children}</div>;
}

function ErrorDiv({ result, errorType, handleClick }) {
  return (
    <div
      className="alert alert-danger alert-dismissible fade show"
      role="alert"
      onClick={(e) => handleClick()}
    >
      <strong>{result}</strong> {errorType}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}

function NumberInput({ value, handleOnChange, className }) {
  return (
    <div>
      <input
        className={className}
        type="number"
        value={value}
        autoComplete="off"
        placeholder="Amount"
        onChange={(e) => handleOnChange(e.target.value)}
      />
    </div>
  );
}

function Button({ children, handleClick }) {
  return (
    <button
      className="btn btn-info"
      style={{
        color: "white",
        fontSize: "1.2rem",
        borderRadius: "100%",
        width: "3rem",
        height: "3rem",
      }}
      onClick={(e) => handleClick()}
    >
      {children}
    </button>
  );
}

function FinalAmount({ value, countryCodes: [base, target], className }) {
  const [finalAmount, setFinalAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const base_symbol = getSymbolFromCurrency(base);
  const target_symbol = getSymbolFromCurrency(target);

  function handleCloseError() {
    setError(null);
  }

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
          if (data.result !== "success") {
            throw new Error(data["error-type"]);
          }
          const amount = data.conversion_rates[target] * +value;
          setFinalAmount(amount.toFixed(2));
        } catch (err) {
          if (err.name !== "AbortError") {
            // console.log(err.message);
            setError(err.message);
          }
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
  return (
    <div className="final-amount">
      {error ? (
        <ErrorDiv
          result={"Error"}
          errorType={error}
          handleClick={handleCloseError}
        />
      ) : (
        <h3 className={className}>
          {isLoading ? (
            <Loader />
          ) : (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div>
                {value} {base_symbol}
              </div>
              <div>&nbsp;=&nbsp;</div>
              <div>
                {finalAmount} {target_symbol}
              </div>
            </div>
          )}
        </h3>
      )}
    </div>
  );
}

export default App;
