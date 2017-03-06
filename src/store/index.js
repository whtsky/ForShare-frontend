import { create } from "mobx-persist";
import LoginStateStore from "./LoginStateStore";
import SourceModeStore from "./SourceModeStore";

const persistStore = create();

export const LoginState = persistStore('login', new LoginStateStore());
export const SourceMode = persistStore('sourceMode', new SourceModeStore());
