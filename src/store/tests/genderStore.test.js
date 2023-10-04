import { act, renderHook } from "@testing-library/react";
import { create } from "zustand";

const useGenderStore = create((set) => ({
  isMale: true,
  changeGender: () => set((store) => ({ isMale: !store.isMale })),
}));

describe("useGenderStore", () => {
  it("initial state isMale is true", () => {
    const { result } = renderHook(() => useGenderStore());
    expect(result.current.isMale).toEqual(true);
  });

  it("gender state toggle true/false", () => {
    const { result } = renderHook(() => useGenderStore());
    expect(result.current.isMale).toEqual(true);

    act(() => result.current.changeGender());
    expect(result.current.isMale).toEqual(false);
    act(() => result.current.changeGender());
    expect(result.current.isMale).toEqual(true);
  });
});
