import { selector } from "recoil";
import {langageState} from "../../components/Header"

const langageStateGet = selector({
    key: 'langageStateGet',
    get: ({get}) => {
        const state = get(langageState);
        return state;
    },
  });

export {langageStateGet};