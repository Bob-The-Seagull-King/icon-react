import { create } from "zustand";

type TestStore = {
    count: number;
    addition: () => void;
}

export const useTestStore = create<TestStore>((set) => ({
    count: 0,
    addition: () => {
        set(
            (state) => ({count: state.count + 1})
        )},
}))