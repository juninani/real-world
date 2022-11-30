import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const userAccountStatus = atom({
  key: "userAccount",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue: any, _: any, isReset: any) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

const tokenStoredList = atom({
  key: "tokenValue",
  default: "",
  effects_UNSTABLE: [localStorageEffect("token")],
});

export { userAccountStatus, tokenStoredList };
