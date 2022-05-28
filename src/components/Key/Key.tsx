import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'wmwm',
  storage: localStorage,
});

export const watState = atom<number>({
  key: 'watState',
  default: 500,
  effects_UNSTABLE: [persistAtom],
});

export const minState = atom<number>({
  key: 'minState',
  default: 1,
  effects_UNSTABLE: [persistAtom],
});

export const secState = atom<number>({
  key: 'secState',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const modalState = atom<boolean>({
  key: 'modalState',
  default: false,
});

export const originalWatState = atom<number>({
  key: 'originalWatState',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});
