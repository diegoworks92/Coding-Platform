import { renderWithProviders } from "./testUtils";
import { screen } from "@testing-library/react";
import Login from "../../pages/auth/Login";
import { describe, it, expect } from "vitest";

describe("Login - Renderización", () => {
  it("renderiza correctamente el formulario con los valores por defecto", () => {
    renderWithProviders(<Login />);
    expect(screen.getByPlaceholderText("Username")).toHaveValue("DiegoWorks");
    expect(screen.getByPlaceholderText("Password")).toHaveValue(
      "diegoworks.com"
    );
    expect(screen.getByRole("button", { name: /Enter/i })).toBeInTheDocument();
  });
});
