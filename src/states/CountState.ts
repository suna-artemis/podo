import { atom } from 'jotai'

const countAtom = atom(0)

export const countState = atom(
  (get) => get(countAtom),
  (get, set) => {
    set(countAtom, get(countAtom) + 1)
  },
)
