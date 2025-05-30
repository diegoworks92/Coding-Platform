import { renderWithProviders } from "./testUtils";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../../pages/auth/Login";
import { describe, it, expect, vi, beforeEach } from "vitest";

let mockNavigate: ReturnType<typeof vi.fn>;

beforeEach(() => {
  mockNavigate = vi.fn();
  // Se realiza el mock de useNavigate; debe ejecutarse antes de renderizar el componente.
  vi.mock("react-router-dom", async () => {
    // Importa el módulo real para conservar el resto de su funcionalidad.
    const actual = await vi.importActual("react-router-dom");
    return {
      ...actual,
      useNavigate: () => mockNavigate,
    };
  });
});

describe("Login - Login exitoso", () => {
  it("despacha logIn y redirige con las credenciales correctas", async () => {
    const { store } = renderWithProviders(<Login />);
    const submitButton = screen.getByRole("button", { name: /Enter/i });
    await userEvent.click(submitButton);

    // Verifica que el estado de autenticación se haya actualizado
    expect(store.getState().auth.loggedIn).toBe(true);
    // Comprueba que se haya llamado a useNavigate con la ruta "/"
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
