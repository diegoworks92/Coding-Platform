import { renderWithProviders } from "./testUtils";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../../pages/auth/Login";
import { describe, it, expect, vi } from "vitest";

describe("Login - Manejo de error", () => {
  it("muestra una alerta y no realiza login con credenciales incorrectas", async () => {
    const { store } = renderWithProviders(<Login />);
    const usernameInput = screen.getByPlaceholderText("Username");
    const passwordInput = screen.getByPlaceholderText("Password");

    // Simula la entrada de credenciales erróneas
    await userEvent.clear(usernameInput);
    await userEvent.type(usernameInput, "UsuarioIncorrecto");
    await userEvent.clear(passwordInput);
    await userEvent.type(passwordInput, "PassIncorrecta");

    // Se espía el método alert para comprobar su invocación
    const alertSpy = vi.spyOn(window, "alert").mockImplementation(() => {});

    const submitButton = screen.getByRole("button", { name: /Enter/i });
    await userEvent.click(submitButton);

    expect(alertSpy).toHaveBeenCalledWith(
      "Nombre de usuario o contraseña incorrectos"
    );
    // Se verifica que el estado de autenticación no se modifique
    expect(store.getState().auth.loggedIn).toBe(false);

    alertSpy.mockRestore();
  });
});
