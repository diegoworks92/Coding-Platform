import { render } from "@testing-library/react";
import type { RenderOptions as RTLRenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../../store/slices/authSlice";
import type { ReactElement, ReactNode } from "react";
import type { Store } from "@reduxjs/toolkit";

// Define el estado global; aquí suponemos que lastLocation puede ser string o null.

export interface RootState {
  auth: {
    loggedIn: boolean;
    lastLocation: string | null;
  };
}

// Define las opciones personalizadas para el render.
interface CustomRenderOptions extends Omit<RTLRenderOptions, "wrapper"> {
  preloadedState?: RootState;
  store?: Store<RootState>;
}

// El helper tipado. Usamos un preloadedState completo para evitar que el compilador se queje.
export function renderWithProviders(
  ui: ReactElement,
  {
    preloadedState = { auth: { loggedIn: false, lastLocation: null } },
    store = configureStore<RootState>({
      reducer: { auth: authReducer },
      preloadedState,
    }),
    ...renderOptions
  }: CustomRenderOptions = {}
) {
  // Tipamos 'children' como ReactNode para asegurar el tipado correcto.
  function Wrapper({ children }: { children: ReactNode }): JSX.Element {
    return (
      <Provider store={store}>
        <MemoryRouter>{children}</MemoryRouter>
      </Provider>
    );
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
