import { useState } from "react";

const initialHistory = [];
const initialIndex = -1;

function useNavigation(userHistory = initialHistory, userIndex = initialIndex) {
  const [history, setHistory] = useState(userHistory);
  const [index, setIndex] = useState(userIndex);

  const backDisabled = index <= 0;
  const forwardDisabled = index >= history.length - 1;
  const currentHistory = history[index];

  function incIndex() {
    setIndex(i => i + 1);
  }

  function decIndex() {
    setIndex(i => i - 1);
  }

  function goForward() {
    !forwardDisabled && incIndex();
  }

  function goBack() {
    !backDisabled && decIndex();
  }

  function push(item) {
    const slicedHistory = history.slice(0, index + 1);
    setHistory([...slicedHistory, item]);
    incIndex();
  }

  function set(history, index = history.length - 1) {
    setHistory(history);
    setIndex(index);
  }

  function clear() {
    set(initialHistory, initialIndex);
  }

  return {
    backDisabled,
    clear,
    currentHistory,
    forwardDisabled,
    goBack,
    goForward,
    history,
    index,
    push,
    set
  };
}

export default useNavigation;
