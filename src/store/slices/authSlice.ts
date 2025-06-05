import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  loggedIn: boolean;
  lastLocation: string | null;
}

// ✅ Recuperar sesión guardada al iniciar la app
const initialState: AuthState = {
  loggedIn: localStorage.getItem("loggedIn") === "true",
  lastLocation: localStorage.getItem("lastLocation") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state) => {
      state.loggedIn = true;
      localStorage.setItem("loggedIn", "true"); // ✅ Guardar sesión
    },
    logOut: (state) => {
      state.loggedIn = false;
      localStorage.removeItem("loggedIn"); // ✅ Eliminar sesión
    },
    setLastLocation: (state, action: PayloadAction<string | null>) => {
      state.lastLocation = action.payload;
      if (action.payload) {
        localStorage.setItem("lastLocation", action.payload); // ✅ Guardar última ubicación
      } else {
        localStorage.removeItem("lastLocation"); // ✅ Eliminar si es null
      }
    },
  },
});

export const { logIn, logOut, setLastLocation } = authSlice.actions;

export default authSlice.reducer;
