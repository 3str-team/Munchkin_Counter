import { act, renderHook } from "@testing-library/react";
import { create } from "zustand";

const useSideCountStore = create((set) => ({
  side: 0,
  setCount: (side) => set(() => ({ side })),
  resetCount: () => set(() => ({ side: 0 })),
}));

describe("useSideCountStore", () => {
  afterEach(() => {
    const { result } = renderHook(() => useSideCountStore());
    act(() => result.current.resetCount());
  });

  it("Initial state side is 0", () => {
    const { result } = renderHook(() => useSideCountStore());
    expect(result.current.side).toEqual(0);
  });

  it("setCount called => set new value in state", () => {
    const { result } = renderHook(() => useSideCountStore());
    expect(result.current.side).toEqual(0);

    act(() => result.current.setCount(10));
    expect(result.current.side).toEqual(10);

    act(() => result.current.setCount(-10));
    expect(result.current.side).toEqual(-10);
  });

  it("resetCount called => reset state to initial value", () => {
    const { result } = renderHook(() => useSideCountStore());
    expect(result.current.side).toEqual(0);

    act(() => result.current.setCount(10));
    expect(result.current.side).toEqual(10);

    act(() => result.current.resetCount());
    expect(result.current.side).toEqual(0);
  });
});
