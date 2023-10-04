import * as zustand from "zustand";
import { act } from "@testing-library/react";

const { create: actualCreate, createStore: actualCreateStore } =
  jest.requireActual < typeof zustand > "zustand";

// a variable to hold reset functions for all stores declared in the app
export const storeResetFns = new Set();

// when creating a store, we get its initial state, create a reset function and add it in the set
export const create = () => {
  console.log("zustand create mock");

  return (stateCreator) => {
    const store = actualCreate(stateCreator);
    const initialState = store.getState();
    storeResetFns.add(() => {
      store.setState(initialState, true);
    });
    return store;
  };
};

// when creating a store, we get its initial state, create a reset function and add it in the set
export const createStore = (stateCreator) => {
  console.log("zustand createStore mock");

  const store = actualCreateStore(stateCreator);
  const initialState = store.getState();
  storeResetFns.add(() => {
    store.setState(initialState, true);
  });
  return store;
};

// reset all stores after each test run
afterEach(() => {
  act(() => {
    storeResetFns.forEach((resetFn) => {
      resetFn();
    });
  });
});