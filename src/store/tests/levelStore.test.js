import { act, renderHook } from "@testing-library/react";
import { create } from "zustand";

const useLevelStore = create((set) => ({
  level: 1,
  incrementLevel: () => set((state) => ({ level: state.level + 1 })),
  decrementLevel: () =>
    set((state) => ({ level: Math.max(1, state.level - 1) })),
  resetLevel: () => set(() => ({ level: 1 })),
}));

describe("useGenderStore", () => {
  afterEach(() => {
    const { result } = renderHook(() => useLevelStore());
    act(() => result.current.resetLevel());
  });

  it("initial state items is 1", () => {
    const { result } = renderHook(() => useLevelStore());
    expect(result.current.level).toEqual(1);
  });

  it("incrementLevel is called => value increases by one", () => {
    const { result } = renderHook(() => useLevelStore());
    expect(result.current.level).toEqual(1);

    act(() => result.current.incrementLevel());
    expect(result.current.level).toEqual(2);
    act(() => result.current.incrementLevel());
    expect(result.current.level).toEqual(3);
  });

  it("decrementLevel is called => value decreases by one", () => {
    const { result } = renderHook(() => useLevelStore());
    expect(result.current.level).toEqual(1);

    act(() => result.current.incrementLevel());
    expect(result.current.level).toEqual(2);

    act(() => result.current.decrementLevel());
    expect(result.current.level).toEqual(1);
    act(() => result.current.decrementLevel());
    expect(result.current.level).toEqual(1);
  });

  it("resetLevel is called => value reset to initial value", () => {
    const { result } = renderHook(() => useLevelStore());
    expect(result.current.level).toEqual(1);

    act(() => result.current.incrementLevel());
    expect(result.current.level).toEqual(2);
    act(() => result.current.resetLevel());
    expect(result.current.level).toEqual(1);
  });
});
