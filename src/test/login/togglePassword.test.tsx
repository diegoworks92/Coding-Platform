import { renderWithProviders } from "./testUtils";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../../pages/auth/Login";
import { describe, it, expect } from "vitest";

describe("Login - Toggle de visibilidad de contraseña", () => {
  it("cambia el tipo del input de contraseña al hacer clic en el toggle", async () => {
    renderWithProviders(<Login />);
    const passwordInput = screen.getByPlaceholderText("Password");

    // Verifica que inicialmente el tipo sea "password"
    expect(passwordInput).toHaveAttribute("type", "password");

    // Se obtiene el toggle y se hace clic para cambiar a "text"
    let toggleButton = screen.getByTestId("toggle-password");
    await userEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute("type", "text");

    // Re-consultamos para asegurarnos de obtener la versión actualizada del toggle
    toggleButton = screen.getByTestId("toggle-password");
    await userEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute("type", "password");
  });
});
