import { observable } from 'mobx';
import { create, persist } from 'mobx-persist';

class ObservableTodoStore {
  @persist('object') @observable store = 
    {
      task: "login",
      token: "",
      username: "登陆",
      completed: false
    };

  login = (username, token) => {
    this.store.token = token;
    this.store.username = username;
    this.store.completed = true;
  }

  logout = () => {
    this.store.token = "";
    this.store.username = "登陆";
    this.store.completed = false;
  }
}

const persistStore = create();

const LoginStateStore = persistStore('store', new ObservableTodoStore);

export default LoginStateStore;