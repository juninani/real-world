import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const userAccountStatus = atom({
  key: "userAccount",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export { userAccountStatus };
