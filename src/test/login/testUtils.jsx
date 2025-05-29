import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../../store/slices/authSlice";

// Este helper envuelve el componente en el Provider de Redux y en el MemoryRouter.
// Se puede extender para incluir más contextos si es necesario.
export function renderWithProviders(
  ui,
  {
    preloadedState = { auth: { loggedIn: false, lastLocation: null } },
    store = configureStore({ reducer: { auth: authReducer }, preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <MemoryRouter>{children}</MemoryRouter>
      </Provider>
    );
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
