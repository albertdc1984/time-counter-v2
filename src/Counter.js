import { useState } from "react";

export default function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const handleStep = (e) => {
    e.preventDefault();
    setStep(Number(e.target.value));
  };

  const handleCount = (e) => {
    e.preventDefault();
    setCount(Number(e.target.value));
  };

  const date = new Date();
  date.setDate(date.getDate() + count);

  const resetCounter = () => {
    setStep(1);
    setCount(0);
  };

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={handleStep}
        />{" "}
        {step}
      </div>
      <div>
        <button onClick={() => setCount((s) => s - step)}>-</button>
        <input type="text" value={count} onChange={handleCount} />
        <button onClick={() => setCount((s) => s + step)}>+</button>
      </div>
      <div>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
        {date.toDateString()}
      </div>
      {(count !== 0 || step !== 1) && <button onClick={resetCounter}>Reset</button>}
    </div>
  );
}
