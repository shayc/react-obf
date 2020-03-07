import { renderHook, act } from "@testing-library/react-hooks";

import useGrid from "./useGrid";

test("return initial grid values", () => {
  const initialGrid = {
    columns: 3,
    rows: 3,
    order: []
  };
  const { result } = renderHook(() => useGrid(initialGrid));

  expect(result.current.columns).toBe(3);
  expect(result.current.rows).toBe(3);
  expect(result.current.order).toEqual([]);
});

test("set columns", () => {
  const initialGrid = {
    columns: 1,
    rows: 1,
    order: []
  };
  const { result } = renderHook(() => useGrid(initialGrid));

  act(() => {
    result.current.setColumns(3);
  });

  expect(result.current.columns).toBe(3);
});

test("set rows", () => {
  const initialGrid = {
    columns: 1,
    rows: 1,
    order: []
  };
  const { result } = renderHook(() => useGrid(initialGrid));

  act(() => {
    result.current.setRows(3);
  });

  expect(result.current.rows).toBe(3);
});

test("set order", () => {
  const initialGrid = {
    columns: 1,
    rows: 1,
    order: []
  };
  const expectedOrder = ["a", "c"];

  const { result } = renderHook(() => useGrid(initialGrid));

  act(() => {
    result.current.setOrder(expectedOrder);
  });

  expect(result.current.order).toBe(expectedOrder);
});
