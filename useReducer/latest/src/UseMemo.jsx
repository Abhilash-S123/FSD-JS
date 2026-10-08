import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  console.log(input);

  const calculate = useMemo(() => {
    console.log(count);
    return count + 10;
  }, [count]);

  //  const calculate = () => {
  //   setCount((prev) => prev + 1)
  //     console.log(count);
  //  }

  return (
    <>
      <input onChange={(e) => setInput(e.target.value)} type="text" />
      <button onClick={() => setCount((prev) => prev + 1)}>Count</button>
      <p>{calculate}</p>
      <p>{input}</p>
    </>
  );
};

export default UseMemo;
