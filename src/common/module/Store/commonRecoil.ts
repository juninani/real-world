import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const NavMenu = atom({
  key: "nav",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

const activeNav = atom({
  key: "activeNav",
  default: "/home",
  effects_UNSTABLE: [persistAtom],
});

export { NavMenu, activeNav };
