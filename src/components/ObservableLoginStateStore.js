import { observable } from 'mobx';
import { create, persist } from 'mobx-persist';

class ObservableTodoStore {
  @persist('list') @observable todos = [
    {
      task: "login",
      token: "",
      username: "登陆",
      completed: false
    }
  ];

  login = (username, token) => {
    this.todos[0].token = token;
    this.todos[0].username = username;
    this.todos[0].completed = true;
  }

  logout = () => {
    this.todos[0].token = "";
    this.todos[0].username = "登陆";
    this.todos[0].completed = false;
  }
}

const persistStore = create();

const LoginStateStore = persistStore('store', new ObservableTodoStore);

export default LoginStateStore;