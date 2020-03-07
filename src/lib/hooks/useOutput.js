import { useState } from "react";

const initialValues = [];

function useOutput(userValues = initialValues) {
  const [values, setValues] = useState(userValues);

  function push(value) {
    setValues(values => [...values, value]);
  }

  function pop() {
    setValues(values => values.slice(0, values.length - 1));
  }

  function clear() {
    setValues(initialValues);
  }

  function joinLastValue(join) {
    const lastValue = values[values.length - 1];
    const joinedValue = join(lastValue);

    const joinedValues = values.length
      ? [...values.slice(0, values.length - 1), joinedValue]
      : [joinedValue];

    setValues(joinedValues);
  }

  return { clear, joinLastValue, pop, push, setValues, values };
}

export default useOutput;
