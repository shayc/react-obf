import { renderHook, act } from "@testing-library/react-hooks";

import useNavigation from "./useNavigation";

test("return initial history values", () => {
  const history = ["a"];
  const index = 0;
  const { result } = renderHook(() => useNavigation(history, index));

  expect(result.current.history).toBe(history);
  expect(result.current.index).toBe(index);
});

test("goBack", () => {
  const history = ["a", "b", "c"];
  const index = 1;
  const { result } = renderHook(() => useNavigation(history, index));

  act(() => {
    result.current.goBack();
  });

  expect(result.current.index).toBe(0);
});

test("goBack stops at index 0", () => {
  const history = ["a", "b", "c"];
  const index = 0;
  const { result } = renderHook(() => useNavigation(history, index));

  act(() => {
    result.current.goBack();
  });

  expect(result.current.index).not.toBe(-1);
});

test("goForward", () => {
  const history = ["a", "b", "c"];
  const index = 1;
  const { result } = renderHook(() => useNavigation(history, index));

  act(() => {
    result.current.goForward();
  });

  expect(result.current.index).toBe(2);
});

test("goForward stops at the end of history", () => {
  const history = ["a", "b", "c"];
  const index = 2;
  const { result } = renderHook(() => useNavigation(history, index));

  act(() => {
    result.current.goForward();
  });

  expect(result.current.index).not.toBe(3);
});

test("clear", () => {
  const history = ["a", "b", "c"];
  const index = 1;
  const { result } = renderHook(() => useNavigation(history, index));

  act(() => {
    result.current.clear();
  });

  expect(result.current.history).toEqual([]);
  expect(result.current.index).toBe(-1);
});

test("forwardDisabled should be true", () => {
  const history = ["a", "b", "c"];
  const index = 2;
  const { result } = renderHook(() => useNavigation(history, index));

  expect(result.current.forwardDisabled).toBe(true);
});

test("forwardDisabled should be false", () => {
  const history = ["a", "b", "c"];
  const index = 1;
  const { result } = renderHook(() => useNavigation(history, index));

  expect(result.current.forwardDisabled).toBe(false);
});

test("backDisabled should be true", () => {
  const history = ["a", "b", "c"];
  const index = 0;
  const { result } = renderHook(() => useNavigation(history, index));

  expect(result.current.backDisabled).toBe(true);
});

test("backDisabled should be false", () => {
  const history = ["a", "b", "c"];
  const index = 1;
  const { result } = renderHook(() => useNavigation(history, index));

  expect(result.current.backDisabled).toBe(false);
});