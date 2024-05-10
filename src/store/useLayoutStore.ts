import { create } from 'zustand';

interface LayoutStore {
    selectedMenu: string;
    actions: {
        setSelectedMenu: (selectedMenu: string) => void;
    };
}

const useLayoutStore = create<LayoutStore>((set) => ({
    selectedMenu: 'feed',
    actions: {
        setSelectedMenu: (selectedMenu) => set({ selectedMenu }),
    },
}));

export default useLayoutStore;

export const useLayoutActions = () => useLayoutStore((state) => state.actions);
export const useLayoutSelectMenuState = () =>
    useLayoutStore((state) => state.selectedMenu);
