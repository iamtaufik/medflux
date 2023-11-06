import { create } from 'zustand';

type Store = {
  isActive: boolean;
  setIsActive: () => void;
};

export const sidebarToggle = create<Store>((set) => ({
  isActive: true,
  setIsActive: () => set((state) => ({ isActive: !state.isActive })),
}));
