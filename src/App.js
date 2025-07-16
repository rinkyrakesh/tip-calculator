import { useState } from "react";

function BillInput({ bill, setBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="0"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      ></input>
    </div>
  );
}
console.log("bill");
function ServicePercentage({ tip, setTip, children }) {
  return (
    <div>
      <label>{children}</label>
      <select value={tip} onChange={(e) => setTip(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">it was OK (5%)</option>
        <option value="10">it was good (10%)</option>
        <option value="20">Absolutely Amazing (20%)</option>
      </select>
    </div>
  );
}
function PayBill({ bill, totalPay, avgTip }) {
  return (
    <div>
      <h3>
        ` You pay ${totalPay} (${bill}+${avgTip} tip)`
      </h3>
    </div>
  );
}

function Reset({ handleReset }) {
  return <button onClick={handleReset}>Reset</button>;
}

function App() {
  const [bill, setBill] = useState();
  const [tip1, setTip1] = useState();
  const [tip2, setTip2] = useState();
  const avgTip = (tip1 + tip2) / 2;
  const totalPay = bill + avgTip;

  function handleReset() {
    setBill("");
    setTip1(0);
    setTip2(0);
  }

  return (
    <div className="App">
      <BillInput bill={bill} setBill={setBill} />
      <ServicePercentage tip={tip1} setTip={setTip1}>
        How did you like the service?
      </ServicePercentage>
      <ServicePercentage tip={tip2} setTip={setTip2}>
        How did you friend like the service?
      </ServicePercentage>
      {bill > 0 && (
        <>
          <PayBill bill={bill} totalPay={totalPay} avgTip={avgTip} />
          <Reset handleReset={handleReset} />
        </>
      )}
    </div>
  );
}

export default App;
