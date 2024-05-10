import { create } from 'zustand';

interface GroupStore {
    groupId: null | string;
    actions: { changeGroupId: (groupId: string) => void };
}

const useGroupStore = create<GroupStore>((set) => ({
    groupId: null,
    actions: {
        changeGroupId: (groupId) => set({ groupId }),
    },
}));

export default useGroupStore;

export const useGroupActions = () => useGroupStore((state) => state.actions);
export const useGroupIdState = () => useGroupStore((state) => state.groupId);
