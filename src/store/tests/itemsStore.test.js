import { act, renderHook } from "@testing-library/react";
import { create } from "zustand";

const useItemsStore = create((set) => ({
  items: 0,
  incrementItems: () => set((state) => ({ items: state.items + 1 })),
  decrementItems: () => set((state) => ({ items: state.items - 1 })),
  resetItems: () => set(() => ({ items: 0 })),
}));

describe("useGenderStore", () => {
  afterEach(() => {
    const { result } = renderHook(() => useItemsStore());
    act(() => result.current.resetItems());
  });

  it("initial state items is 0", () => {
    const { result } = renderHook(() => useItemsStore());
    expect(result.current.items).toEqual(0);
  });

  it("incrementItems is called => value increases by one", () => {
    const { result } = renderHook(() => useItemsStore());
    expect(result.current.items).toEqual(0);

    act(() => result.current.incrementItems());
    expect(result.current.items).toEqual(1);
    act(() => result.current.incrementItems());
    expect(result.current.items).toEqual(2);
  });

  it("decrementItems is called => value decreases by one", () => {
    const { result } = renderHook(() => useItemsStore());
    expect(result.current.items).toEqual(0);

    act(() => result.current.decrementItems());
    expect(result.current.items).toEqual(-1);
    act(() => result.current.decrementItems());
    expect(result.current.items).toEqual(-2);
  });

  it("resetItems is called => value reset to initial value", () => {
    const { result } = renderHook(() => useItemsStore());
    expect(result.current.items).toEqual(0);

    act(() => result.current.incrementItems());
    expect(result.current.items).toEqual(1);
    act(() => result.current.resetItems());
    expect(result.current.items).toEqual(0);
  });
});
