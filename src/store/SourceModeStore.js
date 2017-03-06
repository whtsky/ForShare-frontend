import { observable } from 'mobx';
import { persist } from 'mobx-persist';


export default class LoginStateStore {
    @persist @observable mode = "link";

    changeMode(modeValue) {
      this.mode = modeValue;
    }
}